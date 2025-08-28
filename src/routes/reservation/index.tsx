import BookingForm from "./Booking";
import "../../css/reservation.css"
import {  Routes, Route, useLocation } from 'react-router-dom';
import ConfirmationForm from "./Confirmation";


export default function ReservationPage(){
    const location = useLocation()
    return(
         <div className="reservation">
         
            <Routes location={location}>
               <Route path='/' element={<BookingForm/>}/> 
               <Route path="confirmation" element={<ConfirmationForm/>}/>
            </Routes>

        {/* <BookingForm/> */}
    </div>

    )
}
 


