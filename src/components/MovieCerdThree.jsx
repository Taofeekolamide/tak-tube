import { BiCalendar, BiPlayCircle } from "react-icons/bi";
import { BsEye } from "react-icons/bs";

function MovieCardThree({ title, image, view, released_date }) {
    return (
        <div className="moviecardthree" style={{ backgroundImage: `url(${image})` }}>

            <div className="overlay">

                <BiPlayCircle fontSize="100px" color="white" />

                <div className="info">
                    <h1>{title}</h1>
                    <span><BsEye fontSize="18px" />{Math.floor(view)} <BiCalendar />{released_date}</span>
                </div>

            </div>

        </div>
    )
}

export default MovieCardThree;