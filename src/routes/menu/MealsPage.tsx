/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { setGetProducts } from './slice';
import type { Product, ProductInquery } from "../../libs/types/product";
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { createSelector, type Dispatch } from '@reduxjs/toolkit';
import { retrieveGetProducts } from "./selector";
import { useSelector} from 'react-redux';
import { serverApi } from '../../libs/config';
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../libs/enum/product.enum";



const actionDispatch = (dispatch: Dispatch) => ({
  setGetProducts: (data: Product[]) => dispatch(setGetProducts(data)),
})

const getProductsRetriever = createSelector(
  retrieveGetProducts, (getProducts) => ({getProducts})
)



export default  function MealsPage(){
const {setGetProducts} = actionDispatch(useDispatch()) 
const [productSearch, setProductSearch] = useState<ProductInquery>({
  page: 1,
  limit: 6,
  order: 'createdAt',
  productCollection: ProductCollection.LUNCH,
  search: ''

})
useEffect(() => {
  const product = new ProductService();
  product.getProducts(
    productSearch
  ).then( data => {
    setGetProducts(data)
  }).catch( err => console.log(err))
}, [productSearch]);

const {getProducts} = useSelector(getProductsRetriever)

/** handlers**//////////////////////////////////////////////////
const searchCollectionHandler = (collection: ProductCollection) => {
  productSearch.page = 1;
  productSearch.productCollection = collection;
  setProductSearch({...productSearch})
}


//////////////////////////////////////
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
                        <Button className='button-card-all'
                         onClick= {() => searchCollectionHandler(ProductCollection.DINNER)} >
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
            {getProducts.length !== 0 ? ( 
              getProducts.map((ele: Product) => {
                const imagePath = `${serverApi}/${ele.productImages[0]}`
              return (
                <CssVarsProvider key={ele._id} >
                  <Card 
                     sx={{ 
                    width: 270,
                    height:500, 
                    display:'flex', 
                    flexDirection:'column', 
                    backgroundColor: '#f7f0f09a',
                    borderRadius:'35px',
                    transition:'0.3s',
                    '&:hover': {
                        backgroundColor: '#ff8a00',
                        '.card-text, .card-price': {
                            color: '#fff',
                        },
                     '.order-btn': {
                         backgroundColor:'white',
                         color: '#FF8A00'
                        },     
                    }
                     
                    }}>
                    
      <AspectRatio minHeight="270px" maxHeight="270px" sx={{display:'flex',  flexDirection:'column', width:'270px', borderRadius: '50%'}}>
        <div  className='popular-menu-card' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
          src={imagePath}
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
            }}>$ {ele.productPrice}</Typography>
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