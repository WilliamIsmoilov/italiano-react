/* eslint-disable @typescript-eslint/no-unused-vars */
import { Modal, Box, Stack, TextField, Typography,  Backdrop, Fade, FormControl, FormLabel, InputAdornment, IconButton, Fab } from '@mui/material';
import '../../css/auth.css'
import { useState } from 'react';
import { useGlobals } from '../../hooks/useGlobal';
import type { T } from '../../libs/types/common';
import { Message } from '../../libs/config';
import type { LoginInput, MemberInput } from '../../libs/types/member';
import MemberService from '../../services/MemberService';
import { sweetErrorHandling } from '../../libs/sweetAlert';
import { GiFullPizza } from 'react-icons/gi';
import { Visibility, VisibilityOff } from "@mui/icons-material";



interface AuthenticationModalProps{
  signupOpen: boolean;
  loginOpen: boolean;
  handleSignupClose: () => void;
  handleLoginClose: () => void;
  setSignupOpen:(isOpen: boolean) => void;
  setLoginOpen: (isOpen: boolean) => void;
}

export default function AuthenticationModal(props:  AuthenticationModalProps){
    const { signupOpen, loginOpen, handleSignupClose, handleLoginClose, setSignupOpen, setLoginOpen } = props;
    const [memberEmail, setMemberEmail] = useState<string>('')
    const [memberPassword, setMemberPassword] = useState<string>('')
    const [memberNick, setMemberNick] = useState<string>('')
    const [memberPhone, setMemberPhone] = useState<string>('')
    const [memberAddress, setMemberAddress] = useState<string>('')
    const {setAuthMember} = useGlobals();
    const [showPassword, setShowPassword] = useState(false);

    /////////// handlers ///////////

    const handleUserName = (e: T) => {
        setMemberNick(e.target.value)
    }

    const handlePhone = (e: T) => {
        setMemberPhone(e.target.value)
    }

    const handlePassword =(e: T) => {
        setMemberPassword(e.target.value)
    }

    const handleEmail = (e: T) => {
        setMemberEmail(e.target.value)
    }

    const handleAddress = (e: T) => {
        setMemberAddress(e.target.value)
    }

    const handlePasswordKeyDown = (e: T) => {
        if(e.key === 'Enter' && signupOpen){
            handleSignupRequest().then()
        }else if(e.key === 'Enter' && loginOpen){
            handleLoginRequest().then()
        }
    }

    const handleSignupRequest = async () => {
        try {
            const isFullfill = 
            memberNick !== '' 
            && memberPhone !== '' 
            && memberAddress !== '' 
            && memberEmail !== ''
            && memberPassword !== '';
            if(!isFullfill) throw new Error(Message.error3)

            const signupInput: MemberInput = {
                memberAddress: memberAddress,
                memberNick: memberNick,
                memberEmail: memberEmail,
                memberPhone: memberPhone,
                memberPassword: memberPassword
            }
            const member = new MemberService()
            const result = await member.signup(signupInput)

            setAuthMember(result)
            handleSignupClose()
        } catch (err) {
            console.log(err);
            handleSignupClose();
            sweetErrorHandling(err).then()
        }
    }

    const handleLoginRequest = async () => {
        try {
            const isFullfill = memberEmail !== '' && memberPassword !== '';
            if(!isFullfill) throw new Error(Message.error3)

            const loginInput: LoginInput = {
                memberEmail: memberEmail,
                memberPassword: memberPassword
            }

            const member = new MemberService();
            const result = await member.login(loginInput)
            setAuthMember(result);
            handleLoginClose()
        } catch (err) {
            console.log(err);
            handleLoginClose();
            sweetErrorHandling(err).then()
        }
    }

    const openSignup = () => {
  setLoginOpen(false);      // avval login yopiladi
  setTimeout(() => {
    setSignupOpen(true);   // keyin signup ochiladi
  }, 200);
};


    return (
       <div>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={loginOpen}
            onClose={handleLoginClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 100,
            }}
            sx={
                {display: 'flex', justifyContent: 'center', alignItems: 'center'}
            }
            >
                <Fade in={loginOpen}>
                   <Box className='box-1'>        
                        <Stack className='login-section'>
                            <GiFullPizza className="icon"/>
                            <Box className="login-title"> Login </Box>
                            <Typography className='login-desc'>Don't you have an account? <span className='signup-link'onClick={openSignup}>Sign up</span></Typography>

                            <Stack className='login-form'>
                                <FormControl fullWidth>
                                  <FormLabel sx={{marginLeft: '50px'}}>Email address</FormLabel>
                                  <TextField 
                                    placeholder="@gmail.com"
                                    variant="outlined"
                                    className="text-form"
                                    onChange={handleEmail}
                                    />
                                </FormControl>

                                <FormControl fullWidth>
                                    <FormLabel sx={{marginLeft: '50px'}}>Password</FormLabel>
                                <TextField
                                   variant='outlined'
                                   type={showPassword ? "text" : "password"}
                                   className='text-form'
                                    InputProps={{
                                      endAdornment: (
                                      <InputAdornment position="end">
                                        <IconButton
                                              aria-label="toggle password visibility"
                                                  onClick={() => setShowPassword(!showPassword)}
                                                edge="end"
                                                      >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                       </IconButton>
                                   </InputAdornment>
                                    ),
                                     }}
                                   onChange={handlePassword}
                                   onKeyDown={handlePasswordKeyDown}
                                />
                                </FormControl>
                            </Stack>
                            <Stack className='login-btn'>
                                <Fab className='log-btn' onClick={handleLoginRequest}> Log in</Fab>
                                <button className='g-btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 262">
                                    <path fill="#4285F4" d="M255.9 133.5c0-10.6-.9-18.3-2.8-26.3H130.6v47.7h72.3c-1.5 11.9-9.5 29.7-27.3 41.6l-.3 1.9 39.6 30.7 2.7.3c25-23 39.3-56.9 39.3-96.4"/>
                                    <path fill="#34A853" d="M130.6 261c36.1 0 66.5-11.9 88.6-32.4l-42.2-32.7c-11.3 7.9-26.6 13.4-46.4 13.4-35.4 0-65.4-23.7-76.2-56.4l-1.8.2-41.3 31.8-.5 1.7C33.9 231 78.9 261 130.6 261"/>
                                    <path fill="#FBBC05" d="M54.4 153c-2.8-8-4.4-16.6-4.4-25.4s1.6-17.4 4.3-25.4l-.1-1.7-41.8-32-.5 1.6C4 90.7.1 108.5.1 127.7c0 19.3 3.9 37 11.8 53.1L54.4 153"/>
                                    <path fill="#EA4335" d="M130.6 50.5c24.9 0 41.7 10.8 51.3 19.8L217 35C197 16.8 166.7 0 130.6 0 78.9 0 33.9 30 13.4 76.9l41.1 32.1c10.8-32.7 40.8-56.4 76.1-56.4"/>
                                    </svg> Log in with google

                                </button>
                            </Stack>
                        </Stack>
                        <Stack className='img-box'>
                            <div>
                                <img src="/images/auth.jpg" alt=""  className='img'/>
                            </div>
                            
                        </Stack>
                </Box> 
                </Fade>
                
        </Modal>



<Modal
  aria-labelledby="transition-modal-title"
  aria-describedby="transition-modal-description"
  open={signupOpen}
  onClose={handleSignupClose}
  closeAfterTransition
  BackdropComponent={Backdrop}
  BackdropProps={{ timeout: 100 }}
  slotProps={{
    backdrop: {
      sx: { backgroundColor: 'rgba(0,0,0,0.4)' },
    },
  }}
  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
>
  <Fade in={signupOpen}>
    <Box className="signup-box">
      <Stack className="signup-section">
        <GiFullPizza className="signup-icon" />

        <Box className="signup-title">Sign up</Box>

        <Typography className="signup-desc">
          Already have an account?
          <span
            className="login-link"
            onClick={() => {
              setSignupOpen(false);
              setTimeout(() => setLoginOpen(true), 200);
            }}
          >
            {" "}Login
          </span>
        </Typography>

        <Stack className="signup-form">
            <FormControl>
                <TextField 
                className="signup-input"
                placeholder="Email" 
                onChange={handleEmail}/>
            </FormControl>
          <FormControl>
            <TextField 
             className="signup-input"
             placeholder="Nickname"
             onChange={handleUserName} />
          </FormControl>
          <FormControl>
            <TextField
            className="signup-input"
            placeholder="Phone"
            onChange={handlePhone} />
          </FormControl>
          <FormControl>
            <TextField
            className="signup-input"
            placeholder="Address"
            onChange={handleAddress} />
          </FormControl>
          <FormControl>
            <TextField
            className="signup-input"
            placeholder="Password"
            type="password"
            onChange={handlePassword}
            onKeyDown={handlePasswordKeyDown}
          />
          </FormControl>
          
        </Stack>

        <Stack className="signup-btn">
          <Fab className="signup-submit" onClick={handleSignupRequest}>Sign up</Fab>
        </Stack>
      </Stack>

      <Stack className="signup-img-box">
        <div>
          <img src="/images/auth.jpg" alt="" className="signup-img" />
        </div>
      </Stack>
    </Box>
  </Fade>
</Modal>
       </div> 

       

    )
}
