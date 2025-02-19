
import { Route, Routes } from "react-router"
import './App.css'
import Footer from './components/Footer/Footer'
import Fruits from './components/Fruits/Fruits'
import Navbar from './components/NavBar/Navbar'
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import FruitSearch from "./components/Fruits/FruitSearch/FruitSearch"

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Fruits />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<FruitSearch />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
