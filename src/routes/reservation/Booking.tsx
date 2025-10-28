import {  Box, Container, Stack } from "@mui/material";
import type { Dayjs } from 'dayjs';

import  { useState } from 'react';
import {  Button, FormControl } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useLocation, useNavigate } from 'react-router-dom';
import dayjs from "dayjs";

export default function BookingForm(){
  const [date, setDate] = useState<Dayjs | null>(null);
  const [time, setTime] = useState<Dayjs | null>(null);
  const [partySize, setPartySize] = useState('');

const navigate = useNavigate();
const location = useLocation();

   const handleOrder = () => {
    if(date &&  time && partySize){
        navigate('confirmation', {
            state: {
                backgroundLocation: location,
                date: date.format('YYYY-MM-DD'),
                time: time.format('HH:mm'),
                partySize
            }
        })
    }
  };

    return( <div className="reservation-frame">
        <Container>
            <Stack className='reservation-section'>
                <Stack className="reservation-img">
                  <div className="circle-wrapper">
                   <Box
                   component={'img'}
                   src="/images/reservation.jpg"
                    sx={{
                        width:'525px',
                        height:'525px',
                        display:'flex',
                        justifyContent:'center',
                        borderRadius: '50%'
                    }}>
                   </Box>
                   </div>
                </Stack>
                <Stack className="table-order">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Box className='book-title'>
                            Book a table
                        </Box>

                        
                        <FormControl 
                         sx={{
                               mb:2,  
                               width:'430px', 
                               marginTop:'50px', 
                               backgroundColor:'#fcf9f6ff'
                               }}>
                            <DatePicker
                              label="Date"
                              value={date}
                              onChange={(newValue) => setDate(newValue)}
                              disablePast
                              format=' DD MMMM YYYY'
                            />
                        </FormControl>
                        

                         <FormControl 
                         sx={{
                               mb:2,  
                               width:'430px', 
                               marginTop:'50px', 
                               backgroundColor:'#fcf9f6ff'
                               }}>
                            <TimePicker
                               label='Time'
                               value={time}
                               ampm={false}
                               minTime={dayjs('09:00', 'HH')}
                               maxTime={dayjs('23:00', 'HH')}
                               minutesStep={5}
                               onChange={(newTime) => setTime(newTime)}
                            />    
                        </FormControl>

                        
                        <FormControl
                        sx={{
                               mb:2,  
                               width:'430px', 
                               marginTop:'50px', 
                               backgroundColor:'#fcf9f6ff',
                               }}>
                            <input 
                            type="number"
                            placeholder="Party Size"
                            value={partySize}
                            onChange={(e) => setPartySize(e.target.value)}
                            style={{
                                padding:'12px',
                                borderRadius: '8px',
                                border: '1px solid #ccc',
                                width:'404px',
                                height:'30px',
                                fontSize:'16px'
                            }}
                            min={1}
                            max={20}
                            />
                        </FormControl>

                        <Button
                          variant="contained"
                          sx={{width:'430px', height:'80px', backgroundColor: '#ff9900', fontWeight: 'bold', borderRadius: 2 }}
                          onClick={handleOrder}
                          disabled={!date || !time || !partySize}
                          >
                           Book now
                         </Button>
                    </LocalizationProvider>
                </Stack>

            </Stack>
        </Container>

    </div> 

    )
}