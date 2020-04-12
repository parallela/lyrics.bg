const Album = (props) => {
    return (
        <div className="col-md-2">
            <div className="card card-image"
                 style={{backgroundImage: `url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)`}}>
                <div className="text-white text-center d-flex justify-content-center rgba-black-strong py-5">
                    <div>
                        <small>Author Name</small>
                        <h3 className="card-title mt-2 pt-2"><strong>Име на албум</strong></h3>
                        <a className="btn btn-pink mt-5 mb-0"><i className="fas fa-clone left"></i> Виж Албума</a>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Album;