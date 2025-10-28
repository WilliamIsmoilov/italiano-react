/** REACT APP STORE **/

import type { Product } from "./product";

export interface AppRootState{
    homePage: HomePageState,
    orderOnline: OrderOnlineState
}

/**  home page screen**/
export interface HomePageState{
    popularMenu: Product[];
}

/**  products page screen **/
export interface OrderOnlineState{
    allProducts: Product[]
}