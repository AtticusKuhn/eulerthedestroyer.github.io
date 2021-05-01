import CodeViewer from "@/components/CodeViewer"
import JsxParser from 'react-jsx-parser'
// import {style} from "./style"
// import "./style.css"
export const ArticleViewer =({article})=>{
  // console.log("style:\n\n\n: ", article.style)
  return (<>
    <article>
      <div id="style-carrier" css={article.style}>
        <style>{article.style}</style>
        <JsxParser
          components={{ CodeViewer }}
          jsx={article.file}
          autoCloseVoidElements={true}
          onError={(e)=>{
            console.log("[ERROR]:", e)
            throw e
          }}
        />
      </div>
    </article>
    {/* <style jsx>{style}</style> */}
  </>)
}