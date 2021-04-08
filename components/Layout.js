import Link from "@/components/Link"
const Layout = ({children})=> <div clasName="top">
<ul>
  <li><Link href="/"><a>Home</a></Link></li>
  <li><Link href="/blog"><a>Blog</a></Link></li>
  <li><Link href="/my-projects"><a>My Projects</a></Link></li>
</ul>
{/* <div className="top" style="padding:20px;margin-top:30px;background-color:var(--c2);"></div> */}
  {children}
  <style jsx>{`
  body {margin:0;}
.top {
   position:relative;
   z-index:1000;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: var(--c1);
  top: 0;
  width: 100%;
}

li {
  float: left;
}

li a {
  display: block;
  color: var(--c4);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: var(--c1);
}

.active {
  background-color: var(--c3);
}
  `}</style>
</div>
export default Layout