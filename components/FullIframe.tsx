import { useRef } from "react"

interface props {
  src: string;
}
const  FullIframe: React.FC<props> = ({src}) =>{
  const iframeRef = useRef<HTMLIFrameElement>(null)
  // useEffect(()=>{
  //   const iframe = iframeRef.current
  //   console.log("setting height to", iframe.contentWindow.document.body.scrollHeight)
  //   iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    
  // },[])
  return (<>
  <iframe  frameBorder="0" scrolling="no" ref={iframeRef} src = {src} />
  <style jsx>{`
  height:100vh;
  width: 100%;
  `}</style>
  </>)
}
export default FullIframe