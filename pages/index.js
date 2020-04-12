import Head from "next/head";
import MainLayout from "../components/MainLayout";
import Top5Artist from "../components/Top5Artists";
import Top5Lyrics from "../components/Top5Lyrics";
import NewsCard from "../components/NewsCard";
import SearchCard from "../components/SearchCard";
import Alphabet from "../components/Alphabet";
import {useEffect,useState} from "react";

const Index = (props) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    },[])

    return (
        <MainLayout>

            {isLoading &&
            <i className="fas fa-spinner fa-pulse h3"></i>
            }
            {!isLoading &&
            <div className="row">
                <Alphabet/>
                <Top5Artist/>
                <Top5Lyrics/>
                <SearchCard/>
                <NewsCard/>
            </div>
            }
        </MainLayout>
    );
}

export default Index;