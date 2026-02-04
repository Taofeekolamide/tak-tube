import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import MovieDetails from "./Pages/MovieDetails";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import './App.css'
import Search from "./Pages/Search";
import Footer from "./components/Footer";
import NavToggle from "./components/Context";
import { useEffect, useState } from "react";
import MobileNav from "./components/MobileNav";
import ErrorPage from "./Pages/ErrorPage"
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  const [toggleNav, setToggleNav] = useState(false)
  const location = useLocation()
  const nav = useNavigate()

  useEffect(() => {
    if (location.pathname != "/" && location.pathname != "/contact" && location.pathname != "/about" && location.pathname != "/movies" && !location.pathname.startsWith("/movie") && !location.pathname.startsWith("/movie")) {
      nav("/error")
    }
  }, [location.pathname])

  return (
    <>
      <NavToggle.Provider value={{ toggleNav, setToggleNav }}>
        <div style={{ display: "flex", height: "100vh", width: "100%" }}>

          <Navbar />
          <MobileNav />

          <main>
            <Header />
            <div style={{ padding: "25px" }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
                <Route path="/search" element={<Search />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/error" element={<ErrorPage />} />
              </Routes>
            </div>

            <Footer />

          </main>


        </div >
      </NavToggle.Provider>
    </>
  )
}

export default App;