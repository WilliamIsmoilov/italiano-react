import {createSlice} from '@reduxjs/toolkit'
import type { OrderOnlineState } from '../../libs/types/screen'


const initialState: OrderOnlineState = {
    allProducts: []
}


const orderOnlineSlice = createSlice({
    name: 'orderOnline',
    initialState,
    reducers: {
        setAllProducts: (state, action) => {
            state.allProducts = action.payload
        }
    }
})

export const{setAllProducts} = orderOnlineSlice.actions;

const OrderOnlineReducer = orderOnlineSlice.reducer;
export default OrderOnlineReducer

