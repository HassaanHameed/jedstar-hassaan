import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Button,
  Link,
  Typography,
} from "@mui/material";
import roadmap from "./img/roadmap.png";
const Jedstarcalculator = () => {
  return (
    <>
      <Box sx={{ paddingTop: "160px", height: "auto" }}>
        <Box
          sx={{
            margin: "auto",
            textAlign: "center",
            width: "60%",
            height: "auto",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#DC9E00", paddingBottom: "50px" }}
          >
            JEDSTAR Calculator
          </Typography>
        </Box>
        <Box
          sx={{
            margin: "auto",
            textAlign: "center",
            width: "60%",
            height: "auto",
            backdropFilter: "blur(84px)",
            background: `rgba(255, 255, 255, 0.1)`,
            borderRadius: "12px",
            padding: "30px",
          }}
        >
          <p style={{ marginTop: "20px" }}>
            Calculate yourJEDSTAR depending on the amount of staked tokens and
            your lock time.
          </p>
          <Box mt={10}>
            <p>
              JEDS
              <span style={{ margin: "10px" }}>
                <input
                  type="number"
                  style={{
                    width: "140px",
                    height: "30px",
                    textAlign: "center",
                  }}
                  value="5000"
                />
              </span>
            </p>
            <Button
              variant="text"
              disableElevation
              sx={{ color: "white", fontWeight: "bold", fontSize: "25px" }}
            >
              +
            </Button>
            <p>Lock tokens for Days</p>
          </Box>
          <Box mt={10}>
            <img style={{ width: "80%" }} src={roadmap} alt="roadmap" />
            <Grid container direction="row">
              <Grid item xs={2} sm={2} md={2} lg={2}>
                0
              </Grid>
              <Grid item xs={2} sm={2} md={2} lg={2}>
                15
              </Grid>
              <Grid item xs={2} sm={2} md={2} lg={2}>
                30
              </Grid>
              <Grid item xs={2} sm={2} md={2} lg={2}>
                60
              </Grid>
              <Grid item xs={2} sm={2} md={2} lg={2}>
                90
              </Grid>
              <Grid item xs={2} sm={2} md={2} lg={2}>
                180
              </Grid>
            </Grid>
          </Box>
          <Box mt={10}>
            <p>
              $JEDSTARS
              <span style={{ margin: "10px" }}>
                <input
                  type="number"
                  style={{
                    width: "140px",
                    height: "30px",
                    textAlign: "center",
                  }}
                  value="5000"
                />
              </span>
            </p>
            <p style={{ margin: "20px" }}>locked until 9/1/2022</p>
          </Box>
          <Box sx={{ width: "50%", textAlign: "center", margin: "auto" }}>
            <Link href="#" underline="none" color="inherit">
              <Typography
                variant="h6"
                sx={{
                  padding: "10px 0px",
                  backgroundColor: "#DC9E00",
                  borderRadius: "12px",
                }}
              >
                Connect Wallet
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
      <Box sx={{ paddingTop: "160px" }}>
        <Box
          sx={{
            margin: "auto",
            textAlign: "center",
            width: "60%",
            height: "auto",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#DC9E00", paddingBottom: "50px" }}
          >
            Your Statistics
          </Typography>
        </Box>
        <Box
          sx={{
            margin: "auto",
            textAlign: "center",
            width: "60%",
            height: "auto",
            backdropFilter: "blur(84px)",
            background: `rgba(255, 255, 255, 0.1)`,
            borderRadius: "12px",
            padding: "30px",
          }}
        >
          <Grid container justifyContent="space-between">
            <Grid
              item
              xs={12}
              sm={12}
              md={5}
              lg={5}
              sx={{
                borderRadius: "10px",
                border: "1px solid #DC9E00",
                height: "119px",
                padding: "30px 0",
              }}
            >
              <p>JEDSTARS EARN</p>
              <h2>0</h2>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={5}
              lg={5}
              sx={{
                borderRadius: "10px",
                border: "1px solid #DC9E00",
                height: "119px",
                padding: "30px 0",
              }}
            >
              <p>Your CRDN Wallet Balance</p>
              <h2>0</h2>
            </Grid>
          </Grid>
          <Stack
            mt={4}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid container justifyContent="space-around">
              <Grid
                item
                xs={12}
                sm={12}
                md={5}
                lg={5}
                sx={{
                  borderRadius: "10px",
                  border: "1px solid #DC9E00",
                  height: "119px",
                  padding: "30px 0",
                }}
              >
                <p>Claimed Reward</p>
                <h2>0</h2>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={5}
                lg={5}
                sx={{
                  borderRadius: "10px",
                  border: "1px solid #DC9E00",
                  height: "119px",
                  padding: "30px 0",
                }}
              >
                <p>Current Staked</p>
                <h2>0</h2>
              </Grid>
            </Grid>
            <Grid container justifyContent="space-around">
              <Grid
                item
                xs={12}
                sm={12}
                md={5}
                lg={5}
                sx={{
                  borderRadius: "10px",
                  border: "1px solid #DC9E00",
                  height: "119px",
                  padding: "30px 0",
                }}
              >
                <p>Total Staked</p>
                <h2>0</h2>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={5}
                lg={5}
                sx={{
                  borderRadius: "10px",
                  border: "1px solid #DC9E00",
                  height: "119px",
                  padding: "30px 0",
                }}
              >
                <p>Current Unstaked</p>
                <h2>0</h2>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </Box>
      <Box sx={{ paddingTop: "160px", paddingBottom: "100px" }}>
        <Box
          sx={{
            margin: "auto",
            textAlign: "center",
            width: "60%",
            height: "auto",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#DC9E00", paddingBottom: "50px" }}
          >
            JEDSTAR
          </Typography>
        </Box>
        <Box
          sx={{
            margin: "auto",
            textAlign: "center",
            width: "60%",
            height: "auto",
            backdropFilter: "blur(84px)",
            background: `rgba(255, 255, 255, 0.1)`,
            borderRadius: "12px",
            padding: "30px",
          }}
        >
          <Grid
            sx={{
              width: "100%",
              borderRadius: "10px",
              border: "1px solid #DC9E00",
              height: "auto",
              padding: "70px 10px",
            }}
            columns={18}
          >
            <Stack
              direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
              justifyContent="space-evenly"
            >
              <Stack direction="column" sx={{ margin: "5px" }}>
                <p>Staked Amount</p>
                <input
                  type="number"
                  style={{
                    width: "100%",
                    height: "30px",
                    textAlign: "center",
                  }}
                />
              </Stack>
              <Stack direction="column" sx={{ margin: "5px" }}>
                <p>Withdrawl Amount</p>
                <input
                  type="number"
                  style={{
                    width: "100%",
                    height: "30px",
                    textAlign: "center",
                  }}
                />
              </Stack>
              <Stack direction="column" sx={{ margin: "5px" }}>
                <p>Unstake</p>
                <input
                  type="number"
                  style={{
                    width: "100%",
                    height: "30px",
                    textAlign: "center",
                  }}
                />
              </Stack>
              <Stack direction="column" sx={{ margin: "5px" }}>
                <p>Claim</p>
                <input
                  type="number"
                  style={{
                    width: "100%",
                    height: "30px",
                    textAlign: "center",
                  }}
                />
              </Stack>
            </Stack>
            <p>You have no stake record yet.</p>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Jedstarcalculator;
