/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button, Container, Rating, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';



import type { Member } from "../../libs/types/member";
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { createSelector, type Dispatch } from '@reduxjs/toolkit';
import { retrieveChosenProduct, retrieveRestaurant } from "./selector";
import { useSelector} from 'react-redux';
import { serverApi } from '../../libs/config';
import { setChosenProduct, setRestaurant } from "./slice";
import type { Product } from "../../libs/types/product";
import { useParams } from "react-router-dom";
import ProductService from "../../services/ProductService";
import MemberService from "../../services/MemberService";
import type { CartItem } from "../../libs/types/search";



const actionDispatch = (dispatch: Dispatch) => ({
  setChosenProduct: (data: Product) => dispatch(setChosenProduct(data)),
  setRestaurant: (data: Member) => dispatch(setRestaurant(data))
})

const chosenProductRetriever = createSelector(
  retrieveChosenProduct, (chosenProduct) => ({chosenProduct})
)
const restaurantRetriever = createSelector(
  retrieveRestaurant, (restaurant) => ({restaurant})
)

interface ProductsProps{
    onAdd: (item :CartItem) => void
}


export default function ChosenProduct(props: ProductsProps){
  const {onAdd} = props
 const {productId} = useParams<{productId: string}>();
 const {setRestaurant, setChosenProduct} = actionDispatch(useDispatch());
 const {chosenProduct} = useSelector(chosenProductRetriever)
 const {restaurant} = useSelector(restaurantRetriever)

 useEffect(() => {
  const product = new ProductService();
  product.getProduct(productId!)
  .then(data => setChosenProduct(data))
  .catch(err => console.log(err))

  const member  = new MemberService()
  member.getRestaurant()
  .then(data => setRestaurant(data))
  .catch(err => console.log(err))
 },[])
  return (
    <div className="chosen-product">
      <Box className='title'>Product Detail</Box>
      <Container className='product-container'>
        <Stack className="chosen-product-slider">
          <Swiper
            spaceBetween={10}
            navigation={true}        
            className="swiper-area"
          >
            {chosenProduct?.productImages.map((ele: string, index: number) => {
              const imagePath = `${serverApi}/${ele}`;
              return(
                <SwiperSlide key={index}>
                  <img src={imagePath} className="slider-image" style={{width:'95%', height:'95%'}} />
                </SwiperSlide>
              )
            })

            }
          </Swiper>
        </Stack>
        <Stack className='chosen-product-info'>
          <Box className='info-box'>
            <strong className="product-name">{chosenProduct?.productName}</strong>
            <strong className="resto-name">{restaurant?.memberNick}</strong>
            <strong className="resto-name">{restaurant?.memberPhone}</strong>
            <Box className='rating-box'>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </Box>
            <p  className="product-desc">{chosenProduct?.productDesc ? chosenProduct.productDesc : 'No description'}</p>
            <div className="product-price">
              <span>Price:</span>
              <span>$ {chosenProduct?.productPrice}</span>
            </div>
            <div className="button-box">
              <Button >
                Add To Basket
              </Button>
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  )
}