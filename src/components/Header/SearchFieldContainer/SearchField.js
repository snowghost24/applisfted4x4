import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import IconButton from '@material-ui/core/IconButton';
import ReactDOM from 'react-dom';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchResults from './SearchResults';
// TODO:bringthisback
// import API from '../../../utils/API';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
// import Switch from '@material-ui/core/Switch';
// import Divider from '@material-ui/core/Divider';
// import FilledInput from '@material-ui/core/FilledInput';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import Input from '@material-ui/core/Input';c
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import DialogContentText from '@material-ui/core/DialogContentText';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  dialogTitle: {
    backgroundColor: '#f3f3f3'
  }

});

class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
    // this.textInput = React.createRef();
    this.state = {
      open: false,
      fullWidth: true,
      maxWidth: 'lg',
      results: {},
      searchState: false,
    };

    // this.focusTextInput = this.focusTextInput.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.searchContent = this.searchContent.bind(this)
    this.searchContentOnPress = this.searchContentOnPress.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      if (this.state.open) {
        this.handleClose();
      }
    }
  }


  handleClickOpen = () => {
    this.setState({ open: true });

  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleMaxWidthChange = event => {
    this.setState({ maxWidth: event.target.value });
  };

  handleFullWidthChange = event => {
    this.setState({ fullWidth: event.target.checked });
  };

  handleButtonClick() {

    // clears any search results before the component opens
    let newResults = Object.assign({}, this.state.results);
    newResults.brand = []
    newResults.catLinks = []
    newResults.keyword = ''
    newResults.cat_tree = []
    newResults.products = []
    this.setState({ open: true, results: newResults });

    // removes focus from the input button after being clicked 
    document.activeElement.blur()
  }

  searchContent = (search) => {
    if (search == null || search == "" || search == undefined) {
    } else {
      this.setState((state) => {
        // Important: read `state` instead of `this.state` when updating.
        return { searchState: !state.searchState }
      });
      // TODO:bring this bback
      // API.searchKeyWords(search).then((res) => {
      //   this.setState({ results: res.data.results, searchState: false })
      // })
    }
  }


  searchContentOnPress = (e, search) => {
    if (e.key === 'Enter') {
      this.searchContent(search)
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment> <TextField
        id="outlined-full-width"
        label="Search Here"
        // style={{ margin: 8 }}
        placeholder="Search By Part #, Vehicle, Keyword, Category"
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        onClick={this.handleButtonClick}
        ref={(buttonDOM) => { this.buttonDOM = buttonDOM }}
      // onFocus={this.handleClickOpen}
      />

        <Dialog
          fullWidth={true}
          maxWidth='lg'
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="max-width-dialog-title"
        >
          <DialogTitle id="max-width-dialog-title" className={classes.dialogTitle} >
            <CustomText searchContentOnPress={this.searchContentOnPress} searchState={this.state.searchState} searchContent={this.searchContent} ref={refff => {
              return this.child = ReactDOM.findDOMNode(refff);
            }} />
          </DialogTitle>
          <DialogContent>


            {/* <DialogContentText>
              You can set my maximum width and whether to adapt or not.
            </DialogContentText> */}
            <SearchResults results={this.state.results} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

SearchField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(SearchField));



class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };

  }

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  componentDidMount() {
    this.labelRef.focus()
  }


  render() {
    const { classes } = this.props;
    return (
      <div>
        <FormControl fullWidth className={classes.formControl} variant="outlined">
          <InputLabel
            ref={refff => {
              this.labelRef = ReactDOM.findDOMNode(refff);
            }}
            htmlFor="component-outlined"
          >
            Search Here
          </InputLabel>
          <OutlinedInput

            id="component-outlined"
            value={this.state.search}
            onChange={this.handleChange}
            onKeyPress={(e) => this.props.searchContentOnPress(e, this.state.search)}

            labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
            endAdornment={
              <InputAdornment position="end">
                {this.props.searchState ? <CircularProgress className={classes.progress} /> : <IconButton
                  onClick={() => this.props.searchContent(this.state.search)}
                  className={classes.iconButton} aria-label="Search">
                  <SearchIcon />
                </IconButton>}
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    );
  }
}


CustomTextInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

const CustomText = withStyles(styles)(CustomTextInput);


