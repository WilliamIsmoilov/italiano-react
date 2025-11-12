/* eslint-disable @typescript-eslint/no-unused-vars */
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
import useBasket from "./hooks/useBasket"


function App() {
  const {cartItems, onAdd, onRemove, onDelete, deleteAll} = useBasket()
  return (
    <>
    <HomeNavbar cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove} 
                onDelete={onDelete} 
                deleteAll={deleteAll}/>
    <Routes>
    <Route path="/" element={<HomePage onAdd={onAdd}/>} />
        <Route path="/menu/*" element={<MenuPage onAdd={onAdd}/>} />
        <Route path="/aboutUs" element={<AboutPage />} />
        <Route path="/orderOnline" element={<OrderOnlinePage 
                                            onAdd={onAdd} 
                                            cartItems={cartItems}
                                            onRemove={onRemove}
                                            onDelete={onDelete}
                                            deleteAll={deleteAll} />} />
        <Route path="/reservation/*" element={<ReservationPage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App
