import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Container from '@mui/material/Container';
import { CssVarsProvider } from '@mui/joy/styles';
import { Box,  Stack  } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';




import { useSelector} from 'react-redux';
import { createSelector } from 'reselect';
import { retrieveAllProducts } from './selector';
import { serverApi } from '../../libs/config';
import type { Product } from '../../libs/types/product';

const allProductsRetriever = createSelector(
    retrieveAllProducts, (allProducts) => ({allProducts})
)


export default function OrderOnline() {
 const {allProducts} = useSelector(allProductsRetriever)


    return ( <div className="order-frame">
        <Container>
            <Stack className='order-section'>
                <Box className='category-title'> Menu </Box>
                <Stack className="list-btns" flexDirection={'row'}>
                    <div className="sort-btns">
                    <button
                       type='button'
                       className='btn-main'
                       >All Catagory</button>

                       <button
                       type='button'
                       className='btn-focus'
                       >Dinner</button>

                       <button
                       type='button'
                       className='btn-main'
                       >Lunch</button>

                       <button
                       type='button'
                       className='btn-main'
                       >Dessert</button>

                       <button
                       type='button'
                       className='btn-main'
                       >Drink</button>
 
                       </div>
                </Stack>
                <Stack className="products-section">
                    <Stack className="cards-frame">
                        {allProducts.length !== 0 ? (
                            allProducts.map((ele: Product) => {
                                const imagePath = `${serverApi}/${ele.productImages[0]}`
                                return (
                                    <CssVarsProvider key={ele._id} >
                                        <Card   className='card-section'
                                        sx={{
                                            transition:'0.3s',
                                            '&:hover': {
                                               cursor:'pointer'
                                            }
                                        }}>
                                            <AspectRatio minHeight='174px'  maxHeight='174px' className='aspectRatio'>
                                                <div className='menu-card'>
                                                    <img
                                                      src={imagePath}
                                                      alt='meals'
                                                      style={{objectFit: 'cover', borderRadius: '35px'}}
                                                      />
                                                </div>
                                            </AspectRatio>
                                            <CardContent orientation='vertical'>
                                                 <div style={{display:'flex', justifyContent: 'center'}}>⭐⭐⭐⭐</div>
                                                 <Typography className='product-name' >{ele.productName}</Typography>
                                                 <Typography 
                                                  className='product-desc' >{ele.productDesc}</Typography>
                                                 <Stack  className='bottom-card-comp'>
                                                 <Typography className='price' >$ {ele.productPrice}</Typography>
                                                 <Button
                                                   className='order-btn'
                                                   size="md"
                                                   color="primary"
                                                   aria-label="Explore Bahamas Islands"
                                                    >
                                                        Order now 
                                                      </Button>
                                                      </Stack>
                                            </CardContent>

                                        </Card>
                                    </CssVarsProvider>

                                )
                            })

                        ): ( 
                        <Box className='no-data'>
                            Meals are not available!
                        </Box>
                        )}  
                        <Stack className='pagination-section'>
                            <Pagination count={4} variant="outlined" shape="rounded" />
                        </Stack>
                    </Stack>



                    <Stack className='price-order'>
                        <button 
                        type='button'
                        className='title-list'>
                            Order list
                        </button>
                        <Stack className='order-product'>
                            <Stack sx={{height:'650px'}}>
                            <Box flexDirection={'row'} sx={{display:'flex', alignItems: 'center', justifyContent:'space-between'}}>
                                <Typography className='order-title'> Spagetti</Typography>
                            <div className='cancel-btn'>
                                <DeleteOutlineIcon sx={{color:"red"}}/>
                            </div>
                            </Box>
                            
                            <Box flexDirection={'row'}  sx={{display:'flex', alignItems: 'center', justifyContent:'space-between', gap:'30px'}}>
                                <div className='cal-1'>
                                    <button type='button' className='btn-cal' style={{color:'red'}}><RemoveOutlinedIcon/></button> { '2'}
                                    <button type='button' className='btn-cal'  style={{color:'green'}}><AddOutlinedIcon/></button>
                                </div>
                                <Typography className='order-price2'>
                                    $24.1
                                </Typography>
                            </Box>
                            </Stack>
                        </Stack>

                        <Stack className='calculate-product'>
                            <Box className='calculate-section'>
                                <CalculateOutlinedIcon sx={{color:'#ff8a00', height:'40px', width:'40px'}}/> Calculator
                            </Box>

                            <Box flexDirection={'row'} sx={{display:'flex', alignItems: 'center', justifyContent:'space-between', gap:'30px', marginTop:'30px'}}>
                                <Typography className='fee-section'> Subtotal</Typography>
                                 <Typography className='fee-section' sx={{color:'#ff8a00'}}>  $75.6</Typography>
                            </Box>

                            <Box flexDirection={'row'} sx={{display:'flex', alignItems: 'center', justifyContent:'space-between', gap:'30px', marginTop:'30px'}}>
                                <Typography className='fee-section'> Delivery fee</Typography>
                                 <Typography className='fee-section' sx={{color:'#ff8a00'}}>  $5.0</Typography>
                            </Box>

                            <Box flexDirection={'row'} sx={{display:'flex', alignItems: 'center', justifyContent:'space-between', gap:'30px', marginTop:'30px'}}>
                                <Typography className='fee-section'> Total</Typography>
                                 <Typography className='fee-section' sx={{color:'#ff8a00'}}>$80.6</Typography>
                            </Box>
                        </Stack>

                    </Stack>

                </Stack>



            </Stack>
            
        </Container>


    </div> )
}