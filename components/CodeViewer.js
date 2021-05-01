import { useEffect } from "react";
import Prism from "@/public/scripts/prism.js"
export default function CodeViewer(props) {
    let {children, language} = props
    children = children.trim()
    const className = `language-${language}`
    useEffect(()=>{
        Prism.highlightAll()
        console.log("useEffect")
        return ()=>{
            console.log("unmount")
        }
    },[props])
    return (<>
        <pre>
            <code className={className}>
                {children}
            </code>
        </pre>
    </>)
}