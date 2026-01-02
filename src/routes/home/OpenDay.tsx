/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
export default function OpanDays(){
const navigate = useNavigate();

const navigateOrder = () => {
    navigate('/orderOnline')
}

const navigateReservation = () => {
    navigate('/reservation')
}

    return (<div className="open-days">
        <Container>
            <div className='open-days-body'>
                <Stack className="open-section">
                    <Box className='open-title'> we are open from</Box>
                    <Stack sx={{width: '369px', height:'215px'}}>
                        <Box className='open-days'>Monday-Sunday</Box>
                        <Typography className='open-time'>
                            Launch: Mon-Sun: 09:00am-11:00pm <br />
                            Dinner: Sunday: 04:00pm-08:00pm <br />
                        </Typography>
                    </Stack> 
                    <Stack sx={{display:'flex', flexDirection:'row', gap:'40px'}}>
                     <Button
                        size="medium"
                        color="primary"
                        aria-label="Explore Bahamas Islands"
                        sx={{ 
                            ml: 'auto', 
                            alignSelf: 'center', 
                            fontWeight: 600,  
                            width:'232px', 
                            height:'74px', 
                            borderRadius:'50px',
                            backgroundColor:'#FF8A00', 
                            color:'white'}}
                            onClick={navigateOrder}
                           >
                            Order now
                     </Button>

                     <Button
                        size="medium"
                        color="primary"
                        aria-label="Explore Bahamas Islands"
                        sx={{ 
                            ml: 'auto', 
                            alignSelf: 'center', 
                            fontWeight: 600,  
                            width:'232px', height:'74px', 
                            borderRadius:'50px',
                            backgroundColor:'#FFFFFFF2', 
                            color:'black'}}
                            onClick={navigateReservation}
                            
                           >
                            Reservation
                     </Button>

                    </Stack>                   
                </Stack>



            </div>
            
        </Container>
    </div>
        
    )
}