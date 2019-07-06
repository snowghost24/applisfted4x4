import React from 'react';
import ReactDOM from 'react-dom';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
import { makeStyles , withStyles } from '@material-ui/core/styles';

import OutlinedInput from '@material-ui/core/OutlinedInput';
// import { getNthOccurance , createVehicleInfo} from '../utils/helper';
// import { storeBrowsedVehicles } from '../../../firebase/db';
// import API from "../utils/API";
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';
import purple from '@material-ui/core/colors/purple';

// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { setCurrentVehicle } from '../actions/postActions';
// import { compose } from 'recompose'

// const useStyles = makeStyles(theme => ({
//   container: {
//     display: "flex",
//     flexWrap: "wrap",
//     marginTop:'20px',
//     justifyContent:'center'
//   },
//   margin: {
//     margin: theme.spacing.unit
//   },
//   cssLabel: {
//     color: "black",
//     "&$cssFocused": {
//       color: "black"
//     }
//   },
//   cssFocused: {},
//   cssUnderline: {
//     "&:after": {
//       borderBottomColor: purple[500]
//     }
//   },
//   selectEmpty: {
//     //this moves the label outside the box
//     marginTop: theme.spacing.unit * -0.8
//   },

//   selectMenu: {
//     backgroundColor: "white",
//     "&:focus": {
//       backgroundColor: "white",
//       borderRadius: 4,
//       borderColor: "blue",
//       boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
//     }
//   },  formControl: {
//     margin: theme.spacing.unit,
//     minWidth: 170,
//   },

//   button: {
//     marginTop:2,
//     marginLeft:5,
//     background: '#ff0000',
//     borderRadius: 4,
//     border: 0,
//     height: 54,
//     padding: '0 30px',
//     minWidth: 170,
//     color: theme.palette.getContrastText(red[600]),
//     backgroundColor: red[600],
//     '&:hover': {
//       backgroundColor: red[700],
//     },
//     '&:disabled': {
//     color:'lightgray'
//     },
//   },
// }));

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    marginTop:'20px',
    justifyContent:'center'
  },
  margin: {
    margin: theme.spacing(1)
  },
  cssLabel: {
    color: "black",
    "&$cssFocused": {
      color: "black"
    }
  },
  cssFocused: {},
  cssUnderline: {
    "&:after": {
      borderBottomColor: purple[500]
    }
  },
  selectEmpty: {
    //this moves the label outside the box
    marginTop: theme.spacing(1 * -0.8) 
  },

  selectMenu: {
    backgroundColor: "white",
    "&:focus": {
      backgroundColor: "white",
      borderRadius: 4,
      borderColor: "blue",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  },  formControl: {
    margin: theme.spacing(1),
    minWidth: 170,
  },

  button: {
    marginTop:2,
    marginLeft:5,
    background: '#ff0000',
    borderRadius: 4,
    border: 0,
    height: 54,
    padding: '0 30px',
    minWidth: 170,
    color: theme.palette.getContrastText(red[600]),
    backgroundColor: red[600],
    '&:hover': {
      backgroundColor: red[700],
    },
    '&:disabled': {
    color:'lightgray'
    },
  },
});



class SelectVehicleForm extends React.Component {
  state = {
    year: '',
    make: '',
    model: '',
    yearOptions: [],
    makeOptions: [],
    modelOptions: [],
    disableMake: true,
    labelWidth: 32,
    makeDisabler: true,
    modelDisabler: true,
    submitDisabled: true
  };


  // componentWillMount() {
  //   API.getYearSearch().then((res) => {
  //     this.setState({
  //       yearOptions: res.data,
  //       //TODO: might need to set this up correcly later
  //       labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
  //     })
  //   })
  // }

  // handleChangeYear = name => event => {
  //   let { year, make, model } = this.state

  //   if (make != '' && name == 'year') {
  //     API.getMakeSearch(event.target.value).then((res) => {
  //       this.setState({
  //         [name]: event.target.value, make: '', model: '', makeOptions: res.data, makeDisabler: false, modelDisabler: true, submitDisabled: true
  //       })
  //     })
  //   } else {
  //     API.getMakeSearch(event.target.value).then((res) => {
  //       this.setState({
  //         [name]: event.target.value, makeOptions: res.data, makeDisabler: false, modelDisabler: true, submitDisabled: true
  //       })
  //     })
  //   }

