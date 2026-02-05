import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MovieCardOne from "../components/MovieCardOne";
import MovieCardTwo from "../components/MovieCardTwo";
import SubHeading from "../components/SubHeading";
import { BiPlay } from "react-icons/bi";
import MovieCardFour from "../components/MovieCardFour";

function Home() {

    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

    const [upcomingMovies, setUpcomingMovies] = useState([])
    const [TopRatedMovies, setTopRatedMovies] = useState([])
    const [trendingMovies, setTrendingMovies] = useState([])

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setUpcomingMovies(data.results))

        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setTopRatedMovies(data.results))

        fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setTrendingMovies(data.results))
    }, [])

    return (

        <>
            <div className="homehero">
                <div className="heroitem" >
                    <h1>Discover the latest from TakTube</h1>
                    <p>ScreenPal's intuitive tools help you capture, create, and share videos and images for authentic and effective visual communication.</p>
                    <Link to="/movies"><BiPlay fontSize="20px" /><span>Watch Now</span></Link>
                </div>
            </div>

            <SubHeading text="Upcoming" />

            <div style={{ display: "flex", overflowX: "scroll", gap: "10px", paddingBottom: "25px" }}>
                {upcomingMovies.slice(0, 8).map((item) => (

                    <Link to={`movie/${item.id}`}>
                        <MovieCardOne title={item.title} image={`https://image.tmdb.org/t/p/w500${item.poster_path}`} view={Math.round(item.popularity)} />
                    </Link>

                ))}
            </div>

            <div style={{ backgroundColor: "#1c1b1b", padding: "20px", borderRadius: "20px" }}>
                <SubHeading text="Trending this week"/>
                <div style={{ display: "flex", overflowX: "scroll", gap: "20px", height: "fit-content" }}>
                    {trendingMovies.slice(0, 10).map((item) => (

                        <Link to={`movie/${item.id}`}>
                            <MovieCardFour title={item.title} image={`https://image.tmdb.org/t/p/w500${item.poster_path}`} views={Math.round(item.popularity)} />
                        </Link>

                    ))} 
                </div>
            </div>



            <SubHeading text="Top Rated" />

            <div style={{ display: "flex", overflowX: "scroll", gap: "15px" }}>
                {TopRatedMovies.slice(0, 8).map((item) => (

                    <Link to={`movie/${item.id}`}>
                        <MovieCardTwo title={item.title} image={`https://image.tmdb.org/t/p/w500${item.poster_path}`} view={Math.round(item.popularity)} released_date={item.release_date} />
                    </Link>

                ))}
            </div>

        </>
    )
}

export default Home;