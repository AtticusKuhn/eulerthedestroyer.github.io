const axios = require("axios")
const fs = require("fs")
import {clearDirectory, snakeToCamel} from "../../utils"
var AdmZip = require('adm-zip');
// const { exec } = require("child_process");
import {exec} from "child_process"
import webpack from 'webpack';
import { ADMZipClasss, FullProject, GithubLangResp, Project, ZipEntry } from "types";
const token =process.env.GITHUB_TOKEN
// const config = require('../webpack.config');

// var http = require('http');

const projects: Project[] = [
  {
    title:"an html site",
    description:"I stole this",
    githubUrl:"mdn/beginner-html-site-scripted"
  },{
    title:"primes",
    description:"A primes problem written in javascript",
    githubUrl:"eulerthedestroyer/Primes-Problem",
  },{
    title:"number to word",
    description:"this converts numbers to words",
    githubUrl:"eulerthedestroyer/number-to-word"
  },{
    title:"pollard rho",
    description:"an algorithm to factor numbers",
    githubUrl:"eulerthedestroyer/Pollard-rho"
  },{
    title:"ultimate tic tac toe",
    description:" this fun game brought to life with html ",
    githubUrl:"eulerthedestroyer/tictactoe"
  },{
    title:"HTML game",
    description:" a fun and easy game written entireely in html",
    githubUrl:"eulerthedestroyer/html-game"
  },{
    title:"colour changer script",
    description:" chamge the colors of a website with ths fun script",
    githubUrl:"eulerthedestroyer/colour-changer-script"
  }
]
async function getZip(file_url: string){
  const branch = (await axios.get(`https://api.github.com/repos/${file_url}`,{headers: {
    'Authorization': `token ${token}` 
  }})).data.default_branch
  const req = await axios.get(`http://github.com/${file_url}/archive/refs/heads/${branch}.zip`, {
    responseType: 'arraybuffer',
    headers: {
      'Authorization': `token ${token}` 
    }
  });
  const data = req.data
  const zip: ADMZipClasss = new AdmZip(data);
  zip.branch = branch;
  return zip
}
// async function zipEntries(file_url: string){
//   const zip = await getZip(file_url)
//   return zip.getEntries()
// }
export const listProjects=async ()=>await Promise.all(projects.map(async (project)=>{
  const type = await classifyProject(project) 
  const zip = (await getZip(project.githubUrl))
  const id =project.githubUrl.split("/")[1]
  const demoUrl = type==="JavaScript" 
    ? `/my-projects/js/${id}` 
    : `/my-projects/html/${id}`
  return{
      description:project.description, 
      id:id,
      title: project.title || snakeToCamel(project.githubUrl),
      githubUrl:project.githubUrl,
      fullUrl:`http://github.com/${project.githubUrl}`,
      type: type,
      zip,
      demoUrl,
    }
  })
)
const classifyProject = async (project: Project)=>{
  const req = await axios.get(`https://api.github.com/repos/${project.githubUrl}/languages`,{
    headers: {
        'Authorization': `token ${token}` 
    }
  })
  // console.log(req.data)
  const projectLanguages: GithubLangResp = req.data
  const langs = Object.entries(projectLanguages).sort((a,b) => b[1] - a[1])
  const biggestLanguage = langs[0][0]
  const isValid = ["JavaScript", "HTML", "CSS"].includes(biggestLanguage)
  if(!isValid) throw `invalid language, expected javascript, html, css but got ${biggestLanguage}`
  const isHTML = langs.some(lang=> lang[0]==="HTML")
  return isHTML ? "HTML" : "JavaScript"
}
export const writeToPublic = async()=>{
  clearDirectory(`${process.cwd()}/public/my-projects`)
  console.log("wrtieToPublic Called")
  const projects = (await listProjects()).filter(p=>p.type==="HTML")
  projects.forEach(async(p)=>{
    // const zip = await getZip(p.githubUrl)
    p.zip.extractAllTo(`${process.cwd()}/public/my-projects/`, /*overwrite*/true);
    const cmd = `mv ${process.cwd()}/public/my-projects/${p.id}-${p.zip.branch} ${process.cwd()}/public/my-projects/${p.id}`
    // console.log(cmd)
    exec(cmd, (_error, _stdout, _stderr) => {console.log("done executing command")})

  })
}
// export async function getProjects(){
//   console.log("getprojects called")
//   return await Promise.all(projects.map(async (project)=>{
//     const files = await zipEntries(project.githubUrl)
//     return{
//       description:project.description, 
//       id:project.githubUrl.split("/")[1],
//       title: snakeToCamel(project.githubUrl),
//       files: files.map(file=>{
//         console.log(file)
//         console.log(Object.keys(file))
//         return {
//           path: file.entryName,
//           file:file.getData().toString("utf-8"),
//         }
//       }),
//     }
//   }))
// }
const getMainFile =  (project: FullProject)=>{
  const files: string[] = project.zip.getEntries().map((f: ZipEntry)=>f.entryName)
  // console.log({files})
  const possibilities = [/.*index.html/, /.*main.js/, /.*index.js/, /.*src\/index.html/, /.*src\/index.js/]
  const intersection = files.filter(f=> possibilities.some(regex => regex.test(f)))
  if(intersection.length===0) throw `cannot find main file of ${project.title}`
  return intersection[0]
}
export const makeJsString = async (project: FullProject)=>{
  const temp = `${process.cwd()}/temp`
  const zip = await getZip(project.githubUrl)
  zip.extractAllTo(temp, true)
  const output = `${temp}/output`
  const compiler = webpack({
    devtool: 'source-map',
    entry: {
      app: `${temp}/${getMainFile(project)}`
    },
    output: {
      path: output,
    }
  });
  return new Promise((resolve, _reject)=>{
  compiler.run((_err, stats) => {  
    if(!stats){
      return
    }
      const data = stats.toJson();
      //@ts-ignore
      const app = data.assetsByChunkName.app[0] //here you can get the file name  
      // if you don't have chunks then you should use data.assets;

      let file = fs.readFileSync(output+"/app.js", "utf-8"); //read the file
      file = `
  let tmp = console.log;
  let msg="";
  console.log = (n)=>{
    tmp(n)
    msg+=n+"<br>"
  };
  try{
    ${file}
  }catch(e){
    msg+=e+"<br>"
  }
  document.getElementById("output").innerHTML+=msg
  console.log = tmp;
      `
      resolve(file)
  });
})
}