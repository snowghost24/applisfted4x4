import React from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';

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

export default function AccountTooltip() {
  const classes = useStyles();

  return (
    <div>
      <LightTooltip  title={   <React.Fragment>
            <Typography >Tooltip with HTML</Typography>
            <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
            {"It's very engaging. Right?"}
            <Button className={classes.button}>Account</Button>
          </React.Fragment>} interactive>
        <Button className={classes.button}> <svg style={{ width: '22px', height: '22px', marginBottom:'7px', marginRight:'7px' }} >
              <path fill="#000000" d="M19,20H17V11H7V20H5V9L12,5L19,9V20M8,12H16V14H8V12M8,15H16V17H8V15M16,18V20H8V18H16Z" />
            </svg>Account</Button>
      </LightTooltip>
    </div>
  );
}

