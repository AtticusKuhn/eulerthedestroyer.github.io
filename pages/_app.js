import Layout from "@/components/Layout"
import "@/public/styles/global.css"
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';


const App = ({ Component, pageProps }) => {
    const { noNav } = pageProps;
    if (noNav)
        return <Component {...pageProps} />
    return (
      <Layout>
      <DefaultSeo {...SEO} />

      <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.7/ace.js" />
        <Component {...pageProps} />
      </Layout>
    );
};

export default App;