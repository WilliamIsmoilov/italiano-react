import {createSlice} from '@reduxjs/toolkit'
import type { HomePageState } from '../../libs/types/screen'

const initialState: HomePageState ={
    popularMenu: []
}

const homePageSlice = createSlice({
    name : 'homePage',
    initialState,
    reducers: {
        setPopularMenu: (state, action) => {
            state.popularMenu = action.payload
        }
    }
})

export const{setPopularMenu} = homePageSlice.actions