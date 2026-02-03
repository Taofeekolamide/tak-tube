import { FaPlay, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { useContext } from "react";
import NavToggle from "./Context";

function MobileNav() {
    const { toggleNav, setToggleNav } = useContext(NavToggle)

    return (
        <>
            <div className="mobilenav" style={{ transform: toggleNav ? "translateX(0%)" : "translateX(-100%)" }}>

                <h1 style={{ fontSize: "30px" }}>🎬 TakTube</h1>
                <nav>
                    <Link onClick={() => setToggleNav(!toggleNav)} to="/"><HiHome /> Home</Link>
                    <Link onClick={() => setToggleNav(!toggleNav)} to="/about"><FaUser /> About</Link>
                    <Link onClick={() => setToggleNav(!toggleNav)} to="/movies"><FaPlay /> Movies</Link>
                    <Link onClick={() => setToggleNav(!toggleNav)} to="/contact"><FaUser /> Contact</Link>
                </nav>

            </div>

        </>
    )
}

export default MobileNav;