const axios = require("axios")
const fs = require("fs")
import {clearDirectory, snakeToCamel} from "../../utils"
var AdmZip = require('adm-zip');
const { exec } = require("child_process");

import webpack from 'webpack';
const token =process.env.GITHUB_TOKEN
// const config = require('../webpack.config');

// var http = require('http');

const projects = [
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
    description:" a fun and asy game written entireely in html",
    githubUrl:"eulerthedestroyer/html-game"
  }
]
async function getZip(file_url){
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
  const zip = new AdmZip(data);
  zip.branch = branch;
  return zip
}
async function zipEntries(file_url){
  const zip = await getZip(file_url)
  return zip.getEntries()
}
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
const classifyProject = async (project)=>{
  const req = await axios.get(`https://api.github.com/repos/${project.githubUrl}/languages`,{
    headers: {
        'Authorization': `token ${token}` 
    }
  })
  const projectLanguages = req.data
  const langs = Object.entries(projectLanguages).sort((a,b) => b[1] - a[b])
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
    exec(cmd, (error, stdout, stderr) => {console.log("done executing command")})

  })
}
export async function getProjects(){
  console.log("getprojects called")
  return await Promise.all(projects.map(async (project)=>{
    const files = await zipEntries(project.githubUrl)
    return{
      description:project.description, 
      id:project.githubUrl.split("/")[1],
      title: snakeToCamel(project.githubUrl),
      files: files.map(file=>{
        return {
          path: file.entryName,
          file:file.getData().toString("utf-8"),
        }
      }),
    }
  }))
}
const getMainFile =  (project)=>{
  const files = project.zip.getEntries().map(f=>f.entryName)
  // console.log({files})
  const possibilities = [/.*index.html/, /.*main.js/, /.*index.js/, /.*src\/index.html/, /.*src\/index.js/]
  const intersection = files.filter(f=> possibilities.some(regex => regex.test(f)))
  if(intersection.length===0) throw `cannot find main file of ${project.title}`
  return intersection[0]
}
export const makeJsString = async (project)=>{
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
  return new Promise((resolve, reject)=>{
  compiler.run((err, stats) => {  
      const data = stats.toJson();

      const app = data.assetsByChunkName.app[0] //here you can get the file name  
      // if you don't have chunks then you should use data.assets;

      let file = fs.readFileSync(output+"/app.js", "utf-8"); //read the file
      file = `
// const f = () =>{
 let tmp = console.log;
  let msg="";
  console.log = (n)=>{
    tmp(n)
    msg+=n
  };
  try{
  ${file}
  }catch(e){
    msg+=e
  }
      document.getElementById("output").innerHTML+=msg+"<br>"
  // alert(msg)
  // document.getElementById("output").innerText = msg;
  console.log = tmp;
// }
// window.addEventListener('DOMContentLoaded', f);
// if(document.getElementById("output")){
  // f()
// }
      `
      resolve(file)
  });
})
}