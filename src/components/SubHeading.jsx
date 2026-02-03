import { BiPlay } from "react-icons/bi"

function SubHeading({ text }) {
    return (
        <>
            <div className="subheading">
                <h1><BiPlay fontSize="40px" />{text}</h1>
            </div>
        </>

    )
}

export default SubHeading