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
              <h2>JEDSTAR</h2>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Link underline="none" color="inherit" href="#">
                  <img src={insta} alt="instagram" />
                </Link>
                <Link underline="none" color="inherit" href="#">
                  <img src={fb} alt="facebook" />
                </Link>
                <Link underline="none" color="inherit" href="#">
                  <img src={tw} alt="telegram" />
                </Link>
                <Link underline="none" color="inherit" href="#">
                  <img src={rd} alt="reddit" />
                </Link>
                <Link underline="none" color="inherit" href="#">
                  <img src={ds} alt="discord" />
                </Link>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2}>
              <h4>JEDS</h4>
              <ul style={{ listStyle: "none" }}>
                <Link href="#" underline="none" color="inherit">
                  <li>Token Contract</li>
                </Link>
                <Link href="#" underline="none" color="inherit">
                  <li>Liquidity Pool</li>
                </Link>
                <Link href="#" underline="none" color="inherit">
                  <li>View of CoinGecko</li>
                </Link>
                <Link href="#" underline="none" color="inherit">
                  <li>Veiw of CoinMarketCap</li>
                </Link>
                <Link href="#" underline="none" color="inherit">
                  <li>Veiw of Nomics</li>
                </Link>
              </ul>
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2}>
              <h4>Company</h4>
              <ul style={{ listStyle: "none" }}>
                <Link href="#" underline="none" color="inherit">
                  <li>About</li>
                </Link>
                <Link href="#" underline="none" color="inherit">
                  <li>Tearm and Conditions</li>
                </Link>
                <Link href="#" underline="none" color="inherit">
                  <li>Privacy Policy</li>
                </Link>
              </ul>
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2}>
              <h4>Platform</h4>
              <ul style={{ listStyle: "none" }}>
                <Link href="#" underline="none" color="inherit">
                  <li>Support</li>
                </Link>
                <Link href="#" underline="none" color="inherit">
                  <li>Blog</li>
                </Link>
                <Link href="#" underline="none" color="inherit">
                  <li>Documentation</li>
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
