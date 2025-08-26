import BrandPage from './BrandPage';
import BrandPages from './BrandPages';
import PopularMenu from './PopularMenu';
import "../../css/home.css";
import Reservation from './Reservation';
import OpenDays from './OpenDay';

const HomePage = () => {
    return <div className="homepage">
        <BrandPage/>
        <BrandPages/>
        <PopularMenu/>
        <Reservation/>
        <OpenDays/>

    </div>
    
}
 
export default HomePage;