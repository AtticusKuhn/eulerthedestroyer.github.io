// import { listProjects} from "@/lib/generateStaticData/projectGenerator"

import {NextSeo} from "next-seo"
import { staticPaths, staticProps } from "@/lib/HtmlProjectCommon"
import {FullIframe} from "@/components/FullIframe"
import BackButton from "@/components/BackButton"
export default function HtmlProject({title, url, description}){
  return(<>
  <NextSeo
      title={title}
      openGraph={{
        title: title,
        description: `demo of an HTML project: ${description}`,
      }}
    />
   
  <h1>HTML Project:  {title}</h1>
  <BackButton />
  <FullIframe src={url} /> 
  </>)
}
export async function getStaticPaths(){
  const paths = await staticPaths()
  const indices = paths
    .filter(p=>p.params.project[p.params.project.length-1] ==="index")
    .map(p=>{
      return{
        params:{
          id:p.params.id,
        }
      }
    })
  return {
    paths:indices,
    fallback: false,
  };
}

export async function getStaticProps(ctx){
  const {foundProject, template} = await staticProps(ctx)
 return {
   props:{
     url:template("index"),
     title:foundProject.title,
     description: foundProject.description,
   }
 } 
}