import { Modal, Box, Button, Container, Stack, TextField,  Typography, } from '@mui/material';

export default function Login(){
    return (
       <div>
        <Modal
            open={true}
            className='login'
            >
                <Box className='box-1'>        
                        <Stack className='signup-section'>
                            <Box className="login-title"> Login </Box>
                            <Typography>Do have an account? Log in</Typography>

                            <Stack className='login-form'>
                                <TextField
                                   label="Email address"
                                   variant="outlined"
                                   className='email-field'
                                />

                                <TextField
                                   label='Password'
                                   variant='outlined'
                                   className='password-field'
                                />
                            </Stack>
                            <Stack>
                                
                            </Stack>
                        </Stack>
                </Box>
        </Modal>
       </div> 
    )
}