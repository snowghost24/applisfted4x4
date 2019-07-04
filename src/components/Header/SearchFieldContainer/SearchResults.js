import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ProductCard from './ProductCard'
import CategoryCard from './CategoryCard'
import BrandCard from './BrandCard'
import VehicleCategoryCard from './VehicleCategoryCard';
import ShortList from './ShortList';
import ShortListBrand from './ShortListBrand';
// import ButtonBase from '@material-ui/core/ButtonBase';
// import ShortListVehicle from './ShortListVehicle';
// import CardMedia from '@material-ui/core/CardMedia';

import _ from 'lodash'
// import { Card } from '@material-ui/core';
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 0,
    margin: theme.spacing.unit,
    maxWidth: '100%',
    // textAlign: 'center'
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },

});

function ComplexGrid(props) {
  const { classes, results } = props;


  if (results.displayResults === false) {
    return (
      <NoResultsFound results={results} />
    )
  } else {

    return (
      <div className={classes.root}>
        <Paper className={classes.paper} elevation={0}>
          <Grid container spacing={24} justify="flex-start" direction="row">
            {/* /////////////// left column/////////////////////////// */}
            <Grid item container xs={3} direction="column" alignItems="flex-start" >
              {/* TODO:set this up */}
              {/* <Grid item container direction="row">
                <Grid xs={6}>
                  <Typography variant="h6" gutterBottom>
                    VEHICLE
                </Typography>
                </Grid>

                <Grid >
                  <ShortList />
                </Grid>
              </Grid> */}

              {_.isNil(results.catLinks) || results.catLinks.length < 1 ? null :
                <Grid item container direction="row">
                  <Grid xs={6}>
                    <Typography variant="h6" gutterBottom>
                      CATEGORIES
                </Typography>
                  </Grid>

                  <Grid spacing={16}>
                    <ShortList catLinks={results.catLinks} vehicle={!results.vehicleFound ? null : results.vehicle} vehicleFound={results.vehicleFound} />
                  </Grid>
                </Grid>
              }


              {_.isNil(results.brand) || results.brand.length < 1 ? null :
                <Grid item container direction="row">
                  <Grid xs={6}>
                    <Typography variant="h6" gutterBottom>
                      BRANDS
                </Typography>
                  </Grid>
                  <Grid >
                    <ShortListBrand brand={results.brand} />
                  </Grid>
                </Grid>
              }
            </Grid>
            {/* ////////////////////////////////////////// */}


            {/* /////////////////right column///////////////////////// */}
            <Grid item container xs={9} direction="column" alignItems="flex-start" >

              {/* {result} */}
              {_.isNil(results.catLinks) || results.catLinks.length < 1 ? null :
                <Grid container spacing={3} direction="column">
                  <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                      CATEGORIES
                  </Typography>
                  </Grid>

                  <Grid container direction="row">
                    {results.catLinks.map((categoryInfo, index) => {
                      return (
                        <Grid item xs={4} key={index}>
                          {results.vehicleFound ? <VehicleCategoryCard categoryInfo={categoryInfo} vehicle={results.vehicle} /> : <CategoryCard categoryInfo={categoryInfo} />}


                        </Grid>
                      )

                    })}
                  </Grid>
                </Grid>}



              {_.isNil(results.brand) || results.brand.length < 1 ? null :

                <Grid container spacing={3} direction="column">
                  <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                      BRANDS
                    </Typography>
                  </Grid>
                  <Grid container direction="row">
                    {results.brand.map((brandInfo) => {
                      return (
                        <Grid item xs={4}>
                          <BrandCard brandInfo={brandInfo} />
                        </Grid>
                      )
                    })}
                  </Grid>
                </Grid>
              }





              {_.isNil(results.products) || results.products.length < 1 ? null :
                <Grid container spacing={3} direction="column">
                  <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                      PRODUCTS
                      </Typography>
                  </Grid>
                  <Grid container direction="row">
                    {results.products.map((productInfo) => {
                      return (
                        <Grid item xs={4}>
                          <ProductCard productInfo={productInfo} />
                        </Grid>
                      )

                    })}
                  </Grid>
                </Grid>
              }

                {/* TODO:might bring this bback */}
              {/* <Grid container spacing={3} direction="column">
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom>
                 Brand
                  </Typography>
                </Grid>
  
                <Grid item container direction="row">
                  <Grid xs={4}>
                  <BrandCard />
                  </Grid>
                  <Grid xs={4}>
                  <BrandCard />
                  </Grid>
                  <Grid xs={4}>
                  <BrandCard />
                  </Grid>
                  <Grid xs={4}>
                  <BrandCard />
                  </Grid>
                  <Grid xs={4}>
                  <BrandCard />
                  </Grid>
                  <Grid xs={4}>
                  <BrandCard />
                  </Grid>
                </Grid>
              </Grid> */}






            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }


}

ComplexGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComplexGrid);


function NoResults(props) {
  const { classes } = props;
  const { results } = props;
  console.log('iM in no results found', results)


  return (
    // {results.displayResults === false ? null}
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={0}>
        <Grid container spacing={24} justify="flex-start" direction="row">
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom>
              No results found...
      </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4" gutterBottom>
              Please Refine Your Search.
      </Typography>
          </Grid>
          <Grid item xs={6}>
            {/* <Card>
          <CardMedia   image="https://www.tsw.com/img/land-rover-wheels-rims-redbourne-bashford-5-lug-matte-gunmetal-std-700.jpg"
        title="Live from space album cover"
          />

        </Card> */}
            {/* 
          <Paper className={classes.paper}>xs=6</Paper> */}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

NoResults.propTypes = {
  classes: PropTypes.object.isRequired,
};

const NoResultsFound = withStyles(styles)(NoResults);
