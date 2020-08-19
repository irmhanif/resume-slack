import React from 'react';
import './App.css';
import Profile from './components/Profile';
import profileImg from './assets/IRM.jpg';
import Wrapper from './components/Wrapper';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function App() {
    const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" style={{ padding: 20 }}>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <Wrapper />
            </Grid>
            <Grid item xs={4}>
              <Profile img={profileImg} />
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
}

export default App;
