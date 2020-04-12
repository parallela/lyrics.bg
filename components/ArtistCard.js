import propTypes from "prop-types";
import Album from "./Album";
import Link from "next/link";
import SocialIcons from "./SocialIcons";

const ArtistCard = (props) => {

    return (

        <div class="card testimonial-card">

            <div class="card-up indigo lighten-1">
                <img src={'https://i.ytimg.com/vi/mIYXf2RlQbk/maxresdefault.jpg'} width={"100%"}/>
            </div>


            <div class="avatar mx-auto white">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" class="rounded-circle"
                     alt="image-photo"/>
            </div>


            <div class="card-body">

                <h4 class="card-title">
                    <Link href={"/"}><a className={"text-muted"}>БОРО ПЪРВИ</a></Link>
                    <SocialIcons social={{}} />
                </h4>

                {/*TODO:
                    Добавяне на страница с песните му
                    */}
                <Link href={'/'}><a><small>Всички песни</small></a></Link>
                <hr/>

                <p><i class="fas fa-quote-left"></i>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis deleniti distinctio eius et explicabo fugiat impedit inventore ipsum itaque nihil nisi quibusdam quos rem reprehenderit, sed tenetur totam voluptas voluptatem.
                </p>

                <hr />
                <h4>Албуми:</h4>

                <div id="albums">
                    <Album />
                </div>

            </div>

        </div>
    );

}
ArtistCard.propTypes = {
    artist: propTypes.object.isRequired
}
export default ArtistCard;