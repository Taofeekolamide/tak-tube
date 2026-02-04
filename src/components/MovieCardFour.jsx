function MovieCardFour({ image, title, views}) {
    return (
        <>
            <div className="moviecardfour" style={{ backgroundImage: `url(${image})`}}>
                <div className="moviecardfouroverlay">
                    <div style={{position: "relative", top: "80%"}}>
                        <h1>{title}</h1>
                        <p>{views} <span>views</span> </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MovieCardFour