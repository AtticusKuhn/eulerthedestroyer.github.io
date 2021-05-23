// import { listProjects} from "@/lib/generateStaticData/projectGenerator"

import {NextSeo} from "next-seo"
import { staticPaths, staticProps } from "@/lib/HtmlProjectCommon"
import BackButton from "@/components/BackButton"
import FullIframe from "@/components/FullIframe"

interface props {
  title: string;
  url: string;
  description: string;
}

 const HtmlProject: React.FC<props> = ({title, url, description}) =>{
  return(<>
  <NextSeo
      title={title}
      description={description}
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
export default HtmlProject
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

export async function getStaticProps(ctx : {params: {id:string, project:string}}){
  const {foundProject, template}  = await staticProps(ctx)
 return {
   props:{
     url:template("index"),
     //@ts-ignore
     title:foundProject.title,
     //@ts-ignore
     description: foundProject.description,
   }
 } 
}