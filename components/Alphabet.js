import {useState, useEffect} from "react";

const Alphabet = (props) => {
    const [bgAlphabet, setbgAlphabet] = useState([]);
    const [enAlphabet, setenAlphabet] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        setbgAlphabet(["А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ю", "Я"]);
        setenAlphabet(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]);
        setIsLoading(false);
    }, [])

    return (
        <div className="mt-4 mb-4 col-md-12">
            <nav className="navbar navbar-expand navbar-dark primary-color">


                <button className="btn btn-sm btn-outline-warning" type="button">
                    BG
                </button>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#alphabet"
                        aria-controls="alphabet" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="alphabet">
                    <ul className="navbar-nav mr-auto">

                        {!isLoading &&
                        bgAlphabet.map((value, key) =>
                            <li style={{padding: "7px"}} className="nav-item" key={key}>
                                <a className="nav-link" href="#">{value} </a>
                            </li>
                        )
                        }
                    </ul>

                </div>

            </nav>
        </div>
    )
}
export default Alphabet;