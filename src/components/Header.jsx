import { useContext, useState } from "react"
import { BiSearch } from "react-icons/bi"
import { FaBars } from "react-icons/fa"
import { GiCancel } from "react-icons/gi"
import { useNavigate } from "react-router-dom"
import NavToggle from "./Context";
import { HiX } from "react-icons/hi"

function Header() {
    const { toggleNav, setToggleNav } = useContext(NavToggle)

    const [search, setSearch] = useState("")
    const clearInput = () => {
        setSearch("")
    }

    const navigate = useNavigate()
    const SearchLink = () => {
        navigate(`/search?term=${search}`)
    }

    return (
        <header>

            <div className="header">
                <input type="text" placeholder="Search for a movie..." value={search} onChange={(e) => setSearch(e.target.value)} />
                {search && <GiCancel color="#6b6b6b" fontSize="20px" onClick={clearInput} />}
                {search && <BiSearch color="#6b6b6b" fontSize="25" onClick={SearchLink} />}
            </div>
            {!toggleNav ? <FaBars className="menu" onClick={() => setToggleNav(!toggleNav)} /> : <HiX className="menu" onClick={() => setToggleNav(!toggleNav)} />}

        </header>
    )
}

export default Header