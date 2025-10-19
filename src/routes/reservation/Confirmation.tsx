import { useNavigate, useLocation } from 'react-router-dom';
import { Modal, Box, Button, Container, Stack, TextField,  Typography } from '@mui/material';
import "../../css/reservation.css"
import ConfirmedModal from './Confirmed';
import { GiFullPizza } from 'react-icons/gi';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useState } from 'react';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import AccessAlarmsRoundedIcon from '@mui/icons-material/AccessAlarmsRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';



export default function ConfirmationForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { date, time, partySize } = location.state || {};
  const [phone, setPhone] = useState('')
  const [isConfirmed, setIsConfirmed] = useState(false)
  
  const handleConfrimClick = () => {
    setIsConfirmed(true)
  }

  const handleClose = () => {
    navigate(-1); // or navigate('/', { replace: true })
  };

  return ( 
    <Modal
      open={true}
      onClose={handleClose}
      className='confirmation'
       sx={{
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
        
  }}
    >
      <Box
      className='box'
      >

        <Container >
            <Stack className='confirmation-section'
            sx={{
                display: 'flex',
                justifyContent:'center',
                
            }}>
              <Stack className='headers'>
                <Box className='brand-logo'>
                  <GiFullPizza className="icon"/>
                  <span className="brand-name">Itali<span className="span">ano</span></span> 
                </Box>

                <Stack className='sign-btns'>
                  <button
                  className='signin'
                  name='sign in'
                  type='button'
                  >Sign in</button>

                  <button
                  className='signup'
                  name='sign in'
                  type='button'
                  >Sign up</button>
                </Stack>
              </Stack>

                <Box className='confirmation-title'
                > Reservation</Box>


                <Stack className='data-section'>
                  <Stack className='data-order'>
                    <Box className='data-title'> Data order</Box>

                    <TextField
                      label="First name"
                      variant="outlined"
                      className='name-field'
                       />

                    <TextField
                      label="Last name"
                      variant="outlined"
                      className='surname-field'
                       />   

                       <PhoneInput
                        country={'uz'}
                        value={phone}
                        onChange={setPhone}
                        disableCountryCode={false}
                        enableSearch={true}
                        inputStyle={{ width: '470px', height:'55px', marginLeft:'15px' }}
                        buttonClass='button-phone'
                       />

                       <TextField
                      label="Email address"
                      variant="outlined"
                      className='email-field'
                       />
                      

                       <textarea 
                       placeholder='Add a special request'
                       className='request-field' />

                       <button
                       type='button'
                       className='btn-confirm'
                       onClick={handleConfrimClick}
                       >Confirm reservation</button>

                       <ConfirmedModal
        open={isConfirmed}
        onClose={() => setIsConfirmed(false)}
      />
                      
                       

                  </Stack>

                  <Stack className='detail'>
                    <Stack className='time-detail'>
                      <Typography className='detail-title'>
                        Reservation detail
                      </Typography>
                      <Typography className='date'> <CalendarMonthRoundedIcon sx={{width:'34px', height:'34px'}}/>{date}</Typography>
                      <Typography className='time'> <AccessAlarmsRoundedIcon sx={{width:'34px', height:'34px'}}/>{time} </Typography>
                      <Typography className='size'><PersonOutlineRoundedIcon sx={{width:'34px', height:'34px'}}/> {partySize} people</Typography>

                    </Stack>

                    <Stack className='res-information'>
                      <Box className='info-title'> Restaurant informations</Box>
                      <Typography className='info-text'>
                        Sed ut perspiciatis unde omnis briste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. <br /><br />

                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.
                      </Typography>


                       <Button
                          className='btn-close'
                          variant="contained"
                          onClick={handleClose}
                          >
                              Close
                       </Button>

                    </Stack>


                  </Stack>

                </Stack>


                
            </Stack>

        </Container>
          </Box>
        </Modal>
      );
    }