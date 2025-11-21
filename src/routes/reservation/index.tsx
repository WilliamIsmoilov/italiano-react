/* eslint-disable @typescript-eslint/no-unused-vars */
import BookingForm from "./Booking";
import "../../css/reservation.css"
import {  Routes, Route, useLocation } from 'react-router-dom';
import ConfirmationForm from "./Confirmation";
import ReservationList from "./ReservationList";
import { useGlobals } from "../../hooks/useGlobal";
import { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import type { Dispatch } from '@reduxjs/toolkit';
import { setGetReservation } from "./slice";
import type { Reservation, ReservationInquery } from "../../libs/types/reservatio";
import ReservationService from "../../services/ReservationService";



const actionDispatch = (dispatch: Dispatch) => ({
    setGetReservation: (data: Reservation[]) => dispatch(setGetReservation(data))
})

interface ReservationProps{
    setLoginOpen: (isOpen: boolean) => void;
}


export default function ReservationPage(props: ReservationProps){
    const {setLoginOpen} =props
    const [reservationInquery, setReservationInquery] = useState<ReservationInquery>({} as ReservationInquery);

    const {setGetReservation} = actionDispatch(useDispatch())

    useEffect(() => {
        const reservation = new ReservationService();
        reservation.getMyReservation({
            ...reservationInquery
        }
        )
        .then(data => setGetReservation(data))
        .catch( err => console.log(err))
    }, [reservationInquery])


    const location = useLocation()
    const {authMember} = useGlobals(); 
      const state = location.state as { backgroundLocation?: Location };
    return(<div className="reservation">
            <Routes location={state?.backgroundLocation || location}>
               <Route path='/' element={<BookingForm   setLoginOpen={setLoginOpen}/>}/> 
            </Routes>

            {state?.backgroundLocation && (
                <Routes>
                    <Route  path="/confirmation" element={<ConfirmationForm />} />
                </Routes>
            )}
            {authMember ? (
                <ReservationList />
            ): (<div style={{textAlign: 'center', fontFamily:'Tinos', fontSize:' 25px'}}>
                <h1>Please Login to see your reservation</h1>
                </div>)}

        {/* <BookingForm/> */}
    </div>

    )
}
 


