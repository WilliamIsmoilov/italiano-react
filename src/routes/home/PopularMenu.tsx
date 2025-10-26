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


import { useSelector} from 'react-redux';
import { createSelector } from 'reselect';
import { retrievePopularMenu } from './selector';
import { serverApi } from '../../libs/config';
import type { Product } from '../../libs/types/product';



const popularMenuRetriever = createSelector(
    retrievePopularMenu, (popularMenu) => ({popularMenu}))




export default function Popularmenu() {
  const {popularMenu} = useSelector(popularMenuRetriever)
  console.log('products:', popularMenu)
    return ( <div className="popular-dishes-frame">

      <Container>
        <Stack className='popular-section'>
          <Box className="category-title">Our popular menu</Box>

          <Stack className="list-category-section" flexDirection={"row"}>
                    <Stack className="product-category" >
                    <div className="category-main" >
                        <Button className='button-card-all'>
                            All Category 
                        </Button>
                        
                        <Button className='button-card'>
                            Dessert
                        </Button>
                        <Button className='button-card'>
                            Lunch
                        </Button>
                        <Button className='button-card'> 
                            Drink
                        </Button>
                        <Button className='button-card'>
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
          Order now
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