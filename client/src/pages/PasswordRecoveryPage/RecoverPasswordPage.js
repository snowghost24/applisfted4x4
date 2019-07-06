import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Logo from '../../assets/images/liftedlogo/high-res/logo.png'
// import { Image } from 'semantic-ui-react/dist/commonjs';
import RecoverPasswordForm from './RecoverPasswordForm';
// import SignUpContainer from './SignUpContainer';
import parser from 'query-string-parser'
import { withRouter, } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import LogoButton from '../../components/LogoButton'


const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(3 * 2))]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    marginTop: theme.spacing(3),
  },
});

const MyLink = props => <Link to={routes.ALL_PRODUCTS} {...props} />

class ResetPasswordPage extends Component {

  render() {
  
    let loggedInRedirect = null
    if(this.props.authUser){
      loggedInRedirect = <Redirect to={routes.ALL_PRODUCTS} />
    }
   
  
 
    let { classes } = this.props
    return (
      <main className={classes.main}>
        {loggedInRedirect}
        <CssBaseline />
        <Paper className={classes.paper}>
          <LogoButton />
       <RecoverPasswordForm {...this.props}  />
         
        </Paper>
      </main>
    )
  }
}

ResetPasswordPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

// function mapStateToProps(state) {
//   return {
//     authUser: state.sessionState.authUser,
//   }
// }

// export default withRouter(withStyles(styles)(ResetPasswordPage))

// export default connect(mapStateToProps, null)(withStyles(styles)(ResetPasswordPage))

export default withStyles(styles)(ResetPasswordPage)









