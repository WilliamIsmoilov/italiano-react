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



const actionDispatch = (dispatch: Dispatch) => ({
  setChosenProduct: (data: Product[]) => dispatch(setChosenProduct(data)),
  setRestaurant: (data: Member[]) => dispatch(setRestaurant(data))
})

const chosenProductRetriever = createSelector(
  retrieveChosenProduct, (chosenProduct) => ({chosenProduct})
)
const restaurantRetriever = createSelector(
  retrieveRestaurant, (restaurant) => ({restaurant})
)



const list = [
  {productName: 'Bruciola', imagePath: '/images/orderpasta1.png', productDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. '},
]

export default function ChosenProduct(){
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
            {list.map((ele) => {
              return(
                <SwiperSlide>
                  <img src={ele.imagePath} className="slider-image" style={{width:'95%', height:'95%'}} />
                </SwiperSlide>
              )
            })

            }
          </Swiper>
        </Stack>
        <Stack className='chosen-product-info'>
          <Box className='info-box'>
            <strong className="product-name">Braciola</strong>
            <strong className="resto-name">Italiano</strong>
            <strong className="resto-name">+82 10 3913 4666</strong>
            <Box className='rating-box'>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </Box>
            <p  className="product-desc"> edwgbucyhvvvvvvvvvvebfcuebcsvcuwercvbewvcewucviewbv</p>
            <div className="product-price">
              <span>Price:</span>
              <span>$ 2900</span>
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