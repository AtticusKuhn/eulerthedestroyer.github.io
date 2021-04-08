import Link from "@/components/Link"
const ProjectPreview =({title, description, fullUrl, demoUrl,type})=>{
  // console.log({demoUrl, fullUrl})
  return (<>
  <div className="card">
    <div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description} </p>
      <p className="svg-icon">
        {type}
      </p>
      <div className="eq-div-flex">
        <Link mref={fullUrl}><a>view sourcecode on github</a></Link><br/>
        <Link href={demoUrl}><a>view demo live on site</a></Link>
      </div>
    </div>
  </div>
  <style jsx>{`
  .card {
     outline: 2px solid var(--c4);
  }
  `}</style>
  </>)
}
export default ProjectPreview