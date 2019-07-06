import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { ValidatorComponent } from "react-form-validator-core";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

// const stylesFields = theme => ({
//   textField: {
//     // marginLeft: theme.spacing.unit,
//     // marginRight: theme.spacing.unit,
//     minWidth: 250
//   }
// });
const FakeFragment = (props) => props.children


export default class SignUpFormElements extends Component {
  state = {
    showPassword: false,
    showConfirmedPassword:false
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };
  handleClickShowPasswordConfirm = () => {
    this.setState(state => ({ showConfirmedPassword: !state.showConfirmedPassword}));
  };

  render() {
    let {
      firstName,
      lastName,
      newEmail,
      newPassword,
      newConfirmedPassword
    } = this.props
    const { classes } = this.props;

    return (
      <FakeFragment>
       
           <TextValidator
          // className={classes.textField}
          onFocus={this.props.hideErros}
          required
          label="First Name"
          onChange={this.props.handleChange}
          name="firstName"
          value={firstName}
          validators={["required"]}
          errorMessages={["this field is required"]}
        />
           <TextValidator
          // className={classes.textField}
          onFocus={this.props.hideErros}
          required
          label="Last Name"
          onChange={this.props.handleChange}
          name="lastName"
          value={lastName}
          validators={["required"]}
          errorMessages={["this field is required"]}
        />

        <TextValidator
          // className={classes.textField}
          onFocus={this.props.hideErros}
          required
          label="Email"
          onChange={this.props.handleChange}
          name="newEmail"
          value={newEmail}
          validators={["required", "isEmail"]}
          errorMessages={["this field is required", "email is not valid"]}
        />
        <TextValidator
          // className={classes.textField}
          onFocus={this.props.hideErros}
          required
          label="Password"
          onChange={this.props.handleChange}
          name="newPassword"
          value={newPassword}
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
              <TextValidator
          // className={classes.textField}
          required
          label="Confirm Password"
          onChange={this.props.handleChange}
          name="newConfirmedPassword"
          value={newConfirmedPassword}
          validators={["required","isPasswordMatch"]}
          errorMessages={["this field is required","Passwords do not match"]}
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
      </FakeFragment>
    );
  }
}



class TextValidator extends ValidatorComponent {
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
// const TextValidator = withStyles(stylesFields)(TextValidatorPre);