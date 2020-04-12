import {useRouter} from "next/router";
import MainLayout from "../../components/MainLayout";
import LyricsCard from "../../components/LyricsCard";
import {useState, useEffect} from "react";

const Song = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const _Router = useRouter();

    useEffect(() => {
        setIsLoading(false);
    }, [])

    return (
        <MainLayout>
            {isLoading &&
            <i className="fas fa-spinner fa-pulse h3"></i>
            }
            {!isLoading &&
            <LyricsCard/>
            }
        </MainLayout>
    )
}
export default Song;