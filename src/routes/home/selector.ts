import { createSelector } from "reselect";
import type { AppRootState } from "../../libs/types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;
 export const retrievePopularMenu = createSelector(
    selectHomePage, 
    (HomePage) => HomePage.popularMenu);