import Head from "next/head";
import MainLayout from "../components/MainLayout";
import Top5Artist from "../components/Top5Artists";
import Top5Lyrics from "../components/Top5Lyrics";
import NewsCard from "../components/NewsCard";

const Index = (props) => {
    return (
        <MainLayout>
            <div className="row">
                <Top5Artist />
                <Top5Lyrics />
                <NewsCard />
            </div>
        </MainLayout>
    );
}

export default Index;