import MealsPage from "./MealsPage";
import "../../css/menu.css";
import ChosenProduct from "./ChosenProduct";
import {  Routes, Route } from 'react-router-dom';

export default function MenuPage(){
    return( <div className="menupage">
        <Routes>
            <Route path="" element={<MealsPage/>}/>
            <Route path="/:productId" element={<ChosenProduct/>}/>
        </Routes>
    </div>

    )
}