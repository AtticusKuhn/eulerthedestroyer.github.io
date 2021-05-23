
import Preview from "./Preview"


interface ArticlePreviewProps {
  title:string
  description:string
  id:string
  image:string
}
const ArticlePreview: React.FC<ArticlePreviewProps> = ({title, description, id, image})=>{
  return(<>
    <Preview children={description} image={image} link={`/blog/${id}`} title={title} />
  </>)
}
export default ArticlePreview