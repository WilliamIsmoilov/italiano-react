import { Box, Stack, Menu, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import DeleteIcon from '@mui/icons-material/Delete';
import BackspaceIcon from '@mui/icons-material/Backspace';


const list = [
    {productName: 'Bruciola', imagePath: '/images/braciola.jpg' },
    {productName: 'Cuisine', imagePath: '/images/cuisine.jpg'},
    {productName: 'Pasta', imagePath: '/images/pasta.png'}
]

export default function Basket(){
    return(
        <Box className = {'hover-line'}>
            <IconButton className="icon-button"
            aria-label="cart"
            aria-controls={ true ? 'basic-menu' : undefined}
            aria-haspopup="true"
            style={{width:"45px", height:'45px'}}>
                <Badge>
                    <img src={'/icons/shopping.svg'} style={{width:"45px", height:'45px'}}/>
                </Badge>
            </IconButton>
            <Menu 
               open={false}
               id="account-menu"
               transformOrigin={{ horizontal: "right", vertical: "top" }}
               anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
                <Stack className="basket-frame">
                    <Box className= {"all-check-box"}>
                        <Stack flexDirection={'row'}>
                            <div>Cart Products:</div>
                        
                        <DeleteIcon
                           sx={{ml:'5px'}}
                           style={{cursor: 'pointer', color:'green'}}
                           
                           />
                        </Stack>
                    </Box>

                    <Box className={'orders-main-wrapper'}>
                        <Box className={'orders-wrapper'}>
                            {list.length !== 0 ? (
                                list.map((ele, index) => {
                                    return( 
                                    <Box className={'basket-info-box'} key={index}>
                                        <div className="cancel-btn">
                                            <BackspaceIcon style={{color: 'red'}} />
                                        </div>
                                        <img src={ele.imagePath} alt="orders" className="product-img"/>
                                        <span className="product-name">{ele.productName}</span>
                                        <p className={"product-price"}> <img src="/icons/money.svg" style={{width: '30px', height:"30px"}}/> 70</p>
                                        <Box sx={{minWidth: 120}}>
                                            <div className="col-2">
                                                <button className="remove" type='button' > <img src="/icons/minus.svg" alt="plus" style={{width: '25px', height:"25px"}}/></button>
                                                <button className="add"> <img src="/icons/plus.svg" alt="plus" style={{width: '25px', height:"25px"}} /></button>
                                            </div>
                                        </Box>
                                    </Box>    
                                    )
                                })
                            ):(
                                <Box>
                                    Cart is empty!
                                </Box>
                            )} 
                        </Box>
                    </Box>
                    {list.length !== 0 ? (<Box className={"basket-order"}>
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