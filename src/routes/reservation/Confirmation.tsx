/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate, useLocation } from 'react-router-dom';
import { Modal, Box, Button, Container, Stack, TextField,  Typography } from '@mui/material';
import "../../css/reservation.css"
import ConfirmedModal from './Confirmed';
import { GiFullPizza } from 'react-icons/gi';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useEffect, useState } from 'react';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import AccessAlarmsRoundedIcon from '@mui/icons-material/AccessAlarmsRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import type { T } from '../../libs/types/common';
import { Message } from '../../libs/config';
import type { Reservation, ReservationInput } from '../../libs/types/reservatio';
import ReservationService from '../../services/ReservationService';
import { useGlobals } from '../../hooks/useGlobal';
import { sweetTopSuccessAlert } from '../../libs/sweetAlert';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveGetRerservation } from './selector';
import { setGetReservation } from './slice';



export default function ConfirmationForm() {
  const dispatch = useDispatch()
  const getReservation = useSelector(retrieveGetRerservation);
  const navigate = useNavigate();
  const location = useLocation();
  const { date, time, partySize } = location.state || {};
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [reservationDate, setReservationDate] = useState(date || '')
  const [reservationTime, setReservationTime] = useState(time || '')
  const [reservationSize, setReservationSize] = useState(partySize || '')
  const [reservationRequest, setReservationRequest] = useState('')
  const [memberNick, setMemberNick] = useState('')
  const [memberLastName, setMemberLastName] = useState('')
  const [memberPhone, setMemberPhone] = useState('')
  const [memberEmail, setMemberEmail] = useState('')
  const {authMember} = useGlobals(); 


  

  ///////////// handlers ////////////

  const handleClose = () => {
    navigate(-1); 
  };

  const handleReservationDate = (e: T) => {
    setReservationDate(e.target.value)
  }

  const handleReservationTime = (e: T) => {
    setReservationTime(e.target.value)
  }

  const handleReservationSize = (e: T) => {
    setReservationSize(e.target.value)
  }

  const handleMemberNick = (e: T) => {
    setMemberNick(e.target.value)
  }

  const handleMemberLastName = (e: T) => {
    setMemberLastName(e.target.value)
  }

  const handleMemberPhone = (value: string) => {
    setMemberPhone(value)
  }

  const handleMemberEmail = (e: T) => {
    setMemberEmail(e.target.value)
  }

  const handleReservationRequest = (e: T) => {
    setReservationRequest(e.target.value)
  }

  useEffect(() => {
    if(authMember){
      setMemberNick(authMember.memberNick || '');
      setMemberEmail(authMember.memberEmail || '')
      setMemberPhone(authMember.memberPhone || '')
    }
  }, [authMember])


  const handleReservationOrder = async () => {
    try {
      const isFullfill = 
        reservationDate !== ''
        && reservationTime !== ''
        && reservationSize !== ''
        && memberNick !== ''
        && memberLastName !== ''
        && memberPhone !== ''
        && memberEmail !== ''
        if(!isFullfill) throw new Error(Message.error3)

      const reservationInput: ReservationInput = {
        reservationDate: reservationDate,
        reservationTime: reservationTime,
        reservationSize: reservationSize,
        memberNick: memberNick,
        memberLastName: memberLastName,
        memberPhone: memberPhone,
        memberEmail: memberEmail,
        reservationRequest: reservationRequest
      }

      const reservation = new ReservationService()
      alert('It takes from 2 to 3 seconds please wait!')
      const result =  await reservation.createReservation(reservationInput)
      const updated = await reservation.getMyReservation({})
      dispatch(setGetReservation(updated))
      handleClose()
      sweetTopSuccessAlert('Reservation successfully created!')

    } catch (err) {
      console.log(err)
      alert('Please, fill all the fields!')
      throw err
    }
  }

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
                      value={memberNick}
                      className='name-field'
                      onChange={handleMemberNick}
                       />

                    <TextField
                      label="Last name"
                      variant="outlined"
                      className='surname-field'
                      onChange={handleMemberLastName}
                       />   

                       <PhoneInput
                        country={'uz'}
                        value={memberPhone}
                        onChange={handleMemberPhone}
                        disableCountryCode={false}
                        enableSearch={true}
                        inputStyle={{ width: '470px', height:'55px', marginLeft:'15px' }}
                        buttonClass='button-phone'
                       />

                       <TextField
                      label="Email address"
                      variant="outlined"
                      className='email-field'
                      value={memberEmail}
                      onChange={handleMemberEmail}
                       />
                      

                       <textarea 
                       placeholder='Add a special request'
                       className='request-field'
                       onChange={handleReservationRequest} />

                       <button
                       type='button'
                       className='btn-confirm'
                       onClick={handleReservationOrder}
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
                      <Typography className='date'> <CalendarMonthRoundedIcon sx={{width:'34px', height:'34px'}} />{date}</Typography>
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