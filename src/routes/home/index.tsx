/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import BrandPage from './BrandPage';
import BrandPages from './BrandPages';
import PopularMenu from './PopularMenu';
import "../../css/home.css";
import Reservation from './Reservation';
import OpenDays from './OpenDay';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import type { Dispatch } from '@reduxjs/toolkit';
import { setPopularMenu } from './slice';
import type { Product } from '../../libs/types/product';
import ProductService from '../../services/ProductService';


/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
    setPopularMenu: (data: Product[]) => dispatch(setPopularMenu(data))
})


const HomePage = () => {
    //Select: Store => DATA
    const {setPopularMenu} = actionDispatch(useDispatch())

    useEffect(() => {
        //backend server data request => DATA
        const product = new ProductService();
        product.getProducts({
            page: 1,
            limit: 6,
            order: 'productPrice',
        }).then(data => {
            setPopularMenu(data)
        }).catch(err => console.log(err))
        //slice Data => Store
    }, []);

    return <div className="homepage">
        <BrandPage/>
        <BrandPages/>
        <PopularMenu/>
        <Reservation/>
        <OpenDays/>
    </div>
    
}
 
export default HomePage;