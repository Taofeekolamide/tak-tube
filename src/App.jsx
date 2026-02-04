import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import Footer from "./components/Footer";
import NavToggle from "./components/Context";
import MobileNav from "./components/MobileNav";
import './App.css'
import { useEffect, useState } from "react";



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
            <div className="main">
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