// import { listProjects} from "@/lib/generateStaticData/projectGenerator"
import { staticPaths, staticProps} from "@/lib/HtmlProjectCommon"
import {NextSeo} from "next-seo"
import BackButton from "@/components/BackButton"
import { GetStaticProps } from "next"
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

export const getStaticProps: GetStaticProps = async (ctx) => {
  //@ts-ignore
  const {foundProject, template} = await staticProps(ctx)
 return {
   props:{
  //@ts-ignore
     url: template(ctx.project.join("/")),
  //@ts-ignore
     title:foundProject.title,
  //@ts-ignore
     description: foundProject.description,
   }
 } 
}