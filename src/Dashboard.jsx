import React from "react";
import { Link, Container, Grid, Typography } from "@mui/material";
import instagram from "./img/instagram.png";
import facebook from "./img/facebook.png";
import reddit from "./img/reddit.png";
import telegram from "./img/telegram.png";
import discord from "./img/discord.png";
import followus from "./img/followus.png";
import bsc from "./img/bsc.png";
const Dashboard = () => {
  return (
    <>
      <Container>
        <Grid
          mt={7}
          container
          alignItems="center"
          justifyContent={{
            xs: "center",
            sm: "center",
            md: "flex-start",
            lg: "flex-start",
          }}
          sx={{ color: "white" }}
        >
          <Grid item xs={12} sm={1} md={1} lg={1}>
            <Grid
              container
              direction="column"
              spacing={2}
              textAlign={{ xs: "center", sm: "left", md: "left", lg: "left" }}
            >
              <Grid item>
                <Link href="#" underline="none" color="#fff">
                  <img src={instagram} alt="instagram" />
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" underline="none" color="#fff">
                  <img src={facebook} alt="facebook" />
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" underline="none" color="#fff">
                  <img src={reddit} alt="reddit" />
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" underline="none" color="#fff">
                  <img src={discord} alt="discord" />
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" underline="none" color="#fff">
                  <img src={telegram} alt="telegram" />
                </Link>
              </Grid>
              <Grid item>
                <Link underline="none" color="#fff">
                  <img src={followus} alt="followus" />
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={11} md={11} lg={11}>
            <Grid
              container
              marginTop={{ xs: "10px", sm: "10px", md: "0", lg: "0" }}
              direction="column"
              alignItems="center"
            >
              <Grid item>
                <p className="dashboard-heading">JEDSTAR staking Dashboard</p>
              </Grid>
              <Grid item sx={{ marginTop: "30px" }}>
                <Link
                  href="#"
                  sx={{
                    borderRadius: "12px",
                    padding: "10px 40px",
                    backgroundColor: "#DC9E00",
                    fontSize: "20px",
                  }}
                  underline="none"
                  color="inherit"
                >
                  Stake JEDS
                </Link>
                <h4 style={{ marginTop: "20px" }}>
                  Powered by
                  <span>
                    <img
                      style={{ width: "20px", height: "20px", margin: "0 5px" }}
                      src={bsc}
                      alt="bsc"
                    />
                  </span>
                  Binance
                </h4>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          mt={5}
          container
          justifyContent="space-evenly"
          sx={{ color: "white" }}
        >
          <Grid item xs={12} sm={1} md={1} lg={1}></Grid>
          <Grid
            item
            xs={12}
            sm={3}
            md={3}
            lg={3}
            sx={{
              width: "225px",
              height: "170px",
              borderRadius: "34px",
              border: "1px solid #DC9E00",
              textAlign: "center",
              paddingTop: "50px",
            }}
            margin={{ xs: "10px", sm: "0", md: "0", lg: "0" }}
          >
            <p>TOTAL VALUE STAKED</p>
            <h4>$21,610,291</h4>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            md={3}
            lg={3}
            sx={{
              width: "150px",
              height: "170px",
              borderRadius: "34px",
              border: "1px solid #DC9E00",
              textAlign: "center",
              paddingTop: "50px",
            }}
            margin={{ xs: "10px", sm: "0", md: "0", lg: "0" }}
          >
            <p>JEDSTAR STACKED</p>
            <h4>$11,610,291</h4>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            md={3}
            lg={3}
            sx={{
              width: "225px",
              height: "170px",
              borderRadius: "34px",
              border: "1px solid #DC9E00",
              textAlign: "center",
              paddingTop: "50px",
            }}
            margin={{ xs: "10px", sm: "0", md: "0", lg: "0" }}
          >
            <p>UNIQUE STAKERS</p>
            <h4>10,291</h4>
          </Grid>
        </Grid>
        <Grid
          mt={5}
          container
          justifyContent="space-evenly"
          sx={{ color: "white" }}
        >
          <Grid item xs={12} sm={1} md={1} lg={1}></Grid>
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            lg={4}
            sx={{
              width: "225px",
              height: "170px",
              borderRadius: "34px",
              border: "1px solid #DC9E00",
              textAlign: "center",
              paddingTop: "50px",
            }}
            margin={{ xs: "10px", sm: "0", md: "0", lg: "0" }}
          >
            <p>JEDS-LP STAKED</p>
            <h4>$1,610,291</h4>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            lg={4}
            sx={{
              width: "225px",
              height: "170px",
              borderRadius: "34px",
              border: "1px solid #DC9E00",
              textAlign: "center",
              paddingTop: "50px",
            }}
            margin={{ xs: "10px", sm: "0", md: "0", lg: "0" }}
          >
            <p>AVAERAGE APY</p>
            <h4>41%</h4>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
