import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import { BiTime } from "react-icons/bi";
import PageBanners from "../components/PageBanners";

function MovieDetails() {

    const API_KEY = import.meta.env.VITE_TMDB_API_KEY
    const {id} = useParams()
    const [movie, setMovie] = useState(null)
    const [trailerKey, setTrailerKey] = useState(null)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setMovie(data))

        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                const trailer = data.results.find(v => v.type === "Clip" && v.site === "YouTube")
                setTrailerKey(trailer?.key)
            })
    }, [id])

    if (!movie) return <p>Loading...</p>;

    return (
        <>
            <PageBanners title="Movie Details" />
            <div className="moviedetails">
                <div style={{ flex: 2 }}>

                    {trailerKey && <iframe
                        width="100%" style={{ borderRadius: "10px" }}
                        height="500"
                        src={`https://www.youtube.com/embed/${trailerKey}`}
                        title="Movie Trailer"
                        allowFullScreen
                    />}
                    
                    <p className="duration"><BiTime /> {Math.floor(movie.runtime / 60)} Hour {movie.runtime % 60} Mins</p>
                    <h1 style={{ paddingTop: "20px", paddingBottom: "20px" }}>{movie.title}</h1>
                    <hr />
                    <p style={{ paddingTop: "20px", paddingBottom: "20px" }}>{movie.overview}</p>
                    <hr />
                </div>
                <SideBar />
            </div>
        </>
    )
}

export default MovieDetails;