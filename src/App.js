import React from 'react'
import NavBar from './components/NavBar'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Body from './components/Body'
import SideBar from './components/SideBar'
import theme from './components/Theme'
import {ThemeProvider } from '@material-ui/core/styles';
import './App.css';

function App() {
  return (
      <ThemeProvider theme={theme}>
          <div>
              <NavBar />
          </div>
          <Container
              style = {{ paddingTop: '3vh'}}>
              <Grid container spacing={3}>
                  <Grid item xs={9}>
                      <Body></Body>
                  </Grid>
                  <Grid item xs={3}>
                      <SideBar></SideBar>
                  </Grid>
              </Grid>
          </Container>
      </ThemeProvider>
  );
}

export default App;
