// ReservationList.tsx
import React from 'react';
import TextType from '../reactBits/reservation/text';
import { Box, Stack, Container } from '@mui/material';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import CloseIcon from '@mui/icons-material/Close';

const reservation= [
  {name: 'Ismoilov Sardor', email: 'isome2517@gmail.com', date:'2025-10-25'}

]

export default function ReservationList() {
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
  <Stack className='reservation-section'>
    <div className='heading'>
      <Box className='title'>
        Your Reservation
      </Box>
    </div>
    <Box className='info-box'>
      <img src="/images/auth.jpg" className='img-rest' />

      <div className='info-col'>
      <div className='info-section'>
        <div className='info-row-1'>
        <strong className='name'>Ismoilov Sardor</strong>
        <strong className='name'>isome2517@gmail.com</strong>
      </div>
      <div className='info-row-2'>
        <strong className='name'>19 : 30</strong>
        <strong className='name'> 2025 October 13</strong>
      </div>
      </div>
      <div className='btn-section'>
        <button type='submit' className='modify-btn'> Modify <AutoFixHighIcon/></button>
        <button type='submit' className='cancel-btn'> Cancel <CloseIcon/></button>
      </div>
      </div>
      


      
    </Box>
   

  </Stack>
  </Container>

      
    </div>
  );
}
