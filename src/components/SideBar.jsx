import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import SubHeading from "./SubHeading"
import { BsEye } from "react-icons/bs"
import { BiCalendar } from "react-icons/bi"

function SideBar() {
    const [sideMovies, setSideMovies] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4632cb4de4b1105d34dd3404eeb90acd")
            .then(res => res.json())
            .then(data => setSideMovies(data.results))
    }, [])

    return (
        <>
            <aside>
                <SubHeading text="Popular" />

                {sideMovies.slice(0, 4).map((item) => (

                    <Link to={`/movie/${item.id}`}>

                        <div className="sidebar">
                            <div>
                                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} width="200px" height="160px" alt="logo" />
                            </div>
                            <div>
                                <h4>{item.title}</h4>
                                <p style={{ display: "flex", alignItems: "center", gap: "8px", paddingTop: "5px" }}><BsEye fontSize="18px" />{Math.floor(item.popularity)} <BiCalendar />{item.release_date}</p>
                            </div>
                        </div>

                    </Link>

                ))}
            </aside>

        </>
    )
}

export default SideBar