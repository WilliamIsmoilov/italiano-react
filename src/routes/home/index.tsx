/* eslint-disable react-hooks/rules-of-hooks */
import BrandPage from './BrandPage';
import BrandPages from './BrandPages';
import PopularMenu from './PopularMenu';
import "../../css/home.css";
import Reservation from './Reservation';
import OpenDays from './OpenDay';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import type { Dispatch } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { setPopularMenu } from './slice';
import { retrievePopularMenu } from './selector';
import { data } from 'react-router';
import type { Product } from '../../libs/types/product';

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
    setPopularMenu: (data: Product[]) => dispatch(setPopularMenu(data))
})

const popularMenuRetriever = createSelector(retrievePopularMenu, (popularMenu) => ({popularMenu}))
const {popularMenu} = useSelector(popularMenuRetriever)

const HomePage = () => {
    //Select: Store => DATA
    const {setPopularMenu} = actionDispatch(useDispatch())
    const {popularMenu} = useSelector(popularMenuRetriever)

    useEffect(() => {
        //backend server data request => DATA

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