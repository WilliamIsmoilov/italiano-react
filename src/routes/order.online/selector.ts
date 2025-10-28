import { createSelector } from "@reduxjs/toolkit";
import type { AppRootState } from "../../libs/types/screen";


const selectOrderOnline = (state: AppRootState) => state.orderOnline
export const retrieveAllProducts = createSelector(
    selectOrderOnline,
    (OrderOnline) => OrderOnline.allProducts    
)