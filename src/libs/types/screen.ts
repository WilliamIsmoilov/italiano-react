/** REACT APP STORE **/

import type { Product } from "./product";

export interface AppRootState{
    homePage: HomePageState
}

/**  home page screen**/
export interface HomePageState{
    popularMenu: Product[];
}

/**  products page screen **/