import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Logo from '../../assets/images/liftedlogo/high-res/logo.png'
// import { Image } from 'semantic-ui-react/dist/commonjs';
import LoginContainer from './LogInContainer';
import SignUpContainer from './SignUpContainer';
import parser from 'query-string-parser'
// import { withRouter, } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes'
import { connect } from "react-redux";
import LogoButton from '../../components/LogoButton';
import HeaderSimple from '../../components/HeaderSimple';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(6))]: {
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

});

const MyLink = props => <Link to={routes.LANDING} {...props} />

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radioValue: 'b',
    }
    this.handleChangeRadio = this.handleChangeRadio.bind(this)
  }

  // componentDidMount() {
  //   if (parser.fromQuery(this.props.location.search).use === 'signup') {
  //     this.setState({ radioValue: 'b' })
  //   }
  // }


  handleChangeRadio = event => {
    this.setState({ radioValue: event.target.value });
  }


  render() {
    // const { from } = this.props.location.state || { from: { pathname: routes.LANDING } }
    // let logInRedirect = null
    // if (this.props.authUser) {
    //   logInRedirect = <Redirect to={from.pathname} />
    // }


    let { classes } = this.props
    return (
      <div>
        <HeaderSimple />
        <main className={classes.main}>
          {/* {logInRedirect} */}
          <CssBaseline />
          <Paper className={classes.paper}>
            <LogoButton imageSize='big' />
            {this.state.radioValue === 'a' ?
              <LoginContainer {...this.props} radioValue={this.state.radioValue} handleChangeRadio={this.handleChangeRadio} /> :
              <SignUpContainer {...this.props} radioValue={this.state.radioValue} handleChangeRadio={this.handleChangeRadio} />}
          </Paper>
        </main>
      </div>
    )
  }
}

// LoginPage.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// function mapStateToProps(state) {
//   return {
//     authUser: state.sessionState.authUser,

//   }
// }


export default withStyles(styles)(LoginPage)

// connect(mapStateToProps, null)()










