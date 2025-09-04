import { Box, Container, Stack, Typography } from '@mui/material';

export default function MainPage() {
    return ( <div className="about-frame">
        <Container>
            <Stack className="about-section">
                <Stack className="about-img1">
                    
                    <div className="circle-wrapper"> 
                        <Box 
                        component={'img'}
                        src="/images/aboutimg1.jpg"
                        sx={{
                            width: '525px',
                            height: '525px',
                            display: 'flex',
                            justifyContent: 'center',
                            borderRadius: '50%'
                        }}
                        >       
                        </Box>
                    </div>
                    
                <Stack flexDirection={'column'}>
                    <Box className="about-title">
                        <span style={{color:'#ff8a00', }}>Our</span> <br /> restaurant
                    </Box>
                    <Typography  className='about-desc'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse.
                    </Typography>
                 </Stack>
                </Stack>

                <Stack className='about-img2'>
                    <Typography className='about-desc2'>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                    </Typography>

                     <div className="circle-wrapper2">
                        
                        <Box 
                        component={'img'}
                        src="/images/aboutimg2.jpg"
                        sx={{
                            width: '525px',
                            height: '525px',
                            display: 'flex',
                            justifyContent: 'center',
                            borderRadius: '50%'
                        }}
                        >       
                        </Box>
                    </div>

                </Stack>

                <Stack className='about-owner'>
                    <Box
                    component={'img'}
                    src='/images/owner.jpg'
                    sx={{
                        width: '460px',
                        height: '650px',
                        opacity:1
                    }}
                    >
                    </Box>
                    <Stack flexDirection={'column'}>
                        <Box className="owner-title">
                        <span style={{color:'#ff8a00', }}>Owner</span> &<br /> Executive Chef
                    </Box>
                    <Box className="owner-name"> Ismail Marzuki</Box>
                    <Typography className='owner-desc'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                    </Stack>


                </Stack>

            </Stack>
            
        </Container>
        
    </div> )
}