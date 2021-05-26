// import { getBlogArticles } from "@/lib/generateStaticData/blogGenerator"
import {useState} from "react"
// // import ArticlePreview from "@/components/ArticlePreview";
import {  listProjects, writeToPublic } from "@/lib/generateStaticData/projectGenerator";
import ProjectPreview from "@/components/Preview/ProjectPreview";
import { NextSeo } from 'next-seo';



export default function MyProjects({projects} : {projects: [{ description: string, demoUrl: string, title: string, fullUrl: string, language: string}]}){
  const [searchValue, setSearchValue] = useState('');
  const filteredProjects = projects
    .filter((project) =>
      Object.values(project).join(" ").toLowerCase().includes(searchValue.toLowerCase())
    );
  return <>
    <NextSeo
      title="my projects"
      description="these are the projects in html and javascript I am currently working on"
      openGraph={{
        title: 'My Projects',
        description: 'Check out the cool stuff I have been working on, all open source and with live demos',
      }}
    />
    <h1>these are my projects</h1>
    <p>Feel free to check them out, I can only have JavaScript and HTML projects here because only they will run on this site</p>
    <input
        aria-label="Search projects"
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search projects"
      />
     {/*@ts-ignore*/}
    {filteredProjects.map(project=><ProjectPreview {...project} />)}
  </>
}

export async function getStaticProps(){
  const projects  = (await listProjects()).map(p=>{
   return {
     description:p.description,
     demoUrl:p.demoUrl,
     title:p.title,
     fullUrl:p.fullUrl,
     language:p.type,
   }
  })
  writeToPublic()
  // console.log(projects[0].files[1])
  // console.log({projects})
  return {props:{projects}}
}