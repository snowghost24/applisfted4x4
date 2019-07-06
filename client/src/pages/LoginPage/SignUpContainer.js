import React, { Component } from 'react';
import SignUpFormElements from './SignUpFormElements';
// import { Divider, Icon, Button as ButtonSUR } from 'semantic-ui-react';
// import { auth, db } from '../../firebase';
import { ValidatorForm } from "react-material-ui-form-validator";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { Link, Redirect } from 'react-router-dom';
import { ALL_PRODUCTS } from '../../constants/routes';
import { withStyles } from '@material-ui/core/styles';
import FacebookBoxIcon from 'mdi-material-ui/FacebookBox';
import GoogleIcon from 'mdi-material-ui/Google';

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



class SignUpContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      viewError: false,
      redirect: false,
      newConfirmedPassword: '',
      newPassword: '',
      newEmail: '',
      firstName:'',
      lastName:''
    }
  }
// TODO:Bring this back
//   componentDidMount() {
   
//     // custom rule will have name 'isPasswordMatch'
//     ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
//       if (value !== this.state.newPassword) {
//         return false;
//       }
//       return true;
//     });
//   }

//  submitHandlerSignUp = (event) => {
//   event.preventDefault();
//   let {newPassword,
//     newEmail,firstName, lastName} = this.state
//     const { history } = this.props;
   

//     // use this to create the user auth account
//     auth.doCreateUserWithEmailAndPassword(newEmail, newPassword)
//       .then(authUser => {
//         let name = `${firstName} ${lastName}`
//         // adds display name to the user
//         auth.updateDisplayName(name)
//           // if there is an error it will be caught below
//          // save the user to the data base along with the email
//           db.doCreateUser(firstName, lastName, authUser.user.uid, newEmail, 'Firebase')
//             .then((response) => {
//               console.log('new user response',response)
//             })
//       })
//       .catch(error => {
//         this.setState({error: error.message, viewError: true });
//       })
//   }

//   signInGoogle = () => {
//     let logInResponse;
//     auth.googleSignIn().then((authResponse) => {
//       logInResponse = authResponse
//       return authResponse
//     })
//     .then((userData)=>{
//       let userStatus = db.onceGetIndividualUser(userData.uid)
//       return userStatus
//     }).then((userInfo)=>{
//     let foundUser = userInfo.val()
//       // if the value is null
//       // save the user to the databbase
//       if(!foundUser){
//         // save user infor to the data
//         db.doCreateUser(logInResponse.uid, logInResponse.email, 'Google')
//         .then(response => {
//           this.setRedirect()
//         })
//       } else {
//         this.setRedirect()
//       }
//       // if the user is all ready saved just redirect to homepage   
//     }).catch(error => {
//       this.setState({ error: error.message, viewError: true });
//     })
//   }


//   signInFacebook = () => {
//     let logInResponse;
//     auth.facebookSignIn().then((authResponse) => {
//       logInResponse = authResponse
//       return authResponse
//     })
//     .then((userData)=>{
//       let userStatus = db.onceGetIndividualUser(userData.uid)
//       return userStatus
//     }).then((userInfo)=>{
//     let foundUser = userInfo.val()
//       // if the value is null
//       // save the user to the databbase
//       if(!foundUser){
//         // save user infor to the data
//         db.doCreateUser(logInResponse.uid, logInResponse.email, 'Facebook')
//         .then(response => {
//           this.setRedirect()
//         })
//       } else {
//         this.setRedirect()
//       }
//       // if the user is all ready saved just redirect to homepage   
//     }).catch(error => {
//       this.setState({ error: error.message, viewError: true });
//     })
//   }


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

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props
    // const { from } = this.props.location.state || { from: { pathname: ALL_PRODUCTS } }
    const { error, viewError } = this.state;
    let displayError = null
    if (error !== null && viewError === true) {
      displayError = <Typography variant="body2" gutterBottom style={{ color: 'red' }}>
        {error}
      </Typography>
    }

    let formTitle = 'Sign Up'
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
          onSubmit={this.submitHandlerSignUp}
          onError={errors => console.log(errors)}
        >
          <SignUpFormElements
          firstName={this.state.firstName} 
          lastName={this.state.lastName} 
           newConfirmedPassword={this.state.newConfirmedPassword} newPassword={this.state.newPassword} newEmail={this.state.newEmail} handleChange={this.handleChange} hideErros={this.hideErros}/>
          {displayError}
          <Typography variant="body2" gutterBottom style={{ color: 'red' }}>
      By creating an account, you are agreeing to our privacy    <Link to="/passwordreset">
      policy and terms of use
          </Link>
      </Typography>
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


export default withStyles(styles)(SignUpContainer);
