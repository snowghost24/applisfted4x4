import React from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
// import { GarageOpen } from 'mdi-material-ui'
// 18636879000

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const LightTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

export default function GarageTooltip() {
  const classes = useStyles();

  return (
    <div>
      <LightTooltip title={<React.Fragment>
        <Typography >Tooltip with HTML</Typography>
        <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
        {"It's very engaging. Right?"}
        <Button className={classes.button}>Interactive</Button>
      </React.Fragment>} interactive>
        <Button className={classes.button}>
         Help Center</Button>
      </LightTooltip>
    </div>
  );
}

