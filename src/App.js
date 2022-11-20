import TopNav from "./components/TopNav"
import Navbar from "./components/Navbar"
import CTATwo from "./components/CTATwo"
import Footer from "./components/Footer"
import WhatsAppBtn from "./components/WhatsAppBtn"
import ContactUs from "./components/ContactUs"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import { Route, Routes } from "react-router-dom"
import "./css/style.css"

function App() {
  return (
    <>
      <TopNav />
      <Navbar />
      <div >
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </div>
      <CTATwo />
      <Footer />
      <WhatsAppBtn />

    </>
  )
}

export default App
