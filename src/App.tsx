import { Route, Routes } from "react-router"
import HomePage from "./routes/home"
import MenuPage from "./routes/menu"
import AboutPage from "./routes/about.us"
import OrderOnlinePage from "./routes/order.online"
import ReservationPage from "./routes/reservation"
import ContactUsPage from "./routes/contact.us"
import HomeNavbar from "./components/headers/HomeNavbar"
import "./App.css"
import "./css/homeNavbar.css"
import './css/footer.css'
import Footer from "./components/footer"


function App() {
  return (
    <>
    <HomeNavbar/>
    <Routes>
    <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/aboutUs" element={<AboutPage />} />
        <Route path="/orderOnline" element={<OrderOnlinePage />} />
        <Route path="/reservation/*" element={<ReservationPage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App
