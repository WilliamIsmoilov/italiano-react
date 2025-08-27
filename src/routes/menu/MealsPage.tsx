import {   IconButton, Input,  } from "@mui/material";;
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";


import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Container from '@mui/material/Container';
import { CssVarsProvider } from '@mui/joy/styles';
import { Box,  Stack  } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import AddCircleIcon from '@mui/icons-material/AddCircle';


const list = [
  {productName: 'Bruciola', imagePath: '/images/braciola.jpg', productDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. '},
  {productName: 'Cuisine', imagePath: '/images/cuisine.jpg',  productDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. '},
  {productName: 'Pasta', imagePath: '/images/pasta.png', productDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ' },
  {productName: 'Pizza', imagePath: '/images/pizza.jpeg', productDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ' },
  {productName: 'Pvristone', imagePath: '/images/pvristone.jpg', productDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ' },
    {productName: 'Ricotta', imagePath: '/images/ricotta.jpg', productDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ' },
]

export default  function MealsPage(){
    const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const searchProductHandler = () => {
    console.log("Searching:", searchText);
  };
    return(<div className="meal-frame">
        <Container>
            <Stack className="meal-section">
                    <Stack className="meal-front-section" flexDirection={'row'}>
                        <Stack className="meal-title">Menu</Stack>
                        {!open ? (
                            <IconButton
                               onClick={() => setOpen(true)}
                               sx={{
                                color:'black',
                                width:'50px',
                                height:'50px',
                                marginTop:'180px'
                            }}
                               >
                                <SearchIcon
                                sx={{ fontSize:'50px'}}
                                />
                               </IconButton>
                        ): (
                    <Input
                        autoFocus
                        className="input-box"
                        placeholder="Type here"
                        disableUnderline
                        value={searchText}
                         onChange={(e) => setSearchText(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && searchProductHandler()}
                        sx={{
                        border: "1px solid #ff8a00",
                        borderRadius: "20px",
                        paddingLeft: "12px",
                        color: "black",
                        height: "40px",
                        width: "250px",
                         }}
                         endAdornment={
                            <>
                         <Button
              size="sm"
              sx={{
                borderRadius: "20px",
                backgroundColor: "black",
                color: "white",
                marginLeft: "-15px",
                height: "40px",
              }}
              onClick={searchProductHandler}
            >
              Search
            </Button>
            <IconButton
            onClick={() => setOpen(false)}
            sx={{color:"black", ml:1}}
            >
                <CloseIcon/>
            </IconButton>
            </>

          }
        />
      )}
    </Stack>
               

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
                  <Card sx={{ 
                    width: 270,
                    height:500, 
                    display:'flex', 
                    flexDirection:'column', 
                    backgroundColor: '#e7eaf1ff',
                    borderRadius:'35px',
                    transition:'0.3s',
                    '&:hover': {
                        backgroundColor: '#ff8a00',
                        '.card-text, .card-price': {
                            color: '#fff',
                        },
                     '.order-btn': {
                         display: 'none', 
                        },
                      '.hover-icon-btn': {
                          display: 'flex', 
                        },     
                    }
                     
                    }}>
                    
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
        <Typography 
        className='card-text'
        sx={{
            display:'flex', 
            justifyContent:'center', 
            height:'60px', 
            fontWeight:'600', 
            fontSize:'30px'
            }}>{ele.productName}</Typography>
        <Typography 
        className='card-text'
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
          <Typography
          className='card-price'
           sx={{ 
            fontWeight: 'lg', 
            width:'79px', 
            height:'38px', 
            fontSize:'25px'
            }}>$2,900</Typography>
        <Button
        className="order-btn"
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600,  width:'157px', height:'55px', borderRadius:'50px', backgroundColor:'#FF8A00'}}
        >
          Order now
        </Button>
        <Button
                className="hover-icon-btn"
                size="md"
                sx={{ display:'none', ml: 'auto', alignSelf: 'center', fontWeight: 600, width:'55px', height:'55px', borderRadius:'50%', backgroundColor:'#fff', color:'#FF8A00' }}
              >
                <AddCircleIcon style={{width:'55px', height:'55px'}}/>
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
                       <Pagination  count={4} variant="outlined" shape="rounded" />
                    </Stack>      

            </Stack>
            
        </Container>
    </div> 

    )
}