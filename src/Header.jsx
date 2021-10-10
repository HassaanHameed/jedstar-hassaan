import React from "react";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DehazeIcon from "@mui/icons-material/Dehaze";
import {
  Box,
  Container,
  Grid,
  Stack,
  Button,
  Link,
  Hidden,
} from "@mui/material";
import logo from "./img/logo.png";
const HeaderEx = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        backgroundColor: "#011537",
        height: "100vh",
        color: "white",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ marginLeft: "30%" }}>
        <ListItem>
          <Link href="#" underline="none" color="inherit">
            <img src={logo} alt="logo" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="#" underline="none" color="inherit">
            <ListItemText>Home</ListItemText>
          </Link>
        </ListItem>
        <Divider />
        <ListItem>
          <Link href="#" underline="none" color="inherit">
            <ListItemText>Trade</ListItemText>
          </Link>
        </ListItem>
        <Divider />
        <ListItem>
          <Link href="#" underline="none" color="inherit">
            <ListItemText>Invest</ListItemText>
          </Link>
        </ListItem>
        <Divider />
      </List>
    </Box>
  );
  return (
    <>
      <Box sx={{ width: "100%", height: "auto" }}>
        <Container>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ color: "white" }}
          >
            <Grid item sm={4} md={4}>
              <Hidden smDown>
                <Grid container justifyContent="space-evenly">
                  <Grid item>
                    <Link underline="none" color="inherit">
                      Home
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link underline="none" color="inherit">
                      Trade
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link underline="none" color="inherit">
                      Invest
                    </Link>
                  </Grid>
                </Grid>
              </Hidden>
            </Grid>
            <Grid item xs={12} sm={5} md={5} sx={{ textAlign: "center" }}>
              <img
                style={{ width: "40px", height: "40px" }}
                src={logo}
                alt="logo"
              />
              <h3>JEDSTAR</h3>
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  sx={{
                    textAlign: "center",
                    margin: "15px 0",
                  }}
                >
                  <Link
                    href="#"
                    sx={{
                      borderRadius: "20px",
                      padding: "10px 20px",
                      backgroundColor: "#DC9E00",
                    }}
                    underline="none"
                    color="inherit"
                  >
                    Connect Wallet
                  </Link>
                </Grid>
                <Hidden smUp>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    sx={{ textAlign: "center" }}
                  >
                    <Button onClick={toggleDrawer("Left", true)}>
                      <DehazeIcon
                        sx={{
                          color: "white",
                        }}
                      />
                    </Button>
                    <SwipeableDrawer
                      anchor={"left"}
                      open={state["Left"]}
                      onClose={toggleDrawer("Left", false)}
                      onOpen={toggleDrawer("Left", true)}
                    >
                      {list("List")}
                    </SwipeableDrawer>
                  </Grid>
                </Hidden>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HeaderEx;
