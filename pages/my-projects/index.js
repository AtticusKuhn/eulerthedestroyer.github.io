// import { getBlogArticles } from "@/lib/generateStaticData/blogGenerator"
import {useState} from "react"
// // import ArticlePreview from "@/components/ArticlePreview";
import {  listProjects, writeToPublic } from "@/lib/generateStaticData/projectGenerator";
import ProjectPreview from "@/components/ProjectPreview";

export default function Blog({projects}){
  const [searchValue, setSearchValue] = useState('');
  const filteredProjects = projects
    .filter((project) =>
      project.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  return <>
    <h1>these are my projects</h1>
    <p>Feel free to check them out, I can only have JavaScript and HTML projects here because only they will run on this site</p>
    <input
        aria-label="Search projects"
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search projects"
      />
    {filteredProjects.map(project=><ProjectPreview {...project} />)}
  </>
}

export async function getStaticProps(){
  const projects  = (await listProjects()).map(p=>{
   return {
     description:p.description,
     demoUrl:p.demoUrl,
     title:p.title,
     fullUrl:p.fullUrl
   }
  })
  writeToPublic()
  // console.log(projects[0].files[1])
  // console.log({projects})
  return {props:{projects}}
}