const { default: Preivew } = require("./Preview")

import Preview from "./Preview"
const ArticlePreview = ({title, description, id, image})=>{
  return(<>
    <Preview children={description} image={image} link={`/blog/${id}`} title={title} />
  </>)
}
export default ArticlePreview
// import Link from '@/components/Link';
// const ArticlePreview = ({title, description, id, image}) => (
//   <>
//     <Link
//       href="/blog/[article]"
//       as={`/blog/${id}`}
//     >
//       <a className="article-preview">
//         <img src={image} className="image" />
//         <div className="text">
//           <div className="title">{title}</div>
//           <div className="body">{description}</div>
//         </div>
//       </a>
//     </Link>
//     <style jsx>{`
//       .article-preview {
//         display: flex;
//         flex-direction: row;
//         align-items: center;
//         text-decoration: none;
//         padding: 1.3vh;
//         margin: 1.3vh 3.1ch 0 3.1ch;
//         transition-duration: 1s;
//         border-radius: 1vh;
//         border: 1px solid var(--c5);
//       }
//       .article-preview:hover {
//         border-color: var(--c1);
//         transform: translateY(-1px);
//       }
//       .image {
//         width: 13vh;
//         height: 13vh;
//         border-radius: 0.5vh;
//         object-fit: cover;
//         margin-right: 1.5ch;
//       }
//       .text {
//         display: flex;
//         flex-direction: column;
//       }
//       .title {
//         font-size: 1.8ch;
//         letter-spacing: 0.03ch;
//         font-weight: 600;
//         color: var(--c1);
//         margin-bottom: 1.3vh;
//       }
//       .body {
//         color: var(--c1);
//       }
//     `}</style>
//   </>
// );


// export default ArticlePreview