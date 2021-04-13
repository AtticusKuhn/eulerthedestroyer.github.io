import Link from "@/components/Link"
import Preview from "./Preview"
const ProjectPreview =({title, description, fullUrl, demoUrl,type, language})=>{
  // console.log({demoUrl, fullUrl})
  return (<>
    <Preview children={description}
      image={`/images/languages/${language}.png`}
      link={demoUrl}
      title={title}
    />
  </>)
}
export default ProjectPreview