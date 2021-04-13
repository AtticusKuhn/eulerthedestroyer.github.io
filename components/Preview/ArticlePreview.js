const { default: Preivew } = require("./Preview")

import Preview from "./Preview"
const ArticlePreview = ({title, description, id, image})=>{
  return(<>
    <Preview children={description} image={image} link={`/blog/${id}`} title={title} />
  </>)
}
export default ArticlePreview