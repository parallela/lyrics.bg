import Link from "next/link";

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light aqua-gradient lighten-4">

            <a className="navbar-brand" href="#">Lyrics.BG</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="basicExampleNav">

                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link href={'/'}>
                            <a className="nav-link">Начало</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;