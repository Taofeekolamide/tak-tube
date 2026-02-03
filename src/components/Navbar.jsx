import { FaPlay, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";

function Navbar() {

    return (
        <>
            <div className="navbar">

                <h1 style={{ fontSize: "40px" }}>🎬 TakTube</h1>
                <nav>
                    <Link to="/"><HiHome /> Home</Link>
                    <Link to="/about"><FaUser /> About</Link>
                    <Link to="/movies"><FaPlay /> Movies</Link>
                    <Link to="/contact"><FaUser /> Contact</Link>
                </nav>

            </div>

        </>
    )
}

export default Navbar;