import Layout from "@/components/Layout"
import "@/public/global.css"
const App = ({ Component, pageProps }) => {
    const { noNav } = pageProps;
    if (noNav)
        return <Component {...pageProps} />
    return (
      <Layout>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.7/ace.js" />
        <Component {...pageProps} />
      </Layout>
    );
};

export default App;