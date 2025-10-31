/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice} from '@reduxjs/toolkit';
import type { MenuPageState } from '../../libs/types/screen'

const initialState: MenuPageState = {
    restaurant: null,
    chosenProduct: null,
    getProducts: []
}

const menuPageSlice = createSlice({
    name: 'menuPage',
    initialState,
    reducers: {
        setRestaurant: (state, action) => {
            state.restaurant = action.payload
        },
        setGetProducts: (state, action) => {
            state.getProducts = action.payload
        },
        setChosenProduct: (state, action) => {
            state.chosenProduct = action.payload
        }
    }    
})

export const{setRestaurant, setGetProducts, setChosenProduct} = menuPageSlice.actions;

const MenuPageReducer = menuPageSlice.reducer;
export default MenuPageReducer;
