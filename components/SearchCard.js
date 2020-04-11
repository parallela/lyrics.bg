import NewsList from "./NewsList";

const SearchCard = (props) => {

    return (
        <div className="col col-md-4">
            <div className="card card-cascade wider">

                <div className="view view-cascade gradient-card-header aqua-gradient">
                    <h2 className="card-header-title">Търсене</h2>
                </div>

                <div className="card-body card-body-cascade">

                    <ul className="list-group list-group-flush">
                        <ul className="list-group">
                            <div className="md-form md-outline form-lg">
                                <input id="form-lg" className="form-control form-control-lg" type="text" />
                                    <label htmlFor="form-lg">Име на песен</label>
                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-primary mb-0">Търси</button>
                                </div>
                            </div>
                        </ul>
                    </ul>

                </div>
            </div>
        </div>
    )

}
export default SearchCard;