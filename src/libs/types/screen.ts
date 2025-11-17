/** REACT APP STORE **/

import type { Member } from "./member";
import type { Product } from "./product";
import type { Reservation } from "./reservatio";

export interface AppRootState{
    homePage: HomePageState,
    orderOnline: OrderOnlineState,
    menuPage: MenuPageState
    reservationPage: ReservationPageState
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

export interface ReservationPageState{
    member: Member | null;
    getReservation: Reservation[]
    reservation: Reservation[]
}