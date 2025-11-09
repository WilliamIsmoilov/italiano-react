/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { useState } from "react"
import type { CartItem } from './libs/types/search'


function App() {
  const cartJson: string | null = localStorage.getItem('cartData');
  const currentCart = cartJson ? JSON.parse(cartJson): [];
  const [cartItems, setCartItems] = useState<CartItem[]>(currentCart)
  //////// handlers ////////////////////
  const onAdd = (input: CartItem) => {
    const exist: any = cartItems.find((item: CartItem) => item._id === input._id)
    if(exist){
      const cartUpdate = cartItems.map((item: CartItem) => {
        return item._id === input._id 
        ? {...exist, quantity: exist.quantity + 1} : 
        item
      });
      setCartItems(cartUpdate)
      localStorage.setItem('cartData', JSON.stringify(cartUpdate))
    }else{
      const cartUpdate = [...cartItems, {...input}];
      setCartItems(cartUpdate)
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    }
  }
  return (
    <>
    <HomeNavbar cartItems={cartItems}/>
    <Routes>
    <Route path="/" element={<HomePage />} />
        <Route path="/menu/*" element={<MenuPage onAdd={onAdd}/>} />
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
