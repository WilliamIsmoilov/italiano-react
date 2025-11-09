/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Stack, Menu, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import DeleteIcon from '@mui/icons-material/Delete';
import BackspaceIcon from '@mui/icons-material/Backspace';
import React from "react";
import type { CartItem } from "../../libs/types/search";
import { serverApi } from "../../libs/config";


interface BasketProps{
    cartItems: CartItem[];
}

export default function Basket(props: BasketProps){
    const {cartItems} = props;

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
/////////////////// handlers ////////////////////////////////
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)        
    }
    return(
        <Box className = {'hover-line'} >
            <IconButton
             className="icon-button"
             aria-label="cart"
            // eslint-disable-next-line no-constant-condition
            aria-controls={ open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            style={{width:"45px", height:'45px'}}
            onClick={handleClick}>
                <Badge 
                  badgeContent={
                    <Box 
                    sx={{                        
                        width: 22,
                        height: 22,
                        borderRadius: '50%',
                        backgroundColor: '#22c55e',
                        color: '#ffff',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: 'center'
                    }}>
                        {cartItems.length}
                    </Box>
                  }>
                    <img src={'/images/shopping.png'} style={{width:"45px", height:'45px'}}/>
                </Badge>
            </IconButton>
            <Menu 
               anchorEl={anchorEl}
               open={open}
               onClose={handleClose}
               id="account-menu"
               PaperProps={{
                elevation: 3,
                sx:{
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1
                    },
                    '&: before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0
                    }
                }
               }}
               transformOrigin={{ horizontal: "right", vertical: "top" }}
               anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
                <Stack className="basket-frame">
                    <Box className= {"all-check-box"}>
                        <Stack flexDirection={'row'}>
                        {cartItems.length === 0 ? (
                            <div>Cart is empty</div>
                        ):
                          <>
                          <div>Cart Products:</div>
                          <DeleteIcon
                                    sx={{ ml: '5px' }}
                                    style={{ cursor: 'pointer', color: 'green' }} /></>
                            }
                            </Stack>
                    </Box>

                    <Box className={'orders-main-wrapper'}>
                        <Box className={'orders-wrapper'}>
                               {cartItems.map((item: CartItem ) => {
                                    const imagePath = `${serverApi}/${item.image}`
                                    return( 
                                    <Box className={'basket-info-box'} key={item._id}>
                                        <div className="cancel-btn">
                                            <BackspaceIcon style={{color: 'red'}} />
                                        </div>
                                        <img src={imagePath} alt="orders" className="product-img"/>
                                        <span className="product-name">{item.name}</span>
                                        <p className={"product-price"}> <img src="/icons/money.svg" style={{width: '30px', height:"30px"}}/> {item.price}</p>
                                        <Box sx={{minWidth: 120}}>
                                            <div className="col-2">
                                                <button className="remove" type='button' > <img src="/icons/minus.svg" alt="plus" style={{width: '25px', height:"25px"}}/></button>
                                                <button className="add"> <img src="/icons/plus.svg" alt="plus" style={{width: '25px', height:"25px"}} /></button>
                                            </div>
                                        </Box>
                                    </Box>    
                                    )
                               })}
                            
                        </Box>
                    </Box>
                    {cartItems.length !== 0 ? (<Box className={"basket-order"}>
                    <span className={"price"}>Total: $ 75    ( 70 + 5 )</span>
                    <Button 
                    className="order-btn"
                      >
                      Order
                        </Button>
          </Box>) : ( '' )}
                </Stack>
            </Menu>     
        </Box>
    )
}