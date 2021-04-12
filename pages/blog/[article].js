import { getBlogArticles } from "@/lib/generateStaticData/blogGenerator"
import {ArticleViewer} from "@/components/ArticleViewer/ArticleViewer"
import { NextSeo, ArticleJsonLd } from 'next-seo';
import BackButton from "@/components/BackButton"

const Article = ({article, length, rawText})=>{
  const description = rawText.substring(0,100)
  return <>
      <NextSeo
      title={article.title}
      description={description}
        openGraph={{
          title: article.title,
          description: description,
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
      description={description}
    />
    <h1>{article.title}</h1>
    <p>published {new Date(article.date).toString().split(" ").slice(0,4).join(" ")} |  {length} minute read</p>
    <BackButton />
    <ArticleViewer article={article} />
  </>
}


export async function getStaticProps({ params }){
  const articlesList = await getBlogArticles()
  const article = articlesList.find(a=>a.id===params.article)
  const rawText=  article.file.replace(/<[^>]+>/g, '')
  const length = Math.ceil((rawText.length)/863)
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