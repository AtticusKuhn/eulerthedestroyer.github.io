import { getBlogArticles } from "@/lib/generateStaticData/blogGenerator"
import {useState} from "react"
import ArticlePreview from "@/components/Preview/ArticlePreview";
import { BlogJsonLd } from 'next-seo';
import { NextSeo } from 'next-seo';
export default function Blog({articles}){
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = articles
    .filter((article) =>
      article.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  const desc = "Learn about the latest programming, internet, and software news on my blog."
  return <>
     <NextSeo
      title="Blog"
      description={desc}
      openGraph={{
        title: 'Blog',
        description: desc
      }}
    />
    <BlogJsonLd
      url="https://eulerthedestroyer.github.io/blog"
      title="euler's blog"
      images={[
        'https://eulerthedestroyer.github.io/images/logo.png',
      ]}
      datePublished={new Date().toISOString()}
      authorName="Leonhard Euler"
      description={desc}
    />
    <h1>this is my blog</h1>
    <p>click on articles to read</p>
    <input
      aria-label="Search articles"
      type="text"
      onChange={(e) => setSearchValue(e.target.value)}
      placeholder="Search articles"
    />
    {filteredBlogPosts.map(article=><ArticlePreview {...article} />)}
  </>
}

export async function getStaticProps(){
  const articles  = (await getBlogArticles()).sort((a, b) =>Number(new Date(b.date)) - Number(new Date(a.date))).map(a=>{
    return {
      title:a.title,
      id:a.id,
      description:a.description,
      image: a.images && a.images.length > 0 ? a.images[0] : null
    }
  })
  // console.log({articles})
  return {props:{articles}}
}