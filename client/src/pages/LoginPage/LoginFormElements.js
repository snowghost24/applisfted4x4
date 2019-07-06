import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { ValidatorComponent } from "react-form-validator-core";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";


const FakeFragment = (props) => props.children


export default class LoginFormElements extends Component {
  state = {
    showPassword: false
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    let {
      email,
      password
    } = this.props
    const { classes } = this.props;

    return (
      <FakeFragment>

        <TextValidator
         onFocus={this.props.hideErros}
          // className={classes.textField}
          required
          label="Email"
          onChange={this.props.handleChange}
          name="email"
          value={email}
          validators={["required", "isEmail"]}
          errorMessages={["this field is required", "email is not valid"]}
        />
        <TextValidator
         onFocus={this.props.hideErros}
          // className={classes.textField}
          required
          label="Password"
          onChange={this.props.handleChange}
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
      </FakeFragment>
    );
  }
}
// export default withStyles(stylesFields)(LoginFormElements);


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