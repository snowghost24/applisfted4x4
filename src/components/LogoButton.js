import Logo from '../assets/images/liftedlogo/high-res/logo.png'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// // const MyLink = props => <Link to={routes.ALL_PRODUCTS}  {...props} />
// const MyLink = props => <Link to='/' {...props} />





const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    padding:'2px'
  },
});

export default function LogoButton() {
  const classes = useStyles();

  return (
    <Card className={classes.card} square={true}  elevation={0}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="47"
          image={Logo}
          title="Contemplative Reptile"
        />
      </CardActionArea>
     
    </Card>
  );
}
