function IconBox({icon, title, content }) {
    return (
        <>
            <div style={{ backgroundColor: "#1c1b1b", borderRadius: "20px", padding: "25px", display: "flex", flexDirection: "column", gap: "8px", flexGrow: "1", width: "250px" }}>
                <span style={{background: "white", padding: "15px", borderRadius: "20px", fontSize: "40px", width: "fit-content"}}>{icon}</span>
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
        </>
    )
}

export default IconBox