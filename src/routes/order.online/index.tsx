/* eslint-disable @typescript-eslint/no-unused-vars */
import OrderOnline from "./OrdersList";
import '../../css/orderonline.css'
import type { CartItem } from "../../libs/types/search";

interface OrderOnlineProps{
    onAdd: (item: CartItem) => void
    cartItems: CartItem[];
    onRemove: (item: CartItem) => void;
    onDelete: (item: CartItem) => void;
    deleteAll: () => void;
}


const OrderOnlinePage = (props: OrderOnlineProps) => {
    const {onAdd, cartItems, onRemove, onDelete, deleteAll} = props

    return ( <div className="order">
        <OrderOnline 
        onAdd={onAdd} 
        cartItems={cartItems}
        onRemove={onRemove}
        onDelete={onDelete}
        deleteAll={deleteAll}/>

    </div>
     );
}
 
export default OrderOnlinePage