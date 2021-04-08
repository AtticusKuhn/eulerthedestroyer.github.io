import { getBlogArticles } from "@/lib/generateStaticData/blogGenerator"
import {AceCodeViewer} from "@/components/CodeViewer"
import JsxParser from 'react-jsx-parser'

const Article = ({article, length})=>{
  return <>
    <h1>{article.title}</h1>
    <p>published {new Date(article.date).toString().split(" ").slice(0,4).join(" ")} |  {length} minute read</p>
    {/* <div dangerouslySetInnerHTML={{__html:article.file}} css={article.style} /> */}
    <JsxParser
      components={{ AceCodeViewer }}
      jsx={article.file}
    />
  </>
}


export async function getStaticProps({ params }){
  const articlesList = await getBlogArticles()
  const article = articlesList.find(a=>a.id===params.article)
  const length = Math.ceil((article.file.replace(/<[^>]+>/g, '').length)/863)
  // console.log(article.file)
  return {props:{
    article,
    length,
  }}

}
export async function getStaticPaths(){
  const articlesList = await getBlogArticles()
    return {
    paths: articlesList.map((a) => ({
      params: {
        article: a.id
      }
    })),
    fallback: false
  };
}


export default Article