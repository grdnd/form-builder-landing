import React from 'react'

import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from '@mui/material/AppBar';
import Card from "@mui/material/Card";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const isSmall = window.innerWidth <= 350;

const fontsx = {
  fontFamily: "Montserrat Alternates"
}

const navsx = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
}

const headersx = {
  display: "flex", 
  background: "linear-gradient(to bottom, #553092, #878BE1)",
  minWidth: "100%",
  height: "600px",
  margin: "auto",
  padding: "0 auto",
  fontFamily: ""
}

const headlinesx ={
  height: "442px",
  minWidth: "100%",
}

const paymentsx ={
  backgroundColor: "#DDDEEC",
  minWidth: "100%",
  height: "622px",
}

const footersx = {
  backgroundColor: "#262626",
  height: "482px",
  minWidth: "100%",
}

function Landing() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={headersx}>
          <AppBar elevation={0} position="static" style={{ backgroundColor: "transparent", width: "100%" }}>
            <Toolbar style={{ width: "100%" }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h4"
                component="div"
                sx={{
                  flexGrow: 1,
                  ...fontsx,
                }}>
                <span style={{ fontWeight: 400 }}>your</span>
                <span style={{ fontWeight: 500 }}>Forms</span>
              </Typography>
              <Button color="inherit" sx={{}}>home</Button>
              <Button color="inherit" sx={{}}>pricing</Button>
              <Button color="inherit" sx={{}}>dashboard</Button>
              <Button color="inherit" sx={{}}>login/signup</Button>
            </Toolbar>
          </AppBar>

          {/* Build your forms card */}
        <Card
        elevation={1}
        sx={{
          position: "absolute",
          backgroundColor: "#313492",
          width: "500px",
          height: "auto",
          top: "164px",
          right:"260px",
          padding: "62px 67px",
        }}>
          <Typography color="#FFF" variant="h4">Build your forms</Typography>
          <Typography color="#FFF" variant="p">Fast & easy customizable forms for any situation</Typography>
          <Button variant="contained" sx={{marginTop: "32px"}}>Get Started</Button>
        </Card>
      </Container>

      <Container sx={headlinesx}>Headline</Container>
      <Container sx={paymentsx}>Payment Cards</Container>
      <Container sx={footersx}>Footer</Container>
    </React.Fragment>
  )
}

export default Landing;
