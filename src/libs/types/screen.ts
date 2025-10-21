/** REACT APP STORE **/

import type { Product } from "./product";

export interface AppRootState{
    homePage: HomePageState
}

export interface HomePageState{
    popularMenu: Product[];
}