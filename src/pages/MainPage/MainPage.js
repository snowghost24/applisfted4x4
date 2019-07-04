import React from 'react';
import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import LargeCarousel from '../../components/LargeCarousel';
import Header from '../../components/Header';
import PopularProductsGrid from '../../components/PopularProductsGrid';
import ImageGridList from '../../components/ImageGridList';
import Footer from '../../components/Footer';
import SnackNotifications from '../../components/SnackNotifications';
import MainPageBodyTabs from '../../components/MainPageBodyTabs';
import MainPageVehicleGrid from '../../components/MainPageVehicleGrid'

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {' team.'}
    </Typography>
  );
}
const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  whiteBackGroundContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  }, button: {
    margin: theme.spacing(1, 0, 3),
  },vehicleGridContent:{
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: '#373e48',
    minWidth: '1000px'
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      {/* Header unit */}
      <main>
        <LargeCarousel />
        <MainPageVehicleGrid />
     
        <div className={classes.whiteBackGroundContent}>
          <Container maxWidth="lg">
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid>
                <Typography variant="h5" gutterBottom>
                  Current Vehicle: <span style={{ fontWeight: 'bold' }}>
                    2017-Ford-F-150
                  {/* {selectedVehicle}  */}
                  </span>
                </Typography>
              </Grid>
              <Grid>
                <Button variant="contained" className={classes.button}> 
                Change Vehicle
                </Button>
                {/* <ChangeVehicleButtonUniversal handleVehicleSelection = {this.handleVehicleSelection.bind(this)} title='Change Vehicle'  /> */}
              </Grid>
            </Grid>
            <PopularProductsGrid />
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="lg">
        <MainPageBodyTabs />

        </Container>

        <div className={classes.whiteBackGroundContent}>
          <Container maxWidth="lg">
          <ImageGridList />
          </Container>
        </div>
      </main>
      <SnackNotifications  />
      {/* Footer */}
      <Footer />
      {/* <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <MadeWithLove />
      </footer> */}
      {/* End footer */}
    </React.Fragment>
  );
}