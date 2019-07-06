import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import classNames from 'classnames';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import _ from 'lodash';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

const tileData = [
  {
    img: "https://storage.googleapis.com/hsimages/grdiwinches.jpeg",
    title: 'Winches',
    author: 'author',
    cols: 2,
    linkTo: `/shop/Winch`,
  }, {
    img: "https://storage.googleapis.com/hsimages/gridFlares.jpg",
    title: 'Fender Flares',
    author: 'author',
    cols: 1,
    linkTo: `/shop/Fenders/Fender Flares`,
  }, {
    img: "https://storage.googleapis.com/hsimages/gridrunningbboards.jpg",
    title: 'Running Boards',
    author: 'author',
    cols: 3,
    linkTo: `/shop/Nerf/Step Bar`,
  }, {
    img: "https://storage.googleapis.com/hsimages/gribbullbar.jpg",
    title: 'Bull Bars',
    author: 'author',
    cols: 1,
    linkTo: `/shop/Bull Bar`,
  }, {
    img: "https://storage.googleapis.com/hsimages/gridToneauCover.jpg",
    title: 'Tonneau Covers',
    author: 'author',
    cols: 2,
    linkTo: `/shop/Tonneau Cover/Truck Bed Cover`,
  }]

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridListTile: {
    '&:hover': {
      backgroundColor: '#e2c366',
      border: '7px solid yellow',
      borderColor: '#e2c366',
      cursor: 'pointer'
    }
  },
  gridList: {
    // width: 1200,
    height: 915,
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
  cssRoot: {
    color: theme.palette.getContrastText(red[600]),
    backgroundColor: red[600],
    '&:hover': {
      backgroundColor: red[700],
    },
  },

  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageTitle: {

    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4) }px ${theme.spacing(6)}px`,
  },
}));


export default function ImageGridList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList} cols={3}>
        {tileData.map((tile, index) => {
          let navLink = tile.linkTo
          // if (!_.isNil(props.browseCar)) {
          //   navLink = `${tile.linkTo}/${props.browseCar.vehicleString}`
          // }

          return (
            <GridListTile
              // onClick={() => history.push(navLink)} 
              className={classes.gridListTile} 
              key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
              <span className={classes.imageButton}>
                <Fab variant="extended" aria-label="Delete" className={classNames(classes.margin, classes.cssRoot)} >
                  Shop Here
              </Fab>
              </span>
              <GridListTileBar
                title={<Typography variant="h3" style={{ color: 'white', fontWeight: 'bold' }}>
                  {tile.title}
                </Typography>}
                titlePosition="top"
                actionIcon={
                  <IconButton className={classes.icon}>
                    <StarBorderIcon />
                  </IconButton>
                }
                actionPosition="left"
                className={classes.titleBar}
              />
            </GridListTile>
          )}
        )}
      </GridList>

    </div>
  );
}