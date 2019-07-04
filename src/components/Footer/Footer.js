import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Email from '@material-ui/icons/Email';
import Grid from '@material-ui/core/Grid';
import { notification } from 'antd';
import Container from '@material-ui/core/Container';
import withWidth from '@material-ui/core/withWidth';
import MyFooterContentSmall from './FooterContentSmall';
import FooterContentBig from './FooterContentBig'
import * as routes from '../../constants/routes';
// import API from '../../utils/API'

const CustomerServiceLinks = [
  { linkText: 'Help Center', serviceLink: routes.HELPCENTER , theHash:'' ,theSearch:''},
  { linkText: 'Account', serviceLink: routes.CLIENTACCOUNT , theHash:'',theSearch:''},
  { linkText: 'Track My Order', serviceLink: routes.CLIENTACCOUNT, theHash:'orders',theSearch:'?sort=kane'},
  { linkText: 'Return Policy', serviceLink: routes.HELPCENTER , theHash:'returns',theSearch:'?activeItemEditReturns=return items'},
  { linkText: 'Contact Center', serviceLink: routes.CONTACTUS , theHash:'',theSearch:''}
]

const InformationLinks = [
  { linkText: 'About Us', serviceLink: routes.ABOUTUS },
  { linkText: 'HighStandards4x4', serviceLink: 'https://www.highstandards4x4.com/' },
]


const ContactLinks = [
  { linkText: 'Contact Us', serviceLink: routes.CONTACT },
]


const styles = theme => ({
  root: {
    display: 'flex',
    minWidth: 400,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    justifyContent: 'flex-start'
  },
  input: {
    flex: 1,
  },
  contentSpacing:{
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(10)
  },darkBg:{
    backgroundColor: theme.newColors.darkGray,
     paddingBottom: 16,
      paddingTop: 16
  }
});



function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Copyright © 2018-2019 Lifted4x4parts.com. All rights reserved.
    </Typography>
  );
}



class MyFooterWithWidth extends React.Component {
  render() {
    let classes = this.props.classes
    if (this.props.width === 'sm' || this.props.width === 'xs') {
      return ( 
      <div>
        <MyFooterContentSmall 
          CustomerServiceLinks={CustomerServiceLinks}
          InformationLinks={InformationLinks}
          ContactLinks={ContactLinks} />
      </div> )
    } else {
      return (
      <div>
        <FooterContentBig classes={classes} 
          CustomerServiceLinks={CustomerServiceLinks}
          InformationLinks={InformationLinks}
          ContactLinks={ContactLinks}/>
      </div>
      )
    }
  }
}

const MyFooterContent = withWidth()(MyFooterWithWidth);

class Footer extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
    this.state = {
      open: false,
      fullWidth: true,
      maxWidth: 'lg',
      signUpEmail: ''
    }

  }

  handleChange = event => {
    this.setState({
      signUpEmail: event.target.value,
    });
  };

  handleSubmit = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.signUpEmail)) {
      //  TODO:bring logic back
      // API.saveNewsLetterAddress({ address: this.state.signUpEmail }).then((res) => {
      //   if (res.data.ok) {
      //     notification.success({
      //       message: 'Email Registered Success',
      //       description:
      //         'Your email has been added to our newsletter',
      //     });
      //     this.setState({
      //       signUpEmail: '',
      //     });
      //   } else {
      //     notification.error({
      //       message: 'Email Registered Failed',
      //       description:
      //         'An error occurred while adding your address. Please contact customer serveice',
      //     });
      //     this.setState({
      //       signUpEmail: '',
      //     });
      //   }
      // })
    } else {
      notification.warning({
        message: 'Invalid Email',
        description:
          'Please enter a valid email address',
      });
    }
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <footer className={classes.footer}>
          <div className={classes.darkBg} >
          <Container maxWidth="lg">
            <Grid container   justify="center"  alignItems="center" >
              <Grid item xs={12} md={3}>
                <Typography variant="h4"  style={{ color: 'white'}}>
                  Stay Connected
                </Typography>
              </Grid>

              <Grid  item xs={12} md={5} >
       
                <div style={{display:'flex', alignContent:'center'}}>
                <Typography variant="subtitle1" style={{ color: 'lightgray', alignContent: 'center', alignItems: "center" }}>
                  Sign up for Special Offers, News, & Promos from Lifted4x4parts.
                </Typography>
                </div>
               
              </Grid>

              <Grid item xs={12} md={4}>
                <Paper className={classes.root} elevation={1}>
                  <IconButton aria-label="Menu" color="primary">
                    <Email />
                  </IconButton>
                  <InputBase className={classes.input} placeholder="Enter Email Here"
                    fullWidth
                    value={this.state.signUpEmail}
                    onChange={this.handleChange} />
                  <Button color="primary" className={classes.iconButton} aria-label="Directions" onClick={this.handleSubmit}>
                    Sign Up
                  </Button>
                </Paper>
              </Grid>
            </Grid>
            </Container>
          </div>
          <div>
          <Container maxWidth="lg">
          <div className={classes.container} style={{ paddingBottom: 22, paddingTop: 22 }}>
            <MyFooterContent  classes={classes}/>
          </div>
        
          </Container >
          </div>
          <div style={{ paddingBottom: 22, paddingTop: 22, backgroundColor: '#eaeaea' }}>
            <MadeWithLove />
          </div>
        </footer>
      </div>
    )
  }
}



export default withStyles(styles)(Footer);

