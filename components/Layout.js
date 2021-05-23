import Link from "next/link"
const Layout = ({children})=> <>
  <div clasName="top">
    <nav>
      <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/blog"><a>Blog</a></Link></li>
        <li><Link href="/my-projects"><a>My Projects</a></Link></li>
        <li><Link href="/about"><a>About Me</a></Link></li>
      </ul>
    </nav>
  </div>
{/* <div className="top" style="padding:20px;margin-top:30px;background-color:var(--c2);"></div> */}
  <section className="main-section">
    {children}
  </section>
  <div className="footer">
    <footer>
      <Link href="/">
        <a>
          <div className="footer-logo">
            <img className="footer-image" src="/images/logo.png" alt="logo" />
          </div>
        </a>
      </Link>
      <div className="footer-legal">
        Copyright © {new Date().getFullYear()} Euler. 
      </div>
      <div className="social-media">
        <Link href="https://github.com/eulerthedestroyer/eulerthedestroyer.github.io">
          <a>
            View my site's source code on Github
          </a>
        </Link>
      </div>
    </footer>
  </div>
  <style jsx>{`
  .main-section {
    min-height: 90vh;
  }
  .footer-image {
    display:block;
  }
   .footer-legal {
    margin: auto;
    max-width: 1000px;
  }
  .social-media {
      display: flex;
      flex-direction: row;
      margin-top: 10px;
    }
  .footer {
    background-color:var(--c1);
    color: var(--c4);
    // width: 100vw;
    position:relative;
    display: flex;
    flex-direction: column;
    margin-right: 5%;
  }
  .footer-logo {
    z-index:1000000000000;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: bold;
    font-size: 1.15rem;
    display:inline-block;
    background-color: var(--c5);
    opacity: 0.9;
    margin-bottom: 7px;
  }
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
  font-size:2vw;
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
</>
export default Layout