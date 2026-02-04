function MovieCardFour({ image, title, views}) {
    return (
        <>
            <div style={{ backgroundImage: `url(${image})`, width: "270px", height: "420px", backgroundSize: "cover", borderRadius: "15px" }}>
                <div className="moviecardfour">
                    <div style={{position: "relative", top: "85%"}}>
                        <h1>{title}</h1>
                        <p>{views} <span>views</span> </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MovieCardFour