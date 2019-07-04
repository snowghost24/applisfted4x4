import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

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
    maxWidth:'150px'
  },
  cover: {
    width: 100,
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

const MyLink = props => <Link to={props.to} {...props} />


function ProductCard(props) {
  const { classes, theme, productInfo } = props;
let createdLink =  `/item/${productInfo.brand}/${productInfo.name}`
  return (
    <Card className={classes.card} raised={false} elevation={0} >
      <CardMedia
      component={MyLink}  to={createdLink}
        className={classes.cover}
        image="https://www.tsw.com/img/land-rover-wheels-rims-redbourne-bashford-5-lug-matte-gunmetal-std-700.jpg"
        // image={productInfo.image}
        title= {productInfo.DISPLAY_NAME}
      />
      <div className={classes.details}>
        <CardContent className={classes.content} component={MyLink}  to={createdLink}>
        <Typography variant="body2" zeroMinWidth noWrap gutterBottom>
        {productInfo.DISPLAY_NAME}
   
        </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          {productInfo.brand}
          </Typography>
          <Typography variant="body2" gutterBottom>
          {productInfo.price}
        </Typography>
        </CardContent>

      </div>
    
    </Card>
  );
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ProductCard);