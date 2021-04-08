import { getBlogArticles } from "@/lib/generateStaticData/blogGenerator"
import {ArticleViewer} from "@/components/ArticleViewer/ArticleViewer"
import { NextSeo } from 'next-seo';

const Article = ({article, length, rawText})=>{
  return <>
      <NextSeo
      openGraph={{
        title: article.title,
        description: rawText.substring(0,100),
        url: `https://eulerthedestroyer.github.io/blog/${article.id}`,
        type: 'article',
        article: {
          publishedTime: article.date,
          authors: [
            'https://eulerthedestroyer.github.io',
          ],
          tags: ['coding', 'programming', 'hacking', 'cryptocurrency', 'javascript', 'python', 'haskell'],
        },
      }}
    />
    <h1>{article.title}</h1>
    <p>published {new Date(article.date).toString().split(" ").slice(0,4).join(" ")} |  {length} minute read</p>
    <ArticleViewer article={article} />
  </>
}


export async function getStaticProps({ params }){
  const articlesList = await getBlogArticles()
  const article = articlesList.find(a=>a.id===params.article)
  const rawText=  article.file.replace(/<[^>]+>/g, '')
  const length = Math.ceil((rawText.length)/863)
  // console.log("file:\n\n\n", article.file)
  // console.log(article.file)
  return {props:{
    rawText,
    article,
    length,
  }}

}
export async function getStaticPaths(){
  const articlesList = await getBlogArticles()
    return {
    paths: articlesList.map((a) => ({
      params: {
        article: a.id
      }
    })),
    fallback: false
  };
}


export default Article