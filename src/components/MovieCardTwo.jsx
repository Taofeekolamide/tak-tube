import { BiCalendar } from "react-icons/bi";
import { BsEye } from "react-icons/bs";

function MovieCardTwo({ title, image, view, released_date }) {
    return (
        <div className="moviecardtwo">
            <img src={image} alt="image" />
            <h1>{title}</h1>
            <span><BsEye fontSize="18px" />{Math.floor(view)} &nbsp;&nbsp; <BiCalendar />{released_date}</span>
        </div>
    )
}

export default MovieCardTwo;