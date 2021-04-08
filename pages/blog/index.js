import { getBlogArticles } from "@/lib/generateStaticData/blogGenerator"
import {useState} from "react"
import ArticlePreview from "@/components/ArticlePreview";

export default function Blog({articles}){
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = articles
    .filter((article) =>
      article.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  return <>
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
  const articles  = (await getBlogArticles()).sort((a, b) =>Number(new Date(b.date)) - Number(new Date(a.date)))
  // console.log({articles})
  return {props:{articles}}
}