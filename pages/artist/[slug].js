import {useRouter} from "next/router";
import MainLayout from "../../components/MainLayout";
import {useState, useEffect} from "react";
import LyricsCard from "../../components/LyricsCard";
import ArtistCard from "../../components/ArtistCard";

const Artist = (props) => {
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
            <ArtistCard />
            }
        </MainLayout>
    )
}
export default Artist;