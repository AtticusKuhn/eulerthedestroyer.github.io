// import { listProjects} from "@/lib/generateStaticData/projectGenerator"
import { staticPaths, staticProps, FullIframe } from "@/lib/HtmlProjectCommon"
import {NextSeo} from "next-seo"

export default function HtmlProject({title, url, description}){
  return(<>
    <NextSeo
      title={title}
      openGraph={{
        title: title,
        description: `demo of an HTML project: ${description}`,
      }}
    />
    <h1>HTML Project: {title}</h1>
    <FullIframe src={url}/> 
  </>)
}
export async function getStaticPaths(){
  // const projects = await listProjects()
  // const htmlProjects = projects.filter(p=>p.type==="HTML")
  // const paths = [].concat(...htmlProjects.map(project=>{
  //   const files = project
  //     .zip
  //     .getEntries()
  //     .map(f=>f.entryName)
  //     .filter(f=>f.endsWith(".html") && !f.endsWith("index.html"))
  //     .map(f=>f.substring(0, f.length-5))
  //   return files.map(f=>{
  //     return  {params:{
  //       id:project.id,
  //       project:f.split("/").slice(1),
  //     }}
  //   })
  // }))
  const paths = await staticPaths()
  const noIndex = paths
    .filter(p=>!p.params.project[p.params.project.length-1] === "index")
  

  // console.log(JSON.stringify(paths, null, 2))
  return {
    paths:noIndex,
    fallback: false,
  };
}

export async function getStaticProps(ctx){
  const {foundProject, template} = await staticProps(ctx)
 return {
   props:{
     url: template(ctx.project.join("/")),
     title:foundProject.title,
     description: foundProject.description,
   }
 } 
}