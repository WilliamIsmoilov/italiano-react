import BrandPage from './BrandPage';
import BrandPages from './BrandPages';
import PopularMenu from './PopularMenu';
import "../../css/home.css";
import Reservation from './Reservation';
import OpenDays from './OpenDay';
import { useEffect } from 'react';

const HomePage = () => {
    //Select: Store => DATA

    useEffect(() => {
        //backend server data request => DATA

        //slice Data => Store
    }, []);

    return <div className="homepage">
        <BrandPage/>
        <BrandPages/>
        <PopularMenu/>
        <Reservation/>
        <OpenDays/>

    </div>
    
}
 
export default HomePage;