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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import { useDispatch, useSelector} from 'react-redux';
import { createSelector } from 'reselect';
import { retrievePopularMenu } from './selector';
import { serverApi } from '../../libs/config';
import type { Product, ProductInquery } from '../../libs/types/product';
import { setPopularMenu } from './slice';
import type { Dispatch } from '@reduxjs/toolkit';
import { useState } from 'react';
import { ProductCollection } from '../../libs/enum/product.enum';
import ProductService from '../../services/ProductService';
import { useEffect } from 'react';



const popularMenuRetriever = createSelector(
    retrievePopularMenu, (popularMenu) => ({popularMenu}))

    const actionDispatch = (dispatch: Dispatch) => ({
        setPopularMenu: (data: Product[]) => dispatch(setPopularMenu(data))
    })


export default function Popularmenu() {
  const {setPopularMenu} = actionDispatch(useDispatch())
  const [productSearch, setProductSearch] = useState<ProductInquery>({
      page: 1,
      limit: 6,
      order: 'createdAt',
      productCollection: ProductCollection.DINNER,
      search: ''
    })

    useEffect(() => {
      const popularMenu = new ProductService();
      popularMenu.getProducts(
        productSearch
      ).then(data => {
        setPopularMenu(data)
      }).catch(err => console.log(err))
    }, [productSearch])

    const {popularMenu} = useSelector(popularMenuRetriever);


    //**    Handler **//////////////////////////

    const searchCollectionHandler = (collection: ProductCollection) => {
      productSearch.page = 1;
      productSearch.productCollection = collection;
      setProductSearch({...productSearch})
    }
  
    return ( <div className="popular-dishes-frame">

      <Container>
        <Stack className='popular-section'>
          <Box className="category-title">Our popular menu</Box>

          <Stack className="list-category-section" flexDirection={"row"}>
                    <Stack className="product-category" >
                    <div className="category-main" >
                        <Button className='button-card-all'
                        onClick={() => searchCollectionHandler(ProductCollection.DINNER)}>
                            Dinner
                        </Button>
                        
                        <Button className='button-card'
                        onClick={() => searchCollectionHandler(ProductCollection.DESSERT)}>
                            Dessert
                        </Button>
                        <Button className='button-card'
                        onClick={() => searchCollectionHandler(ProductCollection.LUNCH)}>
                            Lunch
                        </Button>
                        <Button className='button-card'
                        onClick={() => searchCollectionHandler(ProductCollection.DRINK)}> 
                            Drink
                        </Button>
                        <Button className='button-card'
                        onClick={() => searchCollectionHandler(ProductCollection.SALAD)}>
                            Salad
                        </Button>
                    </div>
                    </Stack>
          </Stack>

          <Stack className='cards-frame'>
            {popularMenu.length !== 0 ? ( 
              popularMenu.map((ele: Product) => {
                const imagePath = `${serverApi}/${ele.productImages[0]}`
              return (
                <CssVarsProvider key={ele._id}>
                  <Card className='card-section' >
                 
      <AspectRatio minHeight="270px" maxHeight="270px" className='aspectRatio' >
        <div  className='popular-menu-card' >
          <img
          src={imagePath}
          alt="pictures"
          style={{  objectFit: 'cover', borderRadius:'35px'}}
        />
        </div>
      </AspectRatio>
      <CardContent orientation="vertical">
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
          Order now<ShoppingCartIcon/>
        </Button>
        </Stack>
        
      </CardContent>  
    </Card>
                </CssVarsProvider>
              )
            })): (
              <Box className='no-data'>
                Meals are not available!
              </Box>
            )}
           
          </Stack>
          <Stack className='pagination-section'>
             <Pagination count={4} variant="outlined" shape="rounded" />
          </Stack>
        </Stack>
      </Container>
       
        
    </div> );
}