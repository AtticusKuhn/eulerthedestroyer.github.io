// import { listProjects} from "@/lib/generateStaticData/projectGenerator"
import { staticPaths, staticProps} from "@/lib/HtmlProjectCommon"
import {NextSeo} from "next-seo"
import {FullIframe} from "@/components/FullIframe"
import BackButton from "@/components/BackButton"
export default function HtmlProject({title, url, description}){
  return(<>
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        title: title,
        description: `demo of an HTML project: ${description}`,
      }}
    />
    <h1>HTML Project: {title}</h1>
    <BackButton/>
    <FullIframe src={url}/> 
  </>)
}
export async function getStaticPaths(){
  const paths = await staticPaths()
  const noIndex = paths
    .filter(p=>!p.params.project[p.params.project.length-1] === "index")
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