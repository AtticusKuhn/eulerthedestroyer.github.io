import { listProjects,makeJsString } from "@/lib/generateStaticData/projectGenerator"

export default function bruh({js, title}){
  function handleClick(e) {
    eval(js)
  };
  return (<>
   <h1>Try a JS project</h1>
   <h2>{title}</h2>
   <p id="output" />
   <div id="container"></div>
   <button onClick={handleClick}>run program</button>
  </>);
};


export async function getStaticProps({ params }){
  const projects = await listProjects()
  const project = projects.filter(p=>p.type==="JavaScript").find(p=> p.id===params.js)
  const js = await makeJsString(project)
  return {props:{js, title:project.title}}

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

