import Link from "next/link"
import { language } from "types"

import Preview from "./Preview"
interface props {
  title: string;
  description: string;
  fullUrl: string;
  demoUrl: string;
  language: language
}

const ProjectPreview: React.FC<props> =({title, description, fullUrl, demoUrl, language})=>{
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