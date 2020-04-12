import Link from "next/link";
import {useRouter} from "next/router";

const Navbar = (props) => {
    const _Router = useRouter();

    return (
        <nav className="navbar navbar-expand-lg navbar-light aqua-gradient lighten-4">

            <a className="navbar-brand" href="#">Lyrics.BG</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav"
                    aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="mainNav">

                <ul className="navbar-nav mr-auto">
                    <li className={_Router.pathname == "/" ? "nav-item active" : "nav-item"}>
                        <Link href={'/'}>
                            <a className="nav-link"><i className={"fa fa-home"}></i> Начало</a>
                        </Link>
                    </li>
                    <li className={_Router.pathname == "/albums" ? "nav-item active" : "nav-item"}>
                        <Link href={'/albums'}>
                            <a className="nav-link"><i className={"fa fa-compact-disc"}></i> Албуми</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;