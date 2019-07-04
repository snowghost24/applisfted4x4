import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 209,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class SimpleSelect extends Component {

  constructor(props) {
    super(props);
    this.state = {
      labelWidth: 0,
    };
  }

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }


  render() {
   
  let { onChangeHandler, classes, placeholder,options, value} = this.props
 

    return (
   
        <FormControl variant="outlined" className={classes.formControl} disabled={this.props.disabled}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-age-simple"
          >
            {placeholder}
          </InputLabel>
          <Select
            value={ value || ''}
            onChange={(e)=>onChangeHandler(e)}
            inputRef={ref => {
              this.input = ref;
            }}
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name={placeholder}
                id="outlined-age-simple"
              />
            }
          >
            {/* <MenuItem value="">
              <em>None</em>
            </MenuItem> */}
            {options.map((element, index) => {
              return (
                <MenuItem value={element.value}>
                  <em>{element.text}</em>
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
    
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);
