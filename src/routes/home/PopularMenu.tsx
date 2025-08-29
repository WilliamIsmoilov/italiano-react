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




const list = [
  {productName: 'Bruciola', imagePath: '/images/braciola.jpg', productDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. '},
  {productName: 'Cuisine', imagePath: '/images/cuisine.jpg',  productDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. '},
  {productName: 'Pasta', imagePath: '/images/pasta.png', productDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ' },
  {productName: 'Pizza', imagePath: '/images/pizza.jpeg', productDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ' },
  {productName: 'Pvristone', imagePath: '/images/pvristone.jpg', productDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ' },
    {productName: 'Ricotta', imagePath: '/images/ricotta.jpg', productDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ' },
]


export default function Popularmenu() {
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
            {list.length !== 0 ? ( 
              list.map((ele, index) => {
              return (
                <CssVarsProvider key={index}>

                  <Card className='card-section' >
                 
      <AspectRatio minHeight="270px" maxHeight="270px" className='aspectRatio' >
        <div  className='popular-menu-card' >
          <img
          src={ele.imagePath}
          alt="pictures"
          style={{  objectFit: 'cover', borderRadius:'35px'}}
        />
        </div>
      </AspectRatio>
      <CardContent orientation="vertical">
        <Typography className='product-name' >{ele.productName}</Typography>
        <Typography 
        className='product-desc' >{ele.productDesc}</Typography>
        <Stack  className='bottom-card-comp'>
          <Typography className='price' >$2,900</Typography>
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