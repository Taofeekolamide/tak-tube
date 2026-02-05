import { Link, useSearchParams } from "react-router-dom"
import SideBar from "../components/SideBar"
import { useEffect, useState } from "react"
import { BsEye } from "react-icons/bs"
import { BiCalendar } from "react-icons/bi"
import PageBanners from "../components/PageBanners"

function Search() {
    const API_Key = import.meta.env.VITE_TMDB_API_KEY
    const [search] = useSearchParams()
    const result = search.get("term")
    const [searches, setSearches] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_Key}&query=${result}`)
            .then(res => res.json())
            .then(data => setSearches(data.results))
    }, [result])

    const Truncate = (text, num) => {
        let data = text.split(" ")
        return data.slice(0, num).join(" ") + "..."
    }

    if (!searches) return <h1>No result</h1>
    const noResult = searches.length === 0

    return (
        <>
            <PageBanners title="Search" />
            <div className="searchdetails">
                {noResult && <h1 className="searchresulttitle">No Result : {result}</h1>}
                {!noResult &&
                    <div className="searchlist">
                        <h1 className="searchresulttitle">Search Result: {result}</h1>
                        {searches.map((item) => (
                            <Link to={`/movie/${item.id}`}>
                                <div className="sidebar">
                                    <div>
                                        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} width="200px" height="160px" alt="logo" />
                                    </div>
                                    <div>
                                        <p style={{ display: "flex", alignItems: "center", gap: "8px", paddingTop: "5px" }}><BsEye fontSize="18px" />{Math.floor(item.popularity)} <BiCalendar />{item.release_date}</p>
                                        <h4>{item.title}</h4>
                                        <p className="searchview">{
                                            Truncate(item.overview, 15)
                                        }</p>
                                    </div>
                                </div>
                            </Link>
                        ))}

                    </div>
                }
                <SideBar />
            </div>

        </>
    )
}

export default Search