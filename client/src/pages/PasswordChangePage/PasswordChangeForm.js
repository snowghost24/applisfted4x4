import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { ValidatorComponent } from "react-form-validator-core";
import TextField from "@material-ui/core/TextField";
import { ValidatorForm } from "react-material-ui-form-validator";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import { auth } from '../../firebase';
import { notification } from 'antd';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";


const stylesFields = theme => ({
  textField: {
    minWidth: 250
  }
});

const FakeFragment = (props) => props.children

class TextValidatorPre extends ValidatorComponent {
  render() {
    const {
      error,
      errorMessages,
      validators,
      requiredError,
      helperText,
      validatorListener,
      withRequiredValidator,
      ...rest
    } = this.props;
    const { isValid } = this.state;
    return (
      <TextField

        fullWidth
        {...rest}
        error={!isValid || error}
        helperText={(!isValid && this.getErrorMessage()) || helperText}
        variant="outlined"
        margin="normal"
      />
    );
  }
}
const TextValidator = withStyles(stylesFields)(TextValidatorPre);



class PasswordChangeForm extends Component {
  state = {
    email: '',
    password: '',
    newPassword: '',
    newConfirmedPassword: '',
    confirmedCredentials: false,
    error: null,
    reauthError: null,
    viewError: false,
    successMessage: false,
    showPassword: false,
    showNewPassword: false,
    showConfirmedPassword: false,
    viewPasswordError: false
  };

  // once the user re-enters their password they will then be 
  // abble to change their pass word
  // the email address and will be grabbed from the 
  // authenticated user reAuthenticate function
  // TODO:bring back
  // validateOldPassword = (e) => {
  //   if (e.target.value.length >= 7) {
  //     auth.reAuthenticate(e.target.value)
  //       .then((results) => {
  //         this.openNotificationWithIcon('success', 'Re-authentication was successful. Please enter new password')
  //         this.setState({ confirmedCredentials: true })
  //       })
  //       .catch(error => {
  //         this.setState({
  //           viewPasswordError: true,
  //           confirmedCredentials: false,
  //           reauthError: error.message
  //         })
  //       })

  //   }
  // }


  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleClickShowNewPassword = () => {
    this.setState(state => ({ showNewPassword: !state.showNewPassword }));
  };

  handleClickShowPasswordConfirm = () => {
    this.setState(state => ({ showConfirmedPassword: !state.showConfirmedPassword }));
  };

  // TODO:bring back
  // handleSubmit = (event) => {
  //   event.preventDefault();
    
  //   auth.doPasswordUpdate(this.state.newPassword)
  //     .then(() => {
  //       this.setState({ confirmedCredentials: false }, () => {
  //         // display success message
  //         this.openNotificationWithIcon('success', 'Password was change successfully')
  //         // reload the page to clear fields
  //         setTimeout(() => {
  //           window.location.reload()
  //         }, 2000);
  //       }
  //       );
  //     })
  //     .catch(error => {
  //       this.setState({ password: '', newPassword: '', newConfirmedPassword: '', }, () =>
  //         this.openNotificationWithIcon('error', `${error.message}`)
  //       );

  //     })

  // }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // this hides errors once the user re enters the form
  hideErros = () => {
    if (this.state.viewError !== false) {
      this.setState({ viewError: false })
    }
  }

  // this hides reauthentication errors on focus
  hideAuthErros = () => {
    if (this.state.viewPasswordError !== false) {
      this.setState({ viewPasswordError: false })
    }
  }

  // is passowrd is added as a external validation
  componentDidMount() {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== this.state.newPassword) {
        return false;
      }
      return true;
    });
  }

  openNotificationWithIcon = (type, description) => {
    notification[type]({
      message: 'Success',
      description: description,
    });
  }; b


  render() {
    let {
      password,
      newPassword,
      newConfirmedPassword,
      viewPasswordError,
      reauthError,
      error,
      viewError
    } = this.state

    const { classes } = this.props;


    let displayError = null
    if (error !== null && viewError === true) {
      displayError = <Typography variant="body2" gutterBottom style={{ color: 'red' }}>
        {error}
      </Typography>
    }

    let displayAuthError = null
    if (reauthError !== null && viewPasswordError === true) {
      displayAuthError = <Typography variant="body2" gutterBottom style={{ color: 'red' }}>
        {reauthError}
      </Typography>
    }

    return (
      <FakeFragment>
        <Typography component="h1" variant="h4" gutterBottom>
          Change Password
      </Typography>
        <Typography variant="subtitle2" gutterBottom>
          User form below to change your account password, re-Authenticate successfully to enter a new password.
          </Typography>

        <ValidatorForm
          autoComplete="off"
          ref="form"
          onSubmit={this.handleSubmit}
          onError={errors => console.log(errors)}
        >

          <TextValidator
            className={classes.textField}
            onBlur={this.validateOldPassword}
            onFocus={this.hideAuthErros}
            required
            label="Password"
            onChange={this.handleChange}
            name="password"
            value={password}
            validators={["required"]}
            errorMessages={["this field is required"]}
            type={this.state.showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                  >
                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          {displayAuthError}

          <TextValidator
            disabled={!this.state.confirmedCredentials}
            className={classes.textField}
            onFocus={this.hideErros}
            required
            label="New Password"
            onChange={this.handleChange}
            name="newPassword"
            value={newPassword}
            validators={["required", "minStringLength:7"]}
            errorMessages={["this field is required", "Password must be seven characters long"]}
            type={this.state.showNewPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowNewPassword}
                  >
                    {this.state.showNewPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <TextValidator
            disabled={!this.state.confirmedCredentials}
            className={classes.textField}
            required
            label="Confirm New Password"
            onChange={this.handleChange}
            name="newConfirmedPassword"
            value={newConfirmedPassword}
            validators={["required", "isPasswordMatch"]}
            errorMessages={["this field is required", "Passwords do not match"]}
            type={this.state.showConfirmedPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPasswordConfirm}
                  >
                    {this.state.showConfirmedPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          {displayError}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Change Password
          </Button>
        </ValidatorForm>
      </FakeFragment>
    );
  }
}
export default withStyles(stylesFields)(PasswordChangeForm);

