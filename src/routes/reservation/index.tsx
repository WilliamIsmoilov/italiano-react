import BookingForm from "./Booking";
import "../../css/reservation.css"
import {  Routes, Route, useLocation } from 'react-router-dom';
import ConfirmationForm from "./Confirmation";
import ReservationList from "./ReservationList";
import React from 'react';


export default function ReservationPage(){
    const location = useLocation()
      const state = location.state as { backgroundLocation?: Location };
const [reservations, setReservations] = React.useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      date: "2025-09-05",
      time: "19:00",
      partySize: 4,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      date: "2025-09-10",
      time: "20:30",
      partySize: 2,
    }
  ]);

    return(<div className="reservation">
            <Routes location={state?.backgroundLocation || location}>
               <Route path='/' element={<BookingForm/>}/> 
            </Routes>

            {state?.backgroundLocation && (
                <Routes>
                    <Route  path="/confirmation" element={<ConfirmationForm />} />
                </Routes>
            )}

            <ReservationList reservations={reservations} />

        {/* <BookingForm/> */}
    </div>

    )
}
 


