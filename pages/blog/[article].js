import { getBlogArticles } from "@/lib/generateStaticData/blogGenerator"
import {ArticleViewer} from "@/components/ArticleViewer/ArticleViewer"
import { NextSeo, ArticleJsonLd } from 'next-seo';
import BackButton from "@/components/BackButton"
import ArticlePreview from "@/components/Preview/ArticlePreview"
import {randomItemsFromArray, removeHTML} from "../../utils"
import Link from "next/link";
const Article = ({article, length, reccomendedArticles})=>{
  // const description = rawText.substring(0,100)
  return <>
      <NextSeo
      title={article.title}
      description={article.description}
        openGraph={{
          title: article.title,
          description: article.description,
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
    <ArticleJsonLd
      url="https://eulerthedestroyer.github.io"
      title={article.title}
      images={[
        "https://eulerthedestroyer.github.io/images/logo.png",
        ...(article.images || [])
      ]}
      datePublished={article.date}
      authorName={['Leohard Euler']}
      publisherName="Euler's blog"
      publisherLogo="https://eulerthedestroyer.github.io/images/logo.png"
      description={article.description}
    />
    <h1>{article.title}</h1>
    <p>
      published {new Date(article.date).toString().split(" ").slice(0,4).join(" ")} 
      |  {length} minute read
      | <Link href="/about">
          <a>
            Written by Euler
          </a>
        </Link>
    </p>
    <BackButton />
    <ArticleViewer article={article} />
    <h1>related Aritcles</h1>
    {reccomendedArticles.map(a => <ArticlePreview {...a}  /> )}
  </>
}


export async function getStaticProps({ params }){
  const articlesList = await getBlogArticles()
  const article = articlesList.find(a=>a.id===params.article)
  const rawText=  removeHTML(article.file)
  const length = Math.ceil((rawText.length)/863)
  const reccomendedArticles = randomItemsFromArray(articlesList
    .filter(a=>a.id!==params.article), 3)
    .map(a=>{
      return {
        title:a.title,
        id:a.id,
        description:a.description,
        image: a.images && a.images.length > 0 ? a.images[0] : null
      }
    });
    
  return {props:{
    rawText,
    article,
    length,
    reccomendedArticles,
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