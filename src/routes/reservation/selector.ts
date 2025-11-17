import { createSelector } from "@reduxjs/toolkit";
import type { AppRootState } from "../../libs/types/screen";

 

 const  selectReservation = (state: AppRootState) => state.reservationPage
 export const retrieveGetRerservation = createSelector(
    selectReservation,
    (ReservationPage) => ReservationPage.getReservation
 )