import { useNavigate, useLocation } from 'react-router-dom';
import { Modal, Box, Typography, Button, Container, Stack } from '@mui/material';
import "../../css/reservation.css"

export default function ConfirmationForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { date, time, partySize } = location.state || {};
  

  const handleClose = () => {
    navigate(-1); // or navigate('/', { replace: true })
  };

  return ( 
    <Modal
      open={true}
      onClose={handleClose}
      className='confirmation'
      // Bu yerda siz modalni ustida joylashishini ta'minlaysiz
       sx={{
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
        
  }}
    >
      <Box
      className='box'
        sx={{
      width: 900,
      maxHeight: '1500px', // 👈 Ekranga sig‘adigan maksimal balandlik
      bgcolor: 'white',
      borderRadius: 2,
      p: 4,
      overflowY: 'auto', // 👈 Sc
        }}
      >

        <Container >
            <Stack className='confirmation-section'
            sx={{
                display: 'flex',
                justifyContent:'center',
                
            }}>
                <Box className='confirmation-title'
                > Reservation</Box>
                
            </Stack>

        </Container>
        
        <Button
          variant="contained"
          sx={{ mt: 3 }}
          onClick={handleClose}
        >
          Close
        </Button>
          </Box>
        </Modal>
      );
    }