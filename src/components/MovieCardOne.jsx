import { BsEye } from "react-icons/bs";

function MovieCardOne({ title, image, view }) {
    return (
        <div className="moviecardone">
            <img src={image} alt="image" />
            <h1>{title}</h1>
            <span><BsEye fontSize="20px" /><span>{view}</span></span>
        </div>
    )
}

export default MovieCardOne;