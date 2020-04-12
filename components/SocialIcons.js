import propTypes from "prop-types";
import ArtistCard from "./ArtistCard";

const SocialIcons = (props) => {
    return (
      <div id="social-icons">

          <a class="btn-floating btn-fb" type="button" role="button"><i class="fab fa-facebook-f"></i></a>

          <a class="btn-floating btn-tw" type="button" role="button"><i class="fab fa-twitter"></i></a>

          <a class="btn-floating btn-li" type="button" role="button"><i class="fab fa-linkedin-in"></i></a>

          <a class="btn-floating btn-ins" type="button" role="button"><i class="fab fa-instagram"></i></a>

          <a class="btn-floating btn-yt" type="button" role="button"><i class="fab fa-youtube"></i></a>

      </div>
    );
}
export default SocialIcons;
SocialIcons.propTypes = {
    social: propTypes.object.isRequired
}