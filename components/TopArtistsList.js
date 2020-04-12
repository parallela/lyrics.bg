import Link from "next/link";
import propTypes from 'prop-types';

const TopArtistsList = (props) => {

    return (
        <li className="list-group-item">
            <img src={props.artist.image} width={"32px"} height={"32px"} />
            <Link href={'/artist/[slug]'} as={`/artist/${props.artist.slug}`}><a className={"h6"}> {props.artist.name}</a></Link>
            <div className={"w-10"}></div>
            <small className={"text-muted"}>{props.artist.description}</small>
        </li>
    )
}

TopArtistsList.propTypes = {
    artist: propTypes.object.isRequired
}

export default TopArtistsList;