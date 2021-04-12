import { listProjects,makeJsString } from "@/lib/generateStaticData/projectGenerator"
import { NextSeo } from 'next-seo';
import BackButton from "@/components/BackButton"


export default function TryJsProject({js, title, description}){
  function handleClick(e) {
    eval(js)
  };
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
   <button onClick={handleClick}>run program</button>
  </>);
};


export async function getStaticProps({ params }){
  const projects = await listProjects()
  const project = projects.filter(p=>p.type==="JavaScript").find(p=> p.id===params.js)
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


