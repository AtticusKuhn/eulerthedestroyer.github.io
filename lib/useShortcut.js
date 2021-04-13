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

      console.log("keyup")
      console.log(keys)
      if(keys["b"] && keys["shift"]) return router.push("/blog")
      if(keys["h"] && keys["shift"]) return router.push("/")
      if(keys["p"] && keys["shift"]) return router.push("/my-projects")
    }
    document.onkeyup = (e) => {
      keys[e.key.toLowerCase()] = false;
    };
    // if (e.which == 77) {
    //   alert("M key was pressed");
    // } else if (e.ctrlKey && e.which == 66) {
    //   alert("Ctrl + B shortcut combination was pressed");
    // } else if (e.ctrlKey && e.altKey && e.which == 89) {
    //   alert("Ctrl + Alt + Y shortcut combination was pressed");
    // } else if (e.ctrlKey && e.altKey && e.shiftKey && e.which == 85) {
    //   alert("Ctrl + Alt + Shift + U shortcut combination was pressed");
  // }
  },[])
};