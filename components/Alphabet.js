import {useState, useEffect} from "react";
import {BrowserView} from "react-device-detect";

const Alphabet = (props) => {
    const [alphabet, setAlphabet] = useState([]);
    const [language, setChangeLanguage] = useState("EN");
    const [isLoading, setIsLoading] = useState(true);
    const _handleLangClick = (e) => {

        if (language == "BG") {
            setChangeLanguage("EN");
            setAlphabet(ENAlphabet);
        } else if (language == "EN") {
            setChangeLanguage("BG");
            setAlphabet(BGAlphabet);
        }

    }
    let ENAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let BGAlphabet = ["А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ю", "Я"]

    useEffect(() => {
        setAlphabet(BGAlphabet);
        setChangeLanguage("BG");
        setIsLoading(false);
    }, [])

    return (
        <BrowserView>
            <div className="mt-4 mb-4 col-md-12">
                <nav className="navbar navbar-expand navbar-dark aqua-gradient">


                    <button className="btn btn-sm btn-outline-warning" onClick={_handleLangClick} type="button">
                        {language}
                    </button>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#alphabet"
                            aria-controls="alphabet" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="alphabet">
                        <ul className="navbar-nav mr-auto">

                            {!isLoading &&
                            alphabet.map((value, key) =>
                                <li style={{padding: "6.5px"}} className="nav-item" key={key}>
                                    <a className="nav-link" href="#">{value} </a>
                                </li>
                            )
                            }
                        </ul>

                    </div>

                </nav>
            </div>
        </BrowserView>
    )
}
export default Alphabet;