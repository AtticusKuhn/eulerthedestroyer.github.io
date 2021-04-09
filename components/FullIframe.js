import {useRef, useEffect} from "react"

export function FullIframe({src}){
  const iframeRef = useRef(null)
  useEffect(()=>{
    const iframe = iframeRef.current
    console.log("setting height to", iframe.contentWindow.document.body.scrollHeight)
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
  },[])
  return (<>
  <iframe  frameborder="0" scrolling="no" ref={iframeRef} src = {src} />
  <style jsx>{`
  height:100vh;
  width: 100%;
  `}</style>
  </>)
}