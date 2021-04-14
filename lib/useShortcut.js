// this file contains global shortcuts for my site
// import Router from 'next/router'
import { useRouter } from 'next/router';
import {useEffect} from "react"
export function useShortcut(){
  const router = useRouter();
  useEffect(()=>{
    let keys = {}
    document.onkeydown = (e)=>{
      keys[e.key.toLowerCase()] = true;
      // console.log(e.target.tagName)
      if(e.target.tagName !== "BODY") return
      // console.log("keyup")
      // console.log(keys)
      if(keys["b"] && keys["shift"]) return router.push("/blog")
      if(keys["h"] && keys["shift"]) return router.push("/")
      if(keys["p"] && keys["shift"]) return router.push("/my-projects")
    }
    document.onkeyup = (e) => {
      keys[e.key.toLowerCase()] = false;
    };
  },[])
};