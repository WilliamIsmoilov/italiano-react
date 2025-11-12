/* eslint-disable @typescript-eslint/no-unused-vars */
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
import type { Product, ProductInquery } from "../../libs/types/product";
import { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import { type Dispatch } from '@reduxjs/toolkit';
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../libs/enum/product.enum";
import { setAllProducts } from './slice';
import type { CartItem } from '../../libs/types/search';

const actionDispatch = (dispatch: Dispatch) => ({
    setAllProducts: (data: Product[]) => dispatch(setAllProducts(data))
})


const allProductsRetriever = createSelector(
    retrieveAllProducts, (allProducts) => ({allProducts})
)

interface OrderOnlineProps{
    onAdd: (item: CartItem) => void
    cartItems: CartItem[];
    onRemove: (item: CartItem) => void;
    onDelete: (item: CartItem) => void;
    deleteAll: () => void;
}

export default function OrderOnline(props: OrderOnlineProps) {
    const {onAdd, cartItems, onRemove, onDelete, deleteAll} = props;
    const {setAllProducts} = actionDispatch(useDispatch())
    const [productSearch, setProductSearch] = useState<ProductInquery>({
        page: 1,
        limit: 9,
        order: '-productPrice',
        productCollection: ProductCollection.DINNER,
    })

    useEffect(() => {
        const product = new ProductService();
        product.getProducts(
            productSearch
        ).then( data => {
            setAllProducts(data)
        }).catch( err => console.log(err))
    }, [productSearch])

 const {allProducts} = useSelector(allProductsRetriever)

 ///////// HANDLER ///////////
 const searchCollectionHandler = (collection: ProductCollection)  => {
    productSearch.page =1;
    productSearch.productCollection = collection;
    setProductSearch({...productSearch})
 }

 const paginationHandler = (e: React.ChangeEvent<unknown>, value: number) => {
    productSearch.page = value;
    setProductSearch({...productSearch})
 }

///////////////////////////////////////////////////////
    return ( <div className="order-frame">
        <Container>
            <Stack className='order-section'>
                <Box className='category-title'> Menu </Box>
                <Stack className="list-btns" flexDirection={'row'}>
                    <div className="sort-btns">
                    <button
                       type='button'
                       className='btn-main'
                       onClick={() => searchCollectionHandler(ProductCollection.DINNER)}
                       style={{backgroundColor: productSearch.productCollection === ProductCollection.DINNER ? '#000000' : '#f7f0f09a',
                        color: productSearch.productCollection === ProductCollection.DINNER ? '#ffffff' : '#000000'
                       }}
                       >Dinner</button>

                       <button
                       type='button'
                       className='btn-main'
                       onClick={() => searchCollectionHandler(ProductCollection.LUNCH)}
                       style={{backgroundColor: productSearch.productCollection === ProductCollection.LUNCH ? '#000000' : '#f7f0f09a',
                        color: productSearch.productCollection === ProductCollection.LUNCH ? '#ffffff' : '#000000'
                       }}
                       >Lunch</button>

                       <button
                       type='button'
                       className='btn-main'
                       onClick={() => searchCollectionHandler(ProductCollection.SALAD)}
                       style={{backgroundColor: productSearch.productCollection === ProductCollection.SALAD ? '#000000' : '#f7f0f09a',
                        color: productSearch.productCollection === ProductCollection.SALAD ? '#ffffff' : '#000000'
                       }}
                       >Salad</button>

                       <button
                       type='button'
                       className='btn-main'
                       onClick={() => searchCollectionHandler(ProductCollection.DESSERT)}
                       style={{backgroundColor: productSearch.productCollection === ProductCollection.DESSERT ? '#000000' : '#f7f0f09a',
                        color: productSearch.productCollection === ProductCollection.DESSERT ? '#ffffff' : '#000000'
                       }}
                       >Dessert</button>

                       <button
                       type='button'
                       className='btn-main'
                       onClick={() => searchCollectionHandler(ProductCollection.DRINK)}
                       style={{backgroundColor: productSearch.productCollection === ProductCollection.DRINK ? '#000000' : '#f7f0f09a',
                        color: productSearch.productCollection === ProductCollection.DRINK ? '#ffffff' : '#000000'
                       }}
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
                                                   onClick={(e) => {
                                                    onAdd({
                                                        _id: ele._id,
                                                        quantity: 1,
                                                        name: ele.productName,
                                                        price: ele.productPrice,
                                                        image: ele.productImages[0]

                                                    })
                                                   }}
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
                            <Pagination 
                            count={allProducts.length !== 0 ? productSearch.page + 1 : productSearch.page}
                            page={productSearch.page}
                            shape="rounded" 
                            onChange={paginationHandler}/>
                        </Stack>
                    </Stack>
                    



                    <Stack className='price-order'>
                        <button 
                        type='button'
                        className='title-list'>
                            Order list
                        </button>
                        <Stack className='order-product'>
                            {cartItems.length !== 0 ? (
                                cartItems.map((item: CartItem) => {
                                return(
                                    <Stack sx={{height:'685px'}}>
                            <Box flexDirection={'row'} sx={{display:'flex', alignItems: 'center', justifyContent:'space-between'}}>
                                <Typography className='order-title'>{item.name}</Typography>
                            <div className='cancel-btn'>
                                <DeleteOutlineIcon sx={{color:"red"}} onClick={() => onDelete(item)}/>
                            </div>
                            </Box>
                            
                            <Box flexDirection={'row'}  sx={{display:'flex', alignItems: 'center', justifyContent:'space-between', gap:'30px'}}>
                                <div className='cal-1'>
                                    <button type='button' onClick={() => onRemove(item)} className='btn-cal' style={{color:'red'}}><RemoveOutlinedIcon/></button> { item.quantity}
                                    <button type='button' onClick={() => onAdd(item)} className='btn-cal'  style={{color:'green'}}><AddOutlinedIcon/></button>
                                </div>
                                <Typography className='order-price2'>
                                    $ {item.price * item.quantity}
                                </Typography>
                            </Box>
                            </Stack>
                                )
                            })
                            ): (
                                <Box>
                                    <h2>Not chosed yet</h2>
                                </Box>
                            )}
                            
                            
                        </Stack>

                        <Stack className='calculate-product'>
                            <Box className='calculate-section'>
                                <CalculateOutlinedIcon sx={{color:'#ff8a00', height:'40px', width:'40px'}}/> Calculator
                            </Box>

                            <Box flexDirection={'row'} sx={{display:'flex', alignItems: 'center', justifyContent:'space-between', gap:'30px', marginTop:'30px'}}>
                                <Typography className='fee-section'> Subtotal</Typography>
                                 <Typography className='fee-section' sx={{color:'#ff8a00'}}>  ${}</Typography>
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