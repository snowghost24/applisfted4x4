import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from "react-router-dom";
import ListItemText from '@material-ui/core/ListItemText';
import _ from 'lodash'
import * as routes from '../../../constants/routes';

//TODO:remove / from category links because it messes up routing
// or create a new table for category list
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});

class SelectedListItem extends React.Component {
  state = {
    selectedIndex: 0,
  };

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };


  listOfItems(vehicle, vehicleFound) {
    let newArray = this.props.catLinks.slice(0, 6)
  
    return newArray.map((categoryInfo) => {
      let linkTo
     if(vehicleFound === true){
      linkTo = `/browsevehicle/${vehicle}/${categoryInfo.catagory_tree}`
      } else {
        linkTo= `/shop/${categoryInfo.catagory_tree}`
      }
       
      return(
        <ListItem
        key={categoryInfo.catagory_tree}
         to={linkTo}
           button
           component={this.renderLink}
         >
      

           <ListItemText primary={categoryInfo.catagory_tree} 
             secondary={vehicle === null ? null : `for ${vehicle}` }
             
             
           />
         </ListItem> 
          )
    })
  }
// This is here because its required do not remove
// this.props.to is passed through the list item
  renderLink = itemProps => <Link to={this.props.to} {...itemProps} />;

  render() {
    const { classes, catLinks, vehicle, vehicleFound } = this.props;
    let sixLinks
    let linkMap

    // const sixLInks = catLinks.filter((cat,index) => index < 6)

    return (
      <div className={classes.root}>
        <List component="nav" dense={true}>
        {_.isNil(catLinks) || catLinks.length  < 1 ? null :this.listOfItems(vehicle, vehicleFound)
        }
          
          <ListItem
         to={routes.ALL_PRODUCTS}
           button
           component={this.renderLink}
         >
        
           <ListItemText primary="View All Categories"/>
         </ListItem> 
        </List>
      </div>
    );
  }
}

SelectedListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectedListItem);