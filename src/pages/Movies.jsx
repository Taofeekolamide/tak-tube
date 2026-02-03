import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import MovieCardTwo from "../components/MovieCardTwo"
import MovieCardThree from "../components/MovieCerdThree"
import PageBanners from "../components/PageBanners"

function Movies() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4632cb4de4b1105d34dd3404eeb90acd")
            .then(res => res.json())
            .then(data => setMovies(data.results))
    }, [])

    return (
        <>
            <PageBanners title="Our Movies"/>
            <div className="moviecap">
                {movies.slice(0, 2).map((item) => (
                    <Link to={`/movie/${item.id}`}>
                        <MovieCardThree title={item.title} image={`https://image.tmdb.org/t/p/w500${item.poster_path}`} view={item.popularity} released_date={item.release_date} />
                    </Link>
                ))}
            </div>
            <div className="movielists" >
                {movies.map((item) => (
                    <Link to={`/movie/${item.id}`}>
                        <MovieCardTwo title={item.title} image={`https://image.tmdb.org/t/p/w500${item.poster_path}`} view={item.popularity} released_date={item.release_date} />
                    </Link>
                ))}
            </div>


        </>
    )
}

export default Movies