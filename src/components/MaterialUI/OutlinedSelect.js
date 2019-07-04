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
    minWidth: 220,
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
    const { selectionOption, index, classes, selectedOptionHandler, columnInfo, selectedArray } = this.props
    let selectionName = Object.keys(selectionOption)[0]
    let availableOptions = selectionOption[Object.keys(selectionOption)[0]]
    let proppedInputValue;
    let tempIndex = index + 1

    if (selectedArray.length === tempIndex || selectedArray.length > tempIndex && selectedArray.length !== 0) {
      proppedInputValue = selectedArray[index].value
    } else {
      proppedInputValue = ''
    }

    return (
      <div className={classes.root} >
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-age-simple"
          >
            {selectionName}
          </InputLabel>
          <Select
            value={proppedInputValue}
            onChange={(e) => selectedOptionHandler(e, index, columnInfo)}
            inputRef={ref => {
              this.input = ref;
            }}
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name={selectionName}
                id="outlined-age-simple"
              />
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {availableOptions.map((element, index) => {
              let selectKey = Object.values(element)[0]
              return (
                <MenuItem value={selectKey}>
                  <em>{selectKey}</em>
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </div>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);
