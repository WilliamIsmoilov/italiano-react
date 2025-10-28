import OrderOnline from "./OrdersList";
import '../../css/orderonline.css'
import type { Product } from "../../libs/types/product";
import { setAllProducts } from "./slice";
import type { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ProductService from "../../services/ProductService";



const actionDispatch = (dispatch: Dispatch) => ({
    setAllProducts: (data: Product[]) => dispatch(setAllProducts(data))
})

const OrderOnlinePage = () => {

    const {setAllProducts} = actionDispatch(useDispatch())


    useEffect(() => {
        const product = new ProductService();
        product.getProducts({
            page: 1,
            limit: 9,
            order: 'createdAt',
        }).then(data => {
            setAllProducts(data)
        }).catch(err => console.log(err))
    }, [])

    return ( <div className="order">
        <OrderOnline/>

    </div>
     );
}
 
export default OrderOnlinePage