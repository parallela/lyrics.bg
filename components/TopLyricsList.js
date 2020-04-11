import Link from "next/link";

const TopLyricsList = (props) => {
    return (
        <li className="list-group-item">
            <img src={props.lyric.image} width={"32px"} height={"32px"} />
            <Link href={'/artist/[slug]'} as={`/artist/${props.lyric.artist.slug}`}><a className={"h6"}> {props.lyric.artist.name} </a></Link> &rArr;
            <Link href={'/song/[slug]'} as={`/song/${props.lyric.slug}`}><a className={"h6"}> {props.lyric.name} </a></Link>
            <div class={"w-10"}></div>
        </li>
    )
}
export default TopLyricsList;