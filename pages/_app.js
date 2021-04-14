import Layout from "@/components/Layout"
import "@/public/styles/global.css"
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';
import "@/public/styles/prism.css"
import { useShortcut } from "@/lib/useShortcut";


const App = ({ Component, pageProps }) => {
  useShortcut()
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