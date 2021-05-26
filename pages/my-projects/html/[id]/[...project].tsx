// import { listProjects} from "@/lib/generateStaticData/projectGenerator"
import BackButton from "@/components/BackButton"
import FullIframe from "@/components/FullIframe"
import { staticPaths, staticProps } from "@/lib/HtmlProjectCommon"
import { NextSeo } from "next-seo"

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
    <h1>HTML Project: {title}</h1>
    <BackButton/>
    <FullIframe src={url}/> 
  </>)
}
export default HtmlProject
export async function getStaticPaths(){
  const paths = await staticPaths()
  const noIndex = paths
    .filter(p=>p.params.project[p.params.project.length-1] === "index")
  return {
    paths:noIndex,
    fallback: false,
  };
}
interface ctx {
  params:{
    id: string;
    project:string[];
  }
}

export const getStaticProps = async (ctx: ctx) => {
  //@ts-ignore
  const {foundProject, template} = await staticProps(ctx)
  if(!foundProject){
    throw `cannot find project `
  }
 return {
   props:{
     url: template(ctx.params.project.join("/")),
     title:foundProject.title,
     description: foundProject.description,
   }
 } 
}