import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from "react-router-dom";
import ListItemText from '@material-ui/core/ListItemText';
import _ from 'lodash'
import * as routes from '../../../constants/routes';
//TODO:add the brand link to constans and below

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,
  },
});

class ShortListBrand extends React.Component {
  state = {
    selectedIndex: 0,
  };

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };


  listOfItems() {
    let newArray = this.props.brand.slice(0, 6)
    return newArray.map((brandInfo) => {
    
      // TODO: make this work when brand page is set
      let linkTo = `/item/${brandInfo.brand}/`
      return(
        <ListItem
        key={brandInfo.brand}
         to={linkTo}
           button
           component={this.renderLink}
         >
        {/* secondary="Jan 9, 2014"  */}
           <ListItemText primary={brandInfo.brand} 
           />
         </ListItem> 
          )
    })
  }
// This is here because its required do not remove
// this.props.to is passed through the list item
  renderLink = itemProps => <Link to={this.props.to} {...itemProps} />;

  render() {
    const { classes, brand } = this.props;

    return (
      <div className={classes.root}>
        <List component="nav" dense={true}>
        {_.isNil(brand) || brand.length  < 1 ? null :this.listOfItems()
        }
          
          {/* TODO:When results come send option to view all options */}
          {/* <ListItem
         to={routes.ALL_PRODUCTS}
           button
           component={this.renderLink}
         >
        
           <ListItemText primary="See All Brands"/>
         </ListItem>  */}
        </List>
      </div>
    );
  }
}

ShortListBrand.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShortListBrand);