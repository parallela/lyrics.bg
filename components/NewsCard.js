import TopArtistsList from "./TopArtistsList";
import NewsList from "./NewsList";

const NewsCard = (props) => {
    return (

        <div className="col-md-8 mb-2 mt-4">
            <div className="card card-cascade wider">

                <div className="view view-cascade gradient-card-header aqua-gradient">
                    <h5 className="card-header-title">Новини</h5>
                </div>

                <div className="card-body card-body-cascade">

                    <ul className="list-group list-group-flush">
                        <ul className="list-group">
                                <NewsList news={{}}/>
                        </ul>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default NewsCard;