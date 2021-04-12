import Layout from "@/components/Layout"
import "@/public/styles/global.css"
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';
import "@/public/styles/prism.css"


const App = ({ Component, pageProps }) => {
    const { noNav } = pageProps;
    if (noNav)
        return <>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </>
    return (
      <Layout>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </Layout>
    );
};

export default App;