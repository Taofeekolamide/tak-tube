import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <h2>🎬 MITC TV</h2>
                <p>Your daily dose of movies, trailers & ratings.</p>
            </div>

            <div className="footer-links">
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>

            <div className="footer-socials">
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
                <FaGithub />
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} TakTube. Powered by TMDB.</p>
            </div>
        </footer>
    );
}

export default Footer;
