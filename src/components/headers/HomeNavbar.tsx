/* eslint-disable @typescript-eslint/no-unused-vars */;
import { NavLink } from "react-router";
import { GiFullPizza } from "react-icons/gi";
import "../../css/homeNavbar.css"
import { Box, Button, Container, Stack } from '@mui/material';
import Basket from "./Basket";



export default function HomeNavbar() {
   

    const base = `
        relative inline-block text-current transition-colors duration-200
        after:content-[''] after:absolute after:left-0 after:bottom-0 
        after:w-full after:border-b-2 after:border-[#FF8A00] after:scale-x-0 
        after:origin-left after:transition-transform after:duration-200 
        hover:text-[#FF8A00] hover:after:scale-x-100
    `.trim().replace(/\s+/g, ' ');
    const active = 'text-[#FF8A00] font-semibold ';
    const authMember = null;

    return (
    <div className="home-navbar">
        <Container className="navbar-container">
            <Stack className="menu">
                <Box>
                    <NavLink to='/' className="brand-logo-link">
                     <GiFullPizza className="icon"/>
                     <span className="brand-name">Itali<span className="span">ano</span></span> 
                    </NavLink>
                </Box>
                <Stack className="links">
                    <Box className={'hover-line'}>
                       <NavLink to='/' className={({isActive}) => isActive ? 'underline' : 'base'}> Home</NavLink>
                    </Box>
                    <Box className={'hover-line'}>
                        <NavLink to='/menu' className={({ isActive }) => isActive ? 'underline' : 'base'}>
                            Menu
                        </NavLink>
                    </Box>
                    <Box className={'hover-line'}>
                       <NavLink to='/aboutUs' className={({isActive}) => isActive ? 'underline' : 'base'}>About Us</NavLink>
                    </Box>
                    <Box className={'hover-line'}>
                       <NavLink to='/orderOnline' className={({isActive}) => isActive ? 'underline' : 'base'}>Order Online</NavLink>
                    </Box>

                    
                    <Box className={'hover-line'}>
                       <NavLink to='/reservation' className={({isActive}) => isActive ? 'underline' : 'base'}>Reservation</NavLink>
                    </Box>
                    
                    <Box className={'hover-line'}>
                       <NavLink to='/contactUs' className={({isActive}) => isActive ? 'underline' : 'base'}> Contact Us</NavLink>
                    </Box>

                    {/* Basket */}
                    <Basket/>

                    {!authMember? (<Box>
                    <Button 
                    className='login-button'
                    >Login</Button>
                    </Box>
                ): ( <Button 
                    className="logout-button">
                        Logout
                    </Button>
                  )}   
                </Stack>
            </Stack>

        </Container>
    </div>
    )
}

// const Navbar = () => {
//     const [menuOpen, setMenuOpen] = useState(false);

//     const base = `
//   relative inline-block text-current transition-colors duration-200
//   after:content-[''] after:absolute after:left-0 after:bottom-0 
//   after:w-full after:border-b-2 after:border-[#FF8A00] after:scale-x-0 
//   after:origin-left after:transition-transform after:duration-200 
//   hover:text-[#FF8A00] hover:after:scale-x-100
// `.trim().replace(/\s+/g, ' ');
 
//     const active = 'text-[#FF8A00] font-semibold '
//       return (  <div className="home-navbar">
//             <div className="logo-name">
//                 <NavLink to='/' className='flex items-center gap-2 text-lg font-bold text-[#FF8A00]'>
//                 <GiFullPizza className=" text-xl size-10"/>
//                 <span className="text-[14px] text-black" >Itali<span className="text-[#FF8A00]">ano</span></span>
//             </NavLink>
//             </div>
            

//             {/* Desktop Nav */}
            
//              <div  >
//                 <div >
//                     <NavLink className={({isActive}) => isActive ? active : base}  to='/'> Home</NavLink>
//                     <NavLink className={({isActive}) => isActive ? active : base} to='/menu'> Menu</NavLink>
//                     <NavLink className={({isActive}) => isActive ? active : base} to='/aboutUs'> About Us</NavLink>
//                     <NavLink className={({isActive}) => isActive ? active : base} to='/orderOnline'> Order Online</NavLink>
//                     <NavLink className={({isActive}) => isActive ? active : base} to='/reservation'> Reservation</NavLink>
//                     <NavLink className={({isActive}) => isActive ? active : base} to='/contactUs'> Contact Us</NavLink>

//                 </div>
//                  </div> 
//                 <div className="cart">
//                         <FaShoppingCart className=" text-black  flex justify-center w-[24px] h-[24px] "/>
//                 </div>
//                 <div className="ml-7">
//                     <button className="bg-[#3FA72F] w-[112px] h-[51px]  rounded-[133px]">
//                            Log in
//                            </button>
//                 </div>
//             <div className="md:hidden flex items-center gap-4">
//                <button onClick={() => setMenuOpen(!menuOpen)} 
//                     className=" text-[#FF8A00] text-xl cursor-pointer " title="Menu" >
//                   {menuOpen ? <FaTimes/> : <FaBars/>}
//                </button>
//             </div>
//         </div>
//             )
//         }  
    
// export default Navbar;

// /** className="menu-bar hidden md:flex items-center gap-25"*/

// /** "className=" nav-links space-x-4 text-[14px] text-black gap-5"*/