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
import React, { useState } from "react"
import MemberService from "./services/MemberService"
import { useGlobals } from "./hooks/useGlobal"
import { sweetErrorHandling } from "./libs/sweetAlert"
import { Message } from "./libs/config"
import AuthenticationModal from "./components/auth"


function App() {
  const {cartItems, onAdd, onRemove, onDelete, deleteAll} = useBasket();
  const {setAuthMember} = useGlobals()
  const [signupOpen, setSignupOpen] = useState<boolean>(false);
  const [loginOpen, setLoginOpen] =useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  
  ////////// handlers ///////
  const handleSignupClose = () => setSignupOpen(false);
  const handleLoginClose = () => setLoginOpen(false);

  const handleLogoutClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  }

  const handleLogoutClose = () => setAnchorEl(null);
  const handleLogoutRequest = async () => {
    try {
      const confirmed = confirm('Are you sure to logout?')
      if(!confirmed) return;
      const member = new MemberService();
      await member.logout();
      setAuthMember(null)
    } catch (err) {
      console.log(err);
      sweetErrorHandling(Message.error1)
    }
  }


  return (
    <>
    <HomeNavbar cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove} 
                onDelete={onDelete} 
                deleteAll={deleteAll}
                setSignupOpen={setSignupOpen}
                setLoginOpen={setLoginOpen}
                anchorEl={anchorEl}
                handleLogoutClick={handleLogoutClick}
                handleLogoutClose={handleLogoutClose}
                handleLogoutRequest={handleLogoutRequest}/>
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
        <Route path="/reservation/*" element={<ReservationPage 
                                               setLoginOpen={setLoginOpen}
                                               />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
     </Routes>
     <Footer/>
     <AuthenticationModal
           signupOpen={signupOpen}
           loginOpen={loginOpen}
           handleLoginClose={handleLoginClose}
           handleSignupClose={handleSignupClose}
           />
    </>
  )
}

export default App