  // };


  // handleChangeMake = name => event => {
  //   let { year, make, model } = this.state

  //   if (model != '' && name == 'make') {
  //     API.getModelSearch(year, event.target.value).then((res) => {
  //       this.setState({
  //         [name]: event.target.value, model: '', modelOptions: res.data, modelDisabler: false, submitDisabled: true
  //       })
  //     })
  //   } else {
  //     API.getModelSearch(year, event.target.value).then((res) => {
  //       this.setState({
  //         [name]: event.target.value, modelOptions: res.data, modelDisabler: false, submitDisabled: true
  //       })
  //     })
  //   }
  // };

  // handleChangeModel = name => event => {
  //   this.setState({
  //     [name]: event.target.value, submitDisabled: false
  //   })
  // };

  // handleSave() {
  
  //     // Here we take the selected vehicle and push it to the url
  //     let { year, make, model } = this.state
  //     let vehicleid = `${year}-${make}-${model}`
  //     console.log('we hit it')
  //     this.props.setCurrentVehicle(createVehicleInfo(vehicleid))
  //     // this.props.vehicleRedirect(vehicleid)


  //     // let location = Object.assign({}, this.props.history.location);
  //     // location.pathname = `${location.pathname}/${vehicleid}`
  //     // this.props.history.push(location)
  // }



  render() {
    const {classes } = this.props
   

    return (
      <div>
            <form className={classes.container}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            FormLabelClasses={{
              root: classes.cssLabel,
              focused: classes.cssFocused
            }}
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-year-simple"
          >
            Year
          </InputLabel>
          <Select
            classes={{ selectMenu: classes.selectMenu }}
            className={classes.selectEmpty}
            value={this.state.year || ''}
            // TODO:bring this back
            // onChange={this.handleChangeYear('year')}
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name="year"
                id="outlined-age-simple"
              />
            }
          >
            {/* TODO:bring this back */}
        {/* {this.state.yearOptions.length < 1 ? null : this.state.yearOptions.map((item) => {
                    return (
                      <MenuItem value={item.year} key={item.year}>{item.year}</MenuItem>
                    )
                  })} */}
          </Select>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            FormLabelClasses={{
              root: classes.cssLabel,
              focused: classes.cssFocused
            }}
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-make-simple"
          >
            Make
          </InputLabel>
          <Select
            classes={{ selectMenu: classes.selectMenu }}
            className={classes.selectEmpty}
            value={this.state.make || ''}
            // TODO:'bring this back'
            // onChange={this.handleChangeMake('make')}
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name="make"
                id="outlined-make-simple"
              />
            }
          >
            TODO:'bring this back'
        {/* {this.state.makeOptions.length < 1 ? null : this.state.makeOptions.map((item) => {
                    return (
                      <MenuItem value={item.make} key={item.make}>{item.make}</MenuItem>
                    )
                  })} */}
          </Select>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            FormLabelClasses={{
              root: classes.cssLabel,
              focused: classes.cssFocused
            }}
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-model-simple"
          >
            Model
          </InputLabel>
          <Select
            classes={{ selectMenu: classes.selectMenu }}
            className={classes.selectEmpty}
            value={this.state.model || ''}
              // TODO:bring this back
            // onChange={this.handleChangeModel('model')}
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name="model"
                id="outlined-model-simple"
              />
            }
          >
               {/* TODO:bring this back */}
          {/* {this.state.modelOptions.length < 1 ? null : this.state.modelOptions.map((item) => {
                    return (
                      <MenuItem value={item.model} key={item.model}>{item.model}</MenuItem>
                    )
                  })} */}
          </Select>
        </FormControl>
       
        <FormControl>
        <Button disabled={this.state.submitDisabled} onClick={() => this.handleSave()} color="primary" className={classes.button} >
        Select Vehicle
      </Button>
      </FormControl>
   
            </form>

      </div>
    );
  }
}



export default withStyles(styles)(SelectVehicleForm)
// SelectVehicleForm.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// function mapActionsToProps(dispatch) {
//   return bindActionCreators({
//     setCurrentVehicle
//   }, dispatch);
// }

// const mapStateToProps = (state) => ({
//   authUser: state.sessionState.authUser,
// });

// export default connect(mapStateToProps, mapActionsToProps )(withStyles(styles)(SelectVehicleForm))

// compose()




