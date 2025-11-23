/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice} from '@reduxjs/toolkit'
import type { ReservationPageState } from '../../libs/types/screen'


const initialState: ReservationPageState = {
    getReservation: [],
    member: null,
    reservation: []
}

const reservationPageSlice = createSlice({
    name: 'reservationPage', 
    initialState,
    reducers: {
        setGetReservation: (state, action) => {
            state.getReservation = action.payload
        },
    }
})

export const{setGetReservation } = reservationPageSlice.actions

const ReservationPageReducer = reservationPageSlice.reducer;
export default ReservationPageReducer;