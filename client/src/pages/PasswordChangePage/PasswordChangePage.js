import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Logo from '../../assets/images/liftedlogo/high-res/logo.png'
// import { Image } from 'semantic-ui-react/dist/commonjs';
import PasswordChangeForm from './PasswordChangeForm';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import { connect } from "react-redux";
import { compose } from "recompose";
import LogoButton from '../../components/LogoButton';
// import { db , auth} from '../../firebase';

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

class PasswordChangePage extends Component {
  state = { renderRedirect: false }

  // componentDidMount() {

  //   // if the user is not logged in he will be redirected later
  //   if (this.props.authUser) {
  //     db.onceGetIndividualUser(this.props.authUser.uid).then((userInfo) => {
     
  //       let response = userInfo.val()
  //       console.log('providers',response)
  //       if (response.authType === 'Google' || response.authType === 'Facebook') {
  //         this.setState({ renderRedirect: true })
  //       }
  //     })
  //   } 
  //   else if(!this.props.authUser){
  //     // if the user is not authenticated redirect them
  //     this.setState({ renderRedirect: true })
  //   }
  // }

  render() {
    let GoogleFacebookRedirect = null
    if (this.state.renderRedirect) {
      GoogleFacebookRedirect = <Redirect to={routes.ALL_PRODUCTS} />
    }

    let { classes } = this.props
    return (
      <main className={classes.main}>
        {/* {GoogleFacebookRedirect} */}
        <CssBaseline />
        <Paper className={classes.paper}>
            <LogoButton />
          <PasswordChangeForm {...this.props} />
        </Paper>
      </main>
    )
  }
}

PasswordChangePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

// function mapStateToProps(state) {
//   return {
//     authUser: state.sessionState.authUser
//   }
// }


// export default compose(connect(mapStateToProps, null))(withStyles(styles)(PasswordChangePage));

export default withStyles(styles)(PasswordChangePage)   