import { listProjects,makeJsString } from "@/lib/generateStaticData/projectGenerator"
import { NextSeo } from 'next-seo';
import BackButton from "@/components/BackButton"
import { FullProject, Project } from "types";

interface props {
  js: string;
  title: string;
  description: string;
}

const  TryJsProject: React.FC<props> = ({js, title, description}) =>{
  return (<>
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        title: title,
        description: `You can try out this javascript project in your broswer. ${description}`,
      }}
    />
   <h1>Try a JS project</h1>
   <h2>{title}</h2>
   <BackButton />
   <p id="output" />
   <div id="container"></div>
   <button onClick={_e => eval(js)}>run program</button>
  </>);
};
export default TryJsProject


export async function getStaticProps({ params }: {params: {js:string}}){
  const projects = await listProjects()
  const project = projects.filter(p=>p.type==="JavaScript").find(p=> p.id===params.js) as FullProject
  const js = await makeJsString(project)
  return {props:{js, title:project.title, description: project.description}}

}
export async function getStaticPaths(){
  const projects = await listProjects()
    return {
    paths: projects.filter(p=>p.type==="JavaScript").map((p) => ({
      params: {
        js: p.id
      }
    })),
    fallback: false,
  };
}


