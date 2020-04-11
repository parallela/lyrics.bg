import {useState, useEffect} from "react";
import TopArtistsList from "./TopArtistsList";

const Top5Artist = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        setArtists([
            {
                id: 1,
                name: "БОРО ПЪРВИ",
                slug: "v:rgi",
                image: "https://placehold.it/32x32",
                description: "Някакво много яко текстче което служи уж за описание"
            },
            {
                id: 2,
                name: "Криско",
                slug: "v:rgi",
                image: "https://placehold.it/32x32",
                description: "Някакво много яко текстче което служи уж за описание"
            },
            {
                id: 3,
                name: "V:RGO",
                slug: "v:rgi",
                image: "https://placehold.it/32x32",
                description: "Някакво много яко текстче което служи уж за описание"
            }])
        setIsLoading(false);
    }, [])

    return (
        <div className="col col-md-4">
            <div className="card card-cascade wider">

                <div className="view view-cascade gradient-card-header aqua-gradient">
                    <h2 className="card-header-title">Топ 5 Артиста</h2>
                </div>

                <div className="card-body card-body-cascade">

                    <ul className="list-group list-group-flush">
                        <ul className="list-group">
                            {!isLoading &&
                            artists.map((value, key) =>
                                <TopArtistsList artist={value} key={key} />
                            )
                            }
                        </ul>
                    </ul>

                </div>
            </div>
        </div>
    );
}

export default Top5Artist