import { createSelector } from "@reduxjs/toolkit";
import type { AppRootState } from "../../libs/types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;
 export const retrievePopularMenu = createSelector(
    selectHomePage, 
    (HomePage) => HomePage.popularMenu);