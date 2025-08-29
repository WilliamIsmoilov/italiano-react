import BookingForm from "./Booking";
import "../../css/reservation.css"
import {  Routes, Route, useLocation } from 'react-router-dom';
import ConfirmationForm from "./Confirmation";


export default function ReservationPage(){
    const location = useLocation()
      const state = location.state as { backgroundLocation?: Location };
    return(<div className="reservation">
            <Routes location={state?.backgroundLocation || location}>
               <Route path='/' element={<BookingForm/>}/> 
            </Routes>

            {state?.backgroundLocation && (
                <Routes>
                    <Route  path="/confirmation" element={<ConfirmationForm />} />
                </Routes>
            )}

        {/* <BookingForm/> */}
    </div>

    )
}
 


