import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';


function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    // width: 500,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
          <Tab label="Item four" />
          <Tab label="Item Five" />
          <Tab label="Item Six" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabContainer dir={theme.direction}><MainBodyCards /></TabContainer>
        <TabContainer dir={theme.direction}>Item Two</TabContainer>
        <TabContainer dir={theme.direction}>Item Three</TabContainer>
      </SwipeableViews>
    </div>
  );
}



const useStyles2 = makeStyles(theme => ({
  // root: {
  //   backgroundColor: theme.palette.background.paper,
  //   width: 500,
  // },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));


const MainBodyCards = () => {
  const cards = [1,2,3,4,5]
  const classes = useStyles2();

  return (
    <div>
        <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
  </div>)}

// {selectedVehicle === null ? (<div style={{ maxWidth: '1400px', position: 'absolute', bottom: '170px' }}>
// <Grid>
//   <Grid xs={12}>
//     <Paper className={classes.paper}>
//       <Typography variant="display2" style={{ color: 'white' }} gutterBottom>
//         <span style={{ fontWeight: 'bold' }}>Select Vehicle</span>
//       </Typography>
//       <SelectVehicleForm vehicleRedirect={(vehicleid) => this.vehicleRedirect(vehicleid)} title='Change Vehicle' />
//     </Paper>
//   </Grid>
// </Grid>
// </div>) : (<div style={{
// // backgroundColor: '#FAFAFA',
// // backgroundColor:'blue',
// height: 'auto', justifyContent: 'space-between',
// display: 'flex',
// width: 1200
// // paddingTop: 50, paddingBottom: 50
// }}>

// <Grid
//   container
//   direction="row"
//   justify="space-between"
//   alignItems="center"
// >
//   <Grid>
//     <Typography variant="h5" gutterBottom>
//       Current Vehicle: <span style={{ fontWeight: 'bold' }}> {selectedVehicle} </span>
//     </Typography>
//   </Grid>
//   <Grid>
//   <ChangeVehicleButtonUniversal handleVehicleSelection = {this.handleVehicleSelection.bind(this)} title='Change Vehicle'  />
//   </Grid>
// </Grid>
// </div>)}
