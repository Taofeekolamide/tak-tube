import { Link } from "react-router-dom";

function PageBanners({title}) {
    return (
        <>
            <div className="banner">
                <div className="banneritem" >
                    <h1 style={{ fontSize: "45px" }}>{title}</h1>
                    <Link to="/"><span>Home</span> /</Link> <span>Movie</span>
                </div>
            </div>
        </>
    )
}

export default PageBanners;