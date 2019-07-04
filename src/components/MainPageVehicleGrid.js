import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import SelectVehicleForm from '../components/SelectVehicleForm';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  textStyle: {
    color: 'white',
    fontWeight: 'bold'
  }, paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: theme.newColors.darkGray,
    minWidth: '1000px'
  }
}));


export default function MainPageVehicleGrid() {
  let classes = useStyles()
  return (
    <div>
      <Grid>
        <Grid xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h4" className={classes.textStyle} gutterBottom>
              <span className={classes.textStyle}>Select Vehicle</span>
            </Typography>
            <SelectVehicleForm vehicleRedirect={(vehicleid) => this.vehicleRedirect(vehicleid)} title='Change Vehicle' />
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
