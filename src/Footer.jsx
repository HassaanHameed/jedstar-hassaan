import React from "react";
import { Grid, Stack, Box, Container, Link } from "@mui/material";
import footerlogo from "./img/footerlogo.png";
import insta from "./img/instagram.png";
import fb from "./img/facebook.png";
import tw from "./img/telegram.png";
import rd from "./img/reddit.png";
import ds from "./img/discord.png";
const Footer = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "auto",

          bottom: "0",
          left: "0",

          paddingBottom: "50px",
        }}
      >
        <Container>
          <Grid
            container
            justifyContent="space-around"
            pt={8}
            alignItems="center"
            spacing={{ xs: "4" }}
            sx={{ textAlign: "center" }}
          >
            <Grid item xs={12} sm={12} md={2} lg={2}>
              <img src={footerlogo} alt="footerlogo" />
              <h2 style={{ margin: "20px 0" }}>JEDSTAR</h2>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Link
                  sx={{ margin: "0 5px" }}
                  underline="none"
                  color="inherit"
                  href="#"
                >
                  <img src={insta} alt="instagram" />
                </Link>
                <Link
                  sx={{ margin: "0 5px" }}
                  underline="none"
                  color="inherit"
                  href="#"
                >
                  <img src={fb} alt="facebook" />
                </Link>
                <Link
                  sx={{ margin: "0 5px" }}
                  underline="none"
                  color="inherit"
                  href="#"
                >
                  <img src={tw} alt="telegram" />
                </Link>
                <Link
                  sx={{ margin: "0 5px" }}
                  underline="none"
                  color="inherit"
                  href="#"
                >
                  <img src={rd} alt="reddit" />
                </Link>
                <Link
                  sx={{ margin: "0 5px" }}
                  underline="none"
                  color="inherit"
                  href="#"
                >
                  <img src={ds} alt="discord" />
                </Link>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2}>
              <h4 style={{ margin: "10px 0" }}>JEDS</h4>
              <ul style={{ listStyle: "none" }}>
                <Link href="#" underline="none" color="inherit">
                  <li>Token Contract</li>
                </Link>
                <Link href="#" underline="none" color="inherit">
                  <li style={{ margin: "20px 0" }}>Liquidity Pool</li>
                </Link>
                <Link href="#" underline="none" color="inherit">
                  <li style={{ margin: "20px 0" }}>View of CoinGecko</li>
                </Link>
                <Link href="#" underline="none" color="inherit">
                  <li style={{ margin: "20px 0" }}>Veiw of CoinMarketCap</li>
                </Link>
                <Link href="#" underline="none" color="inherit">
                  <li style={{ margin: "20px 0" }}>Veiw of Nomics</li>
                </Link>
              </ul>
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2}>
              <h4 style={{ margin: "10px 0" }}>Company</h4>
              <ul style={{ listStyle: "none" }}>
                <Link href="#" underline="none" color="inherit">
                  <li style={{ margin: "20px 0" }}>About</li>
                </Link>
                <Link href="#" underline="none" color="inherit">
                  <li style={{ margin: "20px 0" }}>Tearm and Conditions</li>
                </Link>
                <Link href="#" underline="none" color="inherit">
                  <li style={{ margin: "20px 0" }}>Privacy Policy</li>
                </Link>
              </ul>
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2}>
              <h4 style={{ margin: "10px 0" }}>Platform</h4>
              <ul style={{ listStyle: "none" }}>
                <Link href="#" underline="none" color="inherit">
                  <li style={{ margin: "20px 0" }}>Support</li>
                </Link>
                <Link href="#" underline="none" color="inherit">
                  <li style={{ margin: "20px 0" }}>Blog</li>
                </Link>
                <Link href="#" underline="none" color="inherit">
                  <li style={{ margin: "20px 0" }}>Documentation</li>
                </Link>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "black",
          height: "auto",
          padding: "15px 0",
          textAlign: "center",
          bottom: "0",
        }}
      >
        Copyright © 2021 JEDSTAR Limited
      </Box>
    </>
  );
};

export default Footer;
