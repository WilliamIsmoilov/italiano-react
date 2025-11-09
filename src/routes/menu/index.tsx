/* eslint-disable @typescript-eslint/no-unused-vars */
import MealsPage from "./MealsPage";
import "../../css/menu.css";
import ChosenProduct from "./ChosenProduct";
import {  Routes, Route } from 'react-router-dom';
import type { CartItem } from "../../libs/types/search";

interface MenuPageProps{
    onAdd: (item :CartItem) => void
}

export default function MenuPage(props: MenuPageProps){
    const {onAdd} = props
    return( <div className="menupage">
        <Routes>
            <Route path="" element={<MealsPage onAdd={onAdd}/>}/>
            <Route path="/:productId" element={<ChosenProduct onAdd={onAdd}/>}/>
        </Routes>
    </div>

    )
}