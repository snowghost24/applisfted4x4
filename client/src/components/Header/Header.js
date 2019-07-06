import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { fade, 
  makeStyles,
  //  useTheme 
  } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import LogoButton from '../LogoButton';
import GarageTooltip from './GarageTooltip';
import AccountTooltip from './AccountTooltip'
import CartTooltip from './CartTooltip';
import HeaderTabs from './HeaderTabs';
import SearchFieldContainer from './SearchFieldContainer';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  root: {
    flexGrow: 1,
    // this margin bring out the content from behind the nav
     marginBottom:130
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },elevateApp :{
    // we use this to elevate header aboved modal
    zIndex:1400,
    // marginBottom:200
  },
}));

export default function Header(props) {
  const classes = useStyles();
  // const theme = useTheme();
 

  return (
    <div className={classes.root}>
      <AppBar position='fixed' 
     color='inherit' 
      className={classes.elevateApp}>
        <Toolbar >
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Open drawer"
          >
            <MenuIcon />
          </IconButton>
          <LogoButton className={classes.title} noWrap/>

          <div className={classes.search}>
          <SearchFieldContainer />
            {/* <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'Search' }}
            /> */}
          </div>
          <div className={classes.grow} />

          <AccountTooltip />
          <GarageTooltip />
          <CartTooltip />
        
        </Toolbar>
        <Toolbar>
        <HeaderTabs />
        </Toolbar>
      </AppBar>
    </div>
  );
}