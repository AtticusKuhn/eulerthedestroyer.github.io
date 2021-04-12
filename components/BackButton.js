import { useRouter } from 'next/router'
import Link from "next/link"
const BackButton =()=>{
  const router = useRouter()
  const path = router.asPath.split("/")
  const back = path.slice(0, path.length-1).join("/")
  const backUrl = back.endsWith("/my-projects/html") || back.endsWith("/my-projects/js")
    ? back.split("/").slice(0, back.split("/").length-1).join("/")
    : back
  return (<>
    <Link href={backUrl}>
      <a className="previous">&laquo; Back</a>
    </Link>
    <style jsx>{`
    .previous {
      padding:2vh;
    }
    `}</style>
  </>)
}
export default BackButton