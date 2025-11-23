/* eslint-disable @typescript-eslint/no-unused-vars */
// ReservationList.tsx
import React, { useEffect, useState } from 'react';
import TextType from '../reactBits/reservation/text';
import { Box, Stack, Container } from '@mui/material';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import CloseIcon from '@mui/icons-material/Close';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { retrieveGetRerservation } from './selector';
import { createSelector } from '@reduxjs/toolkit';
import type { Dispatch } from '@reduxjs/toolkit';
import { setGetReservation } from './slice';
import type { Reservation, ReservationInquery } from '../../libs/types/reservatio';
import { useDispatch, useSelector } from 'react-redux';
import ReservationService from '../../services/ReservationService';


const getReservationRetriever = createSelector(
  retrieveGetRerservation, (getReservation) => ({getReservation})
)

const actionDispatch = (dispatch: Dispatch) => ({
  setGetReservation: (data: Reservation[]) => dispatch(setGetReservation(data))
})


export default function ReservationList() {
   const [reservationInquery, setReservationInquery] = useState<ReservationInquery>({} as ReservationInquery);
  const {setGetReservation} = actionDispatch(useDispatch())


  useEffect(() => {
        const reservation = new ReservationService();
        reservation.getMyReservation({
            ...reservationInquery
        })
        .then(data => setGetReservation(data))
        .catch( err => console.log(err))
    }, [reservationInquery])

    const {getReservation} = useSelector(getReservationRetriever)
    const [reservations, setReservations] = useState<Reservation[]>([]);


    //////////////// handlers //////////////////////
    const handleCancelReservation =  async (reservationId: string) => {
      try {
        const confirmed = confirm('Are you sure to cancel your reservation?');
        if(!confirmed) return
        const cancel = new ReservationService();
        const result = await cancel.cancelReservation(reservationId);
        setReservations(prev =>
      prev.filter(r => String(r._id) !== String(reservationId))
    );
        return result
        
      } catch (err) {
        console.log(err)
      }
    }


  return (
    <div className="reservation-list">
     <TextType 
     className='react-text'
  text={["Reservation lists", "that you can change or cancel time!", "Thanks for choosing us!"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
/>

<Container>
  {getReservation && getReservation.length > 0 ? (
    <Stack className='reservation-section' >
    {getReservation.map((ele: Reservation) => (
      <React.Fragment key={ele._id}>
    <><div className='heading'>
        <Box className='title'>
          Your Reservation
        </Box>
      </div>
      <Box className='info-box'>
          <img src="/images/auth.jpg" className='img-rest' />

          <div className='info-col'>
            <div className='info-section'>
              <div className='info-row-1'>
                <strong className='name'><PermIdentityIcon style={{ textAlign:'center', marginTop:'3px', color:'black'}}/>  {ele.memberNick} {ele.memberLastName}</strong>
                <strong className='name'><AlternateEmailIcon style={{ textAlign:'center', marginTop:'3px', color:'black'}}/>  {ele.memberEmail}</strong>
              </div>
              <div className='info-row-2'>
                <strong className='name'><AccessTimeIcon  style={{ textAlign:'center', marginTop:'3px', color:'black'}}/>  {ele.reservationTime}</strong>
                <strong className='name'><CalendarTodayIcon style={{ textAlign:'center', marginTop:'3px', color:'black'}}/> {ele.reservationDate}</strong>
              </div>
            </div>
            <div className='btn-section'>
              <button type='submit' className='modify-btn'> Modify <AutoFixHighIcon /></button>
              <button onClick={() => handleCancelReservation(ele._id)} type='submit' className='cancel-btn'> Cancel <CloseIcon /></button>
            </div>
          </div>
        </Box></>
    </React.Fragment>))}
  </Stack>
  ): (
    <div className='resr-empty'>
      <span className='empty-desc'>You had not ordered any table !</span>
    </div>
  )}
  
  </Container> 
    </div>
  );
}
