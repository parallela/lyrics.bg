import Link from "next/link";
import propTypes from "prop-types";

const NewsList = (props) => {
    return (
        <li className="list-group-item">
            <Link href={'/news/[slug]'} as={`/artist/hello_world`}><a
                className={"h6"}> Новина първа</a>
            </Link>
            <div className={"w-10"}></div>
            <small className={"text-muted"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid amet assumenda harum incidunt laboriosam maiores modi nihil placeat saepe? Alias animi cupiditate dolorum fugit nostrum perspiciatis ratione ut vero!</small>

        </li>
    )
}

NewsList.propTypes = {
    news: propTypes.object.isRequired
}

export default NewsList;