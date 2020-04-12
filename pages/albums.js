import MainLayout from "../components/MainLayout";
import {useEffect, useState} from "react";
import Album from "../components/Album";


const Albums = (props) => {
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
                <Album />
            </div>
            }
        </MainLayout>
    )
}
export default Albums;