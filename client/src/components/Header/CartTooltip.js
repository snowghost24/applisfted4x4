import React from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';

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
    zIndex:100010
  },
}))(Tooltip);

export default function CartTooltip() {
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
          <Badge className={classes.margin} badgeContent={7} color="secondary" style={{ marginRight: '4px' }}>
            <svg style={{ width: '22px', height: '22px', marginRight: '7px' }} >
              <path fill="#000000" d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" />
            </svg>
          </Badge>
          Cart</Button>
      </LightTooltip>
    </div>
  );
}

