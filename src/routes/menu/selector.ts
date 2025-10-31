import { createSelector } from "reselect";
import type { AppRootState } from "../../libs/types/screen";

const selectMenuPage = (state: AppRootState) => state.menuPage;
export const retrieveGetProducts = createSelector(
    selectMenuPage,
    (MenuPage) => MenuPage.getProducts
)

export const retrieveRestaurant = createSelector(
    selectMenuPage,
    (MenuPage) => MenuPage.restaurant
)

export const retrieveChosenProduct = createSelector(
    selectMenuPage,
    (MenuPage) => MenuPage.chosenProduct
)