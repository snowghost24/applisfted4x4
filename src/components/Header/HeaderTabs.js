import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles
  //  , useTheme
   , withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// import { List, Avatar } from 'antd';
// import Button from '@material-ui/core/Button';

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  }, list: {
    width: 250,
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
 
}));

export default function HeaderTabs() {
  const classes = useStyles();
  // const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [state, setState] = React.useState({ top: false });

  function handleChange(event, newValue) {
    setValue(newValue);
    setState({ ...state, top: true });
  }


  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };



  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={4}>
        {/* <List
        grid={{ gutter: 4, xs: 1, sm: 2, md: 4, lg: 4, xl: 4, xxl: 4 }}
        itemLayout="horizontal"
        dataSource={cards}
        renderItem={(item) => (
          <List.Item >
            <List.Item.Meta
              avatar={<a href={"/shop/" + getLink(item.linkto, props.browseCar)} style={{ padding: 0, marging: 0 }}><Avatar shape="square" src={item.imglink} style={{ minWidth: 65, minHeight: 50 }} />
              </a>}
              title={<a href={"/shop/" + getLink(item.linkto, props.browseCar)}>  <Typography variant="subheading" gutterBottom>
                {item.title}
              </Typography></a>}
              description={<a href={"/shop/" + getLink(item.linkto, props.browseCar)}>  <Typography variant="caption" gutterBottom align="left">
                {item.items}
              </Typography> </a>}
            />
          </List.Item> 
           )}
      /> */}
        </Grid>
      </Container>
    </div>
  );


  return (
 
    <div className={classes.root}>
      <ClickAwayListener onClickAway={toggleDrawer('top', false)}>
        <AppBar position="static" 
        color='inherit' 
        // color='default'
         elevation={0}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            // textColor="primary"
            // textColorInherit
            // centered
           
          >
            <StyledTab label="Item One" />
            <StyledTab label="Item Two" />
            <StyledTab label="Item Three" />
            <StyledTab label="Item Four" />
            <StyledTab label="Item Five" />
            <StyledTab label="Item Six" />
            <StyledTab label="Item Seven" />
            <StyledTab label="Item Eight" />
          </Tabs>
          <Drawer anchor="top" open={state.top} onClose={toggleDrawer('top', false)}>
            {value === 0 && <TabContainer> {fullList('top')} </TabContainer>}
            {value === 1 && <TabContainer>{fullList('top')}</TabContainer>}
            {value === 2 && <TabContainer>Item Three</TabContainer>}
            {value === 3 && <TabContainer>Item Four</TabContainer>}
            {value === 4 && <TabContainer>Item Five</TabContainer>}
            {value === 5 && <TabContainer>Item Six</TabContainer>}
            {value === 6 && <TabContainer>Item Seven</TabContainer>}
            {value === 7 && <TabContainer>Item Eight</TabContainer>}
          </Drawer>
        </AppBar>
      </ClickAwayListener>

    </div>
  );
}




const StyledTab = withStyles(theme => ({
  root: {
    minWidth: 72,
    fontWeight: theme.typography.fontWeightBold,
    marginRight: theme.spacing(4),
  },
  selected: {},
}))(props => <Tab {...props} />);
