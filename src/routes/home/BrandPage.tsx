import { Box,  Button,  Container,  Stack } from "@mui/material"
import { NavLink } from "react-router";

const BrandPage = () => {
    return ( 
    <div className="brand-frame"> 
        <Container className="brand-container">
            <Container className="container">
                <Box>
                    <Button className="restaurant-button">
                           Restaurant
                    </Button>
                </Box>

                <Stack>
                    <Box className="brand-name">Italian <br /> Cuisine</Box>
                    <Box className="brand-desc">Lorem ipsum dolor sit amet, consectetur adipiscing  elit. Sodales senectus dictum arcu sit tristique donec eget </Box>
                </Stack>
                <Box className="buttons">
                    <Stack>
                        
                        <NavLink to='/orderOnline'>
                        <Button className="order-button">
                                   Order now
                        </Button>
                        </NavLink>
                    </Stack>

                    <Stack>
                        <NavLink to='/reservation'>
                        <Button className="reser-button">Reservation</Button>
                        </NavLink>
                    </Stack>
                    
                </Box>
            </Container>

            <Container className="imgs">
                <Box>
                    <img src="/images/brukli.png" alt="brukli" className="img-brukli-one" />
                    <img src="/images/pasta.png" alt="pasta" className="img-pasta"/>
                    <img src="/images/brukli.png" alt="brukli" className="img-brukli-two" />
                    
                </Box>
            </Container>
            <Container>

            </Container>
        </Container>
    </div> )
}
 
export default BrandPage;