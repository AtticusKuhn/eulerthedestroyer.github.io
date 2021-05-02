import Layout from "@/components/Layout"
import "@/public/styles/global.css"
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';
import "@/public/styles/prism.css"
import { useShortcut } from "@/lib/useShortcut";
import { NextSeo, ArticleJsonLd } from 'next-seo';

const App = ({ Component, pageProps }) => {
  useShortcut()
    const { noNav, seo } = pageProps;
    const mergedSEO = Object.assign(SEO, seo)

    // console.log(Object.getOwnPropertyNames(Component))
    // console.log(Component.name)
    // console.log(Component.length)
    // console.log(Component.prototype)
    // let E = (<Component {...pageProps} />)
    // // console.log(E.props.children[0].type.name)
    // console.log(E.__o)
    // if(E..props.children[0].type.name === "_default"){
    //   E.props.children[0].props = Object.assign(SEO, E.props.children[0].props)
    //   console.log(E.props.children[0].props)
    // }
    // console.log(pageProps)
    if (noNav)
        return <>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </>
    return (
      <Layout>
        {/* <DefaultSeo {...SEO} /> */}
        <NextSeo {...mergedSEO} />
        <Component {...pageProps} />
        {/* {E } */}
      </Layout>
    );
};

export default App;