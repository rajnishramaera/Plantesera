import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Products from "./Products"
import PrivacyPolicy from "./PrivacyPolicy"
import AOS from "aos"
import "aos/dist/aos.css"
import "./App.css"
import "./MediaQuery.css"

const App = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"products"} element={<Products />} />
      <Route path={"privacypolicy"} element={<PrivacyPolicy />} />
    </Routes>
  )
}

export default App
