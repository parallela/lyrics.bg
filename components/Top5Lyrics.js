import {useState, useEffect} from "react";
import TopLyricsList from "./TopLyricsList";

const Top5Lyrics = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [lyrics, setLyrics] = useState([]);

    useEffect(() => {
        setLyrics([
            {
                id: 1,
                artist: {
                    id: 1,
                    name: "БОРО ПЪРВИ",
                    slug: "boro-purvi",
                    link: "artist/boro-purvo",
                    image: "https://placehold.it/32x32",
                    description: "Някакво много яко текстче което служи уж за описание"
                },
                name: "Ский ский",
                slug: "skii-skii",
                image: "https://placehold.it/32x32",
            },
            {
                id: 2,
                artist: {
                    id: 1,
                    name: "БОРО ПЪРВИ",
                    slug: "boro-purvi",
                    link: "artist/boro-purvo",
                    image: "https://placehold.it/32x32",
                    description: "Някакво много яко текстче което служи уж за описание"
                },
                name: "Ский ский",
                slug: "skii-skii",
                image: "https://placehold.it/32x32",
            },
            {
                id: 1,
                artist: {
                    id: 1,
                    name: "БОРО ПЪРВИ",
                    slug: "boro-purvi",
                    link: "artist/boro-purvo",
                    image: "https://placehold.it/32x32",
                    description: "Някакво много яко текстче което служи уж за описание"
                },
                name: "Ский ский",
                slug: "skii-skii",
                image: "https://placehold.it/32x32",
            },
            {
                id: 1,
                artist: {
                    id: 1,
                    name: "БОРО ПЪРВИ",
                    slug: "boro-purvi",
                    link: "artist/boro-purvo",
                    image: "https://placehold.it/32x32",
                    description: "Някакво много яко текстче което служи уж за описание"
                },
                name: "Ский ский",
                slug: "skii-skii",
                image: "https://placehold.it/32x32",
            },
            {
                id: 1,
                artist: {
                    id: 1,
                    name: "БОРО ПЪРВИ",
                    slug: "boro-purvi",
                    link: "artist/boro-purvo",
                    image: "https://placehold.it/32x32",
                    description: "Някакво много яко текстче което служи уж за описание"
                },
                name: "Ский ский",
                slug: "skii-skii",
                image: "https://placehold.it/32x32",
            },
        ])
        setIsLoading(false);
    }, [])

    return (
        <div className="col col-md-4">
            <div className="card card-cascade wider">

                <div className="view view-cascade gradient-card-header aqua-gradient">
                    <h5 className="card-header-title">Най-популярни текстове</h5>
                </div>

                <div className="card-body card-body-cascade">

                    <ul className="list-group list-group-flush">
                        <ul className="list-group">
                            {isLoading &&
                            <i className="fas fa-spinner fa-pulse"></i>
                            }
                            {!isLoading &&
                            lyrics.map((value, key) =>
                                <TopLyricsList lyric={value} key={key}/>
                            )
                            }
                        </ul>
                    </ul>

                </div>
            </div>
        </div>
    );
}

export default Top5Lyrics;