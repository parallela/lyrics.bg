import {DefaultSeo} from "next-seo";
import SEOConfig from "../next-seo.config";
import Head from "next/head";
import FooterScript from "./FooterScripts";
import Navbar from "./Navbar";

const MainLayout = ({children}) => {
    return (
        <div>
            <DefaultSeo {...SEOConfig} />
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <link rel="stylesheet" href="/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="/css/mdb.min.css"/>
            </Head>
            <div id={'lyrics-content'}>
                <Navbar />
                <div className="container-fluid mt-4 mb-2">
                    {children}
                </div>
            </div>
            <FooterScript />
        </div>
    )
}

export default MainLayout;