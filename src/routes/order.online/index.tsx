/* eslint-disable @typescript-eslint/no-unused-vars */
import OrderOnline from "./OrdersList";
import '../../css/orderonline.css'
import type { CartItem } from "../../libs/types/search";

interface OrderOnlineProps{
    onAdd: (item: CartItem) => void
    cartItems: CartItem[];
}


const OrderOnlinePage = (props: OrderOnlineProps) => {
    const {onAdd, cartItems} = props

    return ( <div className="order">
        <OrderOnline onAdd={onAdd} cartItems={cartItems}/>

    </div>
     );
}
 
export default OrderOnlinePage