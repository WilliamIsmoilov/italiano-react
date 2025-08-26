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
                  <Card sx={{ width: 270, height:500, display:'flex', flexDirection:'column', backgroundColor: '#f7f2efff',borderRadius:'35px' }}>
                    
      <AspectRatio minHeight="270px" maxHeight="270px" sx={{display:'flex',  flexDirection:'column', width:'270px'}}>
        <div  className='popular-menu-card' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
          src={ele.imagePath}
          alt="pictures"
          style={{  objectFit: 'cover'}}
        />
        </div>
      </AspectRatio>
      <CardContent orientation="vertical">
        <Typography sx={{ display:'flex', justifyContent:'center', height:'60px', fontWeight:'600', fontSize:'30px'}}>{ele.productName}</Typography>
        <Typography 
        sx={{ display:'flex',
         justifyContent:'center', 
         height:'84px', 
         fontSize:'14px',
         lineHeight:'200%', 
         fontWeight:'400', 
         fontFamily:'Poppins',
         fontStyle: 'Regular',
         textAlign: 'center'
         
         }}>{ele.productDesc}</Typography>

        <Stack sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
          <Typography sx={{ fontWeight: 'lg', width:'79px', height:'38px', fontSize:'25px'}}>$2,900</Typography>
        <Button
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600,  width:'157px', height:'55px', borderRadius:'50px', backgroundColor:'#FF8A00'}}
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