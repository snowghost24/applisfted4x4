import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom'
// import CardMedia from '@material-ui/core/CardMedia';
// import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '3 0 auto',
  },
  cover: {
    width: 60,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});

// do not remove this is necessary to link items
const MyLink = props => <Link to={props.to} {...props} />

function BrandCard(props) {
  const { classes, theme , brandInfo} = props;
  let linkTo = `/item/${brandInfo.brand}/`
  return (
    <Card className={classes.card} raised={false} elevation={0} >
      <div className={classes.details}>
        <CardContent className={classes.content} component={MyLink} to={linkTo}>
        <Typography variant="body2" gutterBottom>
        {brandInfo.brand}
        </Typography>
       
        </CardContent>
        {/* <div className={classes.controls}>
          <IconButton aria-label="Previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="Play/pause">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="Next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </div> */}
      </div>
      {/* <CardMedia
        className={classes.cover}
        image="https://www.tsw.com/img/land-rover-wheels-rims-redbourne-bashford-5-lug-matte-gunmetal-std-700.jpg"
        title="Live from space album cover"
      /> */}
    </Card>
  );
}

BrandCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(BrandCard);