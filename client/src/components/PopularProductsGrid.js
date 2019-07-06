import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';


const image1 = 'https://storage.googleapis.com/hsimages/rim1.jpg'
const image2 = 'https://storage.googleapis.com/hsimages/wheels.jpg'
const image3 = 'https://storage.googleapis.com/hsimages/bumperfinal.jpg'
const image4 = 'https://storage.googleapis.com/hsimages/horse.jpg'
const image5 = 'https://storage.googleapis.com/hsimages/procomp1.jpg'

const tileData = [{
  img: image5,
  title: 'Lift Kits',
  author: 'author',
  linkTo: `/shop/Lift Kit-Suspension`,
},
{
  img: image1,
  title: 'Air Suspension System',
  author: 'author',
  linkTo: `/shop/Air Suspension System`,
},
{
  img: image3,
  title: 'Bumbers',
  author: 'author',
  linkTo: `shop/Bumper- Rear`
},
{
  img: image2,
  title: 'Wheels',
  author: 'author',
  linkTo: `/shop/wheels`
},
{
  img: image4,
  title: 'Bed Bars',
  author: 'author',
  linkTo: '/shop/Sport Bar/Roll Bar',
},];


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  }, 
   gridListTile: {
    '&:hover': {
      backgroundColor: '#0069d9',
      border: '5px solid yellow',
      borderColor: '#e2c366',
      cursor: 'pointer'
    }
  },
  title: {
    color: theme.newColors.logoYellow,
  },
  titleBar: {
    background:
    'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  }, button: {
    margin: theme.spacing(1),
  },

}));


export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} className={classes.gridListTile} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}