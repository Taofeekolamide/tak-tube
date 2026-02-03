import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import './App.css'
import Search from "./pages/Search";
import Footer from "./components/Footer";
import NavToggle from "./components/Context";
import { useState } from "react";
import MobileNav from "./components/MobileNav";

function App() {
  const [toggleNav, setToggleNav] = useState(false)

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
                <Route path="/movies" element={<Movies />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
                <Route path="/search" element={<Search />} />
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