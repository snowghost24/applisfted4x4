import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));



export default function ContactNumber
() {
  const classes = useStyles();

  return (
    <div>
        <Button className={classes.button}>
        1-863-687-9000</Button>
     
    </div>
  );
}

