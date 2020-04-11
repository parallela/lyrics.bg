import { DefaultSeo } from "next-seo";
import SEOConfig from '../next-seo.config';

const LyricsApp = ({Component, pageProps}) => (
    <>
        <DefaultSeo {...SEOConfig} />
        <Component {...pageProps}/>
    </>
)
export default LyricsApp;