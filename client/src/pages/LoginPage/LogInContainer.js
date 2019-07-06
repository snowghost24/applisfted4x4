import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import LoginFormElements from './LoginFormElements';
// import { Divider, Icon, Button as ButtonSUR } from 'semantic-ui-react';
// TODO:Bring this bback
// import { auth, db } from '../../firebase';
import { ValidatorForm } from "react-material-ui-form-validator";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { RECOVERPASSWORD, ALL_PRODUCTS } from '../../constants/routes';
import FacebookBoxIcon from 'mdi-material-ui/FacebookBox';
import GoogleIcon from 'mdi-material-ui/Google';
import { withStyles } from '@material-ui/core/styles';


const styles = (theme) => ({
  buttonMobile: {
    marginBottom: theme.spacing(1.5)
  },

  facebook: {
    backgroundColor: '#3c5a99',
    color: '#ffffff'
  },

  google: {
    backgroundColor: '#db3236',
    color: '#ffffff'
  },
  icon: {
    marginRight: theme.spacing(0.5)
  }
});


class LogInContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null,
      viewError: false,
      redirect: false
    }
  }

  // submitHandlerLogIn = (event) => {
  //   let { email, password } = this.state
  //   event.preventDefault()
  //   auth.doSignInWithEmailAndPassword(email, password)
  //     .then(() => {
  //       this.setState({
  //         email: '',
  //         password: '',
  //       })
  //       this.setRedirect()
  //       // history.push(routes.LANDING);
  //     }).catch(error => {
  //       this.setState({ error: error.message, viewError: true });
  //     })
  // }


  // signInGoogle = () => {
  //   let logInResponse;
  //   auth.googleSignIn().then((authResponse) => {
  //     logInResponse = authResponse
  //     return authResponse
  //   })
  //   .then((userData)=>{
  //     let userStatus = db.onceGetIndividualUser(userData.uid)
  //     return userStatus
  //   }).then((userInfo)=>{
  //   let foundUser = userInfo.val()
  //     // if the value is null
  //     // save the user to the databbase
  //     if(!foundUser){
  //       // save user infor to the data
  //       db.doCreateUser(logInResponse.uid, logInResponse.email, 'Google')
  //       .then(response => {
  //         this.setRedirect()
  //       })
  //     } else {
  //       this.setRedirect()
  //     }
  //     // if the user is all ready saved just redirect to homepage   
  //   }).catch(error => {
  //     this.setState({ error: error.message, viewError: true });
  //   })
  // }


  // signInFacebook = () => {
  //   let logInResponse;
  //   auth.facebookSignIn().then((authResponse) => {
  //     logInResponse = authResponse
  //     return authResponse
  //   })
  //   .then((userData)=>{
  //     let userStatus = db.onceGetIndividualUser(userData.uid)
  //     return userStatus
  //   }).then((userInfo)=>{
  //   let foundUser = userInfo.val()
  //     // if the value is null
  //     // save the user to the databbase
  //     if(!foundUser){
  //       // save user infor to the data
  //       db.doCreateUser(logInResponse.uid, logInResponse.email, 'Facebook')
  //       .then(response => {
  //         this.setRedirect()
  //       })
  //     } else {
  //       this.setRedirect()
  //     }
  //     // if the user is all ready saved just redirect to homepage   
  //   }).catch(error => {
  //     this.setState({ error: error.message, viewError: true });
  //   })
  // }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }


  renderRedirect = (from) => {
    if (this.state.redirect) {
      return <Redirect to={from.pathname} />
    }
  }


  hideErros = () => {
    if (this.state.viewError !== false) {
      this.setState({ viewError: false })
    }
  }

  render() {
    // const { from } = this.props.location.state || { from: { pathname: ALL_PRODUCTS } }
    const { error, viewError } = this.state;
    let formTitle = 'Log In'
    let displayError = null
    if (error !== null && viewError === true) {
      displayError = <Typography variant="body2" gutterBottom style={{ color: 'red' }}>
        {error}
      </Typography>
    }

    const { classes } = this.props
    return (
      <React.Fragment>
        {/* {this.renderRedirect(from)} */}
        <Typography component="h1" variant="h4">
          {formTitle}
        </Typography>
        <ValidatorForm
          autoComplete="off"
          className={this.props.classes.form}
          // className={classes.container}
          ref="form"
          onSubmit={this.submitHandlerLogIn}
          onError={errors => console.log(errors)}
        >

          <LoginFormElements email={this.state.email} password={this.state.password} handleChange={this.handleChange} autoComplete="off" hideErros={this.hideErros} />
          {displayError}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={this.props.classes.submit}
          >
            {formTitle}
          </Button>
        </ValidatorForm>
        <div style={{ padding: 8 }}>
          <span style={{ paddingRight: 5 }}>Forgot Password? </span>
          <Link className="login-form-forgot" to={RECOVERPASSWORD}>
            Click Here
          </Link>
        </div>
        <FormControlLabel
          control={
            <Radio
              checked={this.props.radioValue === 'a'}
              onChange={this.props.handleChangeRadio}
              value="a"
              name="radio-button-demo"
              aria-label="A"
            />
          }
          label="I'm a returning customer"
        />
        <FormControlLabel
          control={
            <Radio
              checked={this.props.radioValue === 'b'}
              onChange={this.props.handleChangeRadio}
              value="b"
              name="radio-button-demo"
              aria-label="B"
            />
          }
          label="I'm a new customer "
        />
        <div className={classes.buttonMobile}>
          <Button className={classes.facebook}
            // disabled={isPerformingAuthAction} 
            variant="contained" onClick={this.signInFacebook}
          // onClick={() => onAuthProviderClick(new firebase.auth.FacebookAuthProvider())}
          >
            <FacebookBoxIcon className={classes.icon} />
            Facebook
            </Button>
        </div>
        <Button className={classes.google}
          // disabled={isPerformingAuthAction}
          variant="contained" onClick={this.signInGoogle}

        >
          <GoogleIcon className={classes.icon} />
          Google
            </Button>

      </React.Fragment>
    )
  }
}


export default withStyles(styles)(LogInContainer);
