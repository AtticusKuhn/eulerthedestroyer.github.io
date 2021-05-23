import { ArticleViewer } from "@/components/ArticleViewer/ArticleViewer";
import BackButton from "@/components/BackButton";
import ArticlePreview from "@/components/Preview/ArticlePreview";
import { getBlogArticles } from "@/lib/generateStaticData/blogGenerator";
import { ArticleJsonLd } from 'next-seo';
import Link from "next/link";
import { Article } from "types";
import { randomItemsFromArray, removeHTML } from "../../utils";
const ArticlePage = ({article, length, reccomendedArticles} : {article: Article,length: number, reccomendedArticles: Article[]})=>{
  // const description = rawText.substring(0,100)
  return <>
    <ArticleJsonLd
      url="https://eulerthedestroyer.github.io"
      title={article.title}
      images={[
        ...(article.images || ["https://eulerthedestroyer.github.io/images/logo.png",])
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


export async function getStaticProps({ params }: {params: {article: string}}){
  const articlesList = await getBlogArticles()
  const article = articlesList.find(a=>a.id===params.article) as Article
  const rawText=  removeHTML(article.file)
  const length = Math.ceil((rawText.length)/863)
  const reccomendedArticles = randomItemsFromArray(articlesList
    .filter(a=>a.id!==params.article), 3)
    .map((a: Article)=>{
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
    seo:{
      title: article.title,
      description: article.description,
        openGraph:{
          title: article.title,
          description: article.description,
          url: `https://eulerthedestroyer.github.io/blog/${article.id}`,
          type: 'article',
          images: [
            {
              url: article.image || null,
              width: 800,
              height: 600,
              alt: article.title,
            },
          ],
          article: {
            publishedTime: article.date,
            authors: [
              'https://eulerthedestroyer.github.io',
            ],
            tags: ['coding', 'programming', 'hacking', 'cryptocurrency', 'javascript', 'python', 'haskell'],
          },
        }
    }
  }}

}
export async function getStaticPaths(){
  const articlesList = await getBlogArticles()
    return {
    paths: articlesList.map((a: Article) => ({
      params: {
        article: a.id
      }
    })),
    fallback: false
  };
}


export default ArticlePage