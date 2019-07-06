import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { ValidatorComponent } from "react-form-validator-core";
import TextField from "@material-ui/core/TextField";
import { ValidatorForm } from "react-material-ui-form-validator";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import { auth } from '../../firebase';
import { notification } from 'antd';
// import * as routes from '../../constants/routes';
import { RECOVERPASSWORD } from '../../constants/routes';


const openNotificationWithIcon = (type, description) => {
  notification[type]({
    message: 'Success',
    description: description,
  });
};

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





class RecoverPasswordForm extends Component {
  state = {
    email: '',
    error: null,
    viewError: false,
    successMessage: false,

  };
  // TODO:bring back
  // handleSubmit = () => {

  //   auth.doPasswordReset(this.state.email)
  //     .then(() => {
  //       openNotificationWithIcon('success', 'Form was submitted successfully')
  //       this.setState({ email: '' })
  //     })
  //     .catch(error => {
  //       this.setState({ error: error.message, viewError: true });
  //     })
  // }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  hideErros = () => {
    if (this.state.viewError !== false) {
      this.setState({ viewError: false })
    }
  }

  render() {
    let { email } = this.state
    const { classes } = this.props;
    const { error, viewError } = this.state;
    let displayError = null
    if (error !== null && viewError === true) {
      displayError = <Typography variant="body2" gutterBottom style={{ color: 'red' }}>
        {error}
      </Typography>
    }

    return (
      <FakeFragment>
        <Typography component="h1" variant="h4" gutterBottom>
          Password Recovery
        </Typography>

        <ValidatorForm
          autoComplete="off"
          ref="form"
          onSubmit={this.handleSubmit}
          onError={errors => console.log(errors)}
        >
          <Typography variant="subtitle2" gutterBottom>
            Recover your account information using the form below. Please enter your registerd e-mail address and an e-mail will be sent to you that will enable you to recover your account password.
         </Typography>


          <TextValidator
            onFocus={this.hideErros}
            className={classes.textField}
            required
            label="Email"
            onChange={this.handleChange}
            name="email"
            value={email}
            validators={["required", "isEmail"]}
            errorMessages={["this field is required", "email is not valid"]}
          />
          {displayError}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Recover Password
          </Button>
        </ValidatorForm>
      </FakeFragment>
    );
  }
}
export default withStyles(stylesFields)(RecoverPasswordForm);

