/* eslint-disable @typescript-eslint/no-unused-vars */
import {   IconButton, Input,  } from "@mui/material";;
import { useState, type ChangeEvent } from "react";
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
import { useNavigate } from "react-router-dom";
import { createSelector, type Dispatch } from '@reduxjs/toolkit';
import { retrieveGetProducts } from "./selector";
import { useSelector} from 'react-redux';
import { serverApi } from '../../libs/config';
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../libs/enum/product.enum";
import type { CartItem } from "../../libs/types/search";



const actionDispatch = (dispatch: Dispatch) => ({
  setGetProducts: (data: Product[]) => dispatch(setGetProducts(data)),
})

const getProductsRetriever = createSelector(
  retrieveGetProducts, (getProducts) => ({getProducts})
)

interface ProductsProps{
    onAdd: (item :CartItem) => void
}

export default  function MealsPage(props: ProductsProps){
  const {onAdd} = props;
const [open, setOpen] = useState(false);
const [searchText, setSearchText] = useState<string>("");
const navigate = useNavigate()


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


const searchProductHandler = () => {
   productSearch.search = searchText;
   setProductSearch({...productSearch});
  };

  const clearSearch = () => {
    setOpen(false)
    productSearch.search = '';
    setSearchText('')
    setProductSearch({...productSearch})
  }

  const paginationHandler = (e: ChangeEvent<unknown>, value: number) => {
    productSearch.page = value;
    setProductSearch({...productSearch})
  }

  const chosenDishHandler = (id: string) => {
    navigate(`/menu/${id}`)
  }


//////////////////////////////////////


    return(
    <div className="meal-frame">
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
                        onChange={(e) =>  setSearchText(e.target.value)}
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
            onClick={() => clearSearch()}
            
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
                        <Button className='button-card'
                        sx={{ backgroundColor: productSearch.productCollection === ProductCollection.DINNER ? ' #311f09' : '#f7f0f09a',
                           color: productSearch.productCollection === ProductCollection.DINNER ? '#fff' : '#413d3dff' }}
                         onClick= {() => searchCollectionHandler(ProductCollection.DINNER)} >
                            Dinner 
                        </Button>
                        
                        <Button className='button-card'
                         sx={{ backgroundColor: productSearch.productCollection === ProductCollection.DESSERT ? ' #311f09' : '#f7f0f09a',
                          color: productSearch.productCollection === ProductCollection.DESSERT ? '#fff' : '#413d3dff'
                         }}
                         onClick={() => searchCollectionHandler(ProductCollection.DESSERT)}>
                            Dessert
                        </Button>
                        <Button className='button-card'
                         sx={{ backgroundColor: productSearch.productCollection === ProductCollection.LUNCH ? ' #311f09' : '#f7f0f09a',
                          color: productSearch.productCollection === ProductCollection.LUNCH ? '#fff' : '#413d3dff'
                          }}
                        onClick={() => searchCollectionHandler(ProductCollection.LUNCH)}>
                            Lunch
                        </Button>
                        <Button className='button-card'
                        sx={{ backgroundColor: productSearch.productCollection === ProductCollection.DRINK ? ' #311f09' : '#f7f0f09a',
                          color: productSearch.productCollection === ProductCollection.DRINK ? '#fff' : '#413d3dff'
                         }}
                        onClick={() => searchCollectionHandler(ProductCollection.DRINK)}> 
                            Drink
                        </Button>
                        <Button className='button-card'
                        sx={{ backgroundColor: productSearch.productCollection === ProductCollection.SALAD ? ' #311f09' : '#f7f0f09a',
                          color: productSearch.productCollection === ProductCollection.SALAD ? '#fff' : '#413d3dff'
                         }}
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
                <CssVarsProvider key={ele._id}>
                  <Card 
                  onClick={() => chosenDishHandler(ele._id)}
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
        onClick={(e) => {
          e.stopPropagation()
          console.log('button pressed')
          onAdd({
            _id: ele._id,
            quantity: 1,
            name: ele.productName,
            price: ele.productPrice,
            image: ele.productImages[0]
          });
          e.stopPropagation()
        }}
        className="order-btn"
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600,  width:'157px', height:'55px', borderRadius:'50px', backgroundColor:'#FF8A00'}}
        >
          Add Busket
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
                       <Pagination 
                        count={getProducts.length !== 0 ? productSearch.page +1 : productSearch.page}
                        page={productSearch.page} 
                        
                        shape="rounded" 
                        onChange={paginationHandler}
                        />
                        
                    </Stack>      

            </Stack>
            
        </Container>
    </div> 

    )
}