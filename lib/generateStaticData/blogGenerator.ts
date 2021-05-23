//this file converts content

import { removeHTML, toSnakeCase } from "utils"
import {Article, APIresponse, Component} from "types"
//from the CMS into pages
import axios from "axios"
// this gets the google docs data for the blog
export async function getBlogArticles(): Promise<Article[]> {
    const folder =process.env.BLOG_FOLDER
    const url = `https://www.googleapis.com/drive/v2/files?q='${folder}'+in+parents&key=${process.env.GOOGLE_API_KEY}`
    const data: APIresponse = (await axios.get(url)).data
    console.log("making a req")
    const articles = await Promise.all(data.items.map(async (item) => {
        const fileReq = await axios.get(item.exportLinks["text/html"])
        let {file, style, images} = processHTML(fileReq.data)
        return {
            title: item.title,
            id: toSnakeCase(item.title),
            file,
            style,
            images,
            image:images && images.length > 0 ? images[0]  : "bruh",
            date: item.modifiedDate,
            description: removeHTML(file).split(" ").slice(0,7).join(" ") + "..."
        }
    }))
    return articles
}
const convertToHTML = (s:string):string =>
  s
    .replace(/&/g, "&amp;")
    .replace(/>/g, "&gt;")
    .replace(/</g, "&lt;")
    .replace(/"/g, "&quot;");
// turns component into regex string
const inComponent = (component: Component, s: string) =>
  `(?<=${component.head}.*?)${s}.*?(?=.*${component.tail})`;
// turns component into regex
const makeRegex = (component: Component, s: string) => new RegExp(inComponent(component, s), "g");
//takes HTML given to us by google docs and turns that into usable HTML for pages

export const processHTML = (html: string) => {
  const Components = [
    "```.```",
  ].map((e) => {
    const [head, tail] = e.split(".");
    return {
      head,
      tail,
      headEncoded: convertToHTML(e[0]),
      tailEncoded: convertToHTML(e[1])
    };
  });
  for (const component of Components)
    html = html
      .replace(new RegExp(component.headEncoded, "g"), component.head)
      .replace(new RegExp(component.tailEncoded, "g"), component.tail)
      .replace(makeRegex(component, `(<(p|span)[^>]*>)`), "") //delete all <p> and <span>
      .replace(makeRegex(component, `(</(p|span)[^>]*>)`), "\n") //delete all <p> and <span>
      .replace(makeRegex(component, `(&nbsp;)`), "") //what is nbsp
      .replace(makeRegex(component, `(&quot;)`), '"') // quot is "
      .replace(makeRegex(component, `(&#39;)`), "'"); // #39 is '
  html = html.replace(/```([a-z]+),(.*?)```/gs, "<CodeViewer children='$2' language='$1' />")
  const styleArr = html.match(/(?<=\<style.*\>).*(?=\<\/style\>)/g)
  const noCSS= html.replace(/\<style.*\>.*\<\/style\>/g, "")
  const style = styleArr && styleArr.length > 0 ? styleArr[0]: "help me bruh" 
  const noHead = noCSS.replace(/<html[^>]*>/ig, '')// delete all <html> tags
        .replace(/<\/html[^>]*>/ig, '')
        .replace(/<body[^>]*>/ig, '') // delete all <body> tags
        .replace(/<\/body[^>]*>/ig, '')
        .replace(/<head[^>]*>/ig, '')
        .replace(/<\/head[^>]*>/ig, '')
        .replace(/<meta[^>]*>/ig, '');
  const images: string[]  = noHead.match(/(?<=\<img [^>]*src=")([^"]+)(?=")/ig) ?? []
  return {
    style,
    file:noHead,
    images,
  }
}

