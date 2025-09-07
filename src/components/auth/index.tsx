import {  Fade, Modal, Stack } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import styled from '@emotion/styled';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
    },

    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 2, 2),
    },
}))

const ModalImg = styled.img`
  width: 500px;
  height: 100%;
  border-radius: 10px;
  background: #000;
`;

export default function LoginModal(){

    const classes = useStyles()
    return( <div className="login">
        <Modal
         open={true}>
            <Fade>
                <Stack
                 className={classes.paper}
                 direction={'row'}
                 sx={{width:'800px'}}
                 >

                    <Stack sx={{}}>

                    </Stack>
                    <ModalImg src={'/images/auth.jpg'} alt="cake"/>
                    
                    
                </Stack>
                
            </Fade>
        </Modal>
        </div> )
}