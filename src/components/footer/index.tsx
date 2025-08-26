import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { GiFullPizza } from "react-icons/gi";


const Footers = styled.div`
  width: 100%;
  height: 590px;
  display: flex;
  background: #311F09;
  background-size: cover;
`;

export default function Footer() {

  return (
    <Footers>
      <Container>
        <Stack flexDirection={"row"} sx={{ mt: "94px" }}>
          <Stack flexDirection={"column"} style={{ width: "340px" }}>
            <Box>
                <GiFullPizza className="icon"/>
                <span className="brand-name">Itali<span className="span">ano</span></span> 
            </Box>
            <Box className={"foot-desc-txt"}>
              Focusing on the gourmet Italian breakfast as well as the youth
              society,Italian Cultural cuisine back. 
               
            </Box>
            <Box className="sns-context" sx={{gap:'15px'}}>
              <img src={"/icons/facebook.svg"} style={{
                width:'60px', height:'60px'
              }} />
              <img src={"/icons/twitter.svg"} style={{
                width:'60px', height:'60px'
              }} />
              <img src={"/icons/instagram.svg"} style={{
                width:'60px', height:'60px'
              }} />
            </Box>
          </Stack>
          <Stack sx={{ ml: "288px" }} flexDirection={"row"}>
            <Stack>
              <Box>
                <Box className={"foot-category-title"}>Page</Box>
                <Box className={"foot-category-link"}>
                  <Link to="/">Home</Link>
                  <Link to="/menu">Menu</Link>
                   <Link to="/orderOnline">Order Online</Link>
                  <Link to="/reservation">Reservation</Link>
                  <Link to="/contactUs"> Contact Us</Link>
                </Box>
              </Box>
            </Stack>
            <Stack sx={{ ml: "100px" }}>
              <Box>
                <Box className={"foot-category-title"}>Get in touch</Box>
                <Box
                  flexDirection={"column"}
                  sx={{ mt: "20px" }}
                  className={"foot-category-link"}
                  justifyContent={"space-between"}
                >
                  <Box flexDirection={"row"} className={"find-us"}>
                    <span>L.</span>
                    <div>Seoul, South Korea</div>
                  </Box>
                  <Box className={"find-us"}>
                    <span>P.</span>
                    <div>+82 0101111111</div>
                  </Box>
                  <Box className={"find-us"}>
                    <span>E.</span>
                    <div>mbsacademy.uz@gmail.com</div>
                  </Box>
                  <Box className={"find-us"}>
                    <span>H.</span>
                    <div>Visit 24 hours</div>
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Stack>
        <Stack className={"copyright-txt"}>
          © Copyright Devex Global, All rights reserved.
        </Stack>
      </Container>
    </Footers>
  );
}
