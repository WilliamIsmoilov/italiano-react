/** REACT APP STORE **/

import type { Member } from "./member";
import type { Product } from "./product";

export interface AppRootState{
    homePage: HomePageState,
    orderOnline: OrderOnlineState,
    menuPage: MenuPageState
}

/**  home page screen**/
export interface HomePageState{
    popularMenu: Product[];
}

/**  products page screen **/
export interface OrderOnlineState{
    restaurant: Member | null;
    allProducts: Product[]
}

/**  Menu Page**/
export interface MenuPageState{
    restaurant: Member | null;
    chosenProduct: Product | null;
    getProducts: Product[]
}