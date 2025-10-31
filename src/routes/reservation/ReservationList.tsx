// ReservationList.tsx
import React from 'react';
import TextType from '../reactBits/reservation/text';
import { Box, Stack, Container } from '@mui/material';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import CloseIcon from '@mui/icons-material/Close';

const reservation= [
  {name: 'Ismoilov Sardor', email: 'isome2517@gmail.com', date:'2025 December 27', time: '18 : 25'},
  {name: 'Ismoilov MukhammadAli', email: 'ismoilovAli@gmail.com', date:'2025 October 13', time: '13 : 00'},
  {name: 'Ismoilov Azizbek', email: 'isome2517@gmail.com', date:'2025 November 9', time: '19 : 00'}

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
    {reservation.map((ele, index) => (
    <><div className='heading'>
        <Box className='title'>
          Your Reservation
        </Box>
      </div>
      <Box className='info-box' key={index}>
          <img src="/images/auth.jpg" className='img-rest' />

          <div className='info-col'>
            <div className='info-section'>
              <div className='info-row-1'>
                <strong className='name'>{ele.name}</strong>
                <strong className='name'>{ele.email}</strong>
              </div>
              <div className='info-row-2'>
                <strong className='name'>{ele.time}</strong>
                <strong className='name'> {ele.date}</strong>
              </div>
            </div>
            <div className='btn-section'>
              <button type='submit' className='modify-btn'> Modify <AutoFixHighIcon /></button>
              <button type='submit' className='cancel-btn'> Cancel <CloseIcon /></button>
            </div>
          </div>
        </Box></>
    ))}
    
   

  </Stack>
  </Container>

      
    </div>
  );
}
