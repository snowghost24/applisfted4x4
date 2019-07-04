import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';




const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});



class ListItemLink2 extends React.Component {
  renderLink = itemProps => <Link to={this.props.to} {...itemProps} />;

  render() {
    const { icon, primary, secondary, to } = this.props;
    return (
      <ListItem button component={this.renderLink}>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText inset primary={primary} />
      </ListItem>

    );
  }
}



function SimpleExpansionPanel(props) {
  const { classes, CustomerServiceLinks, InformationLinks, ContactLinks } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>CUSTOMER SERVICE</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>

          <List component="nav">
            {CustomerServiceLinks.map((element,index) => {
              return (
                <ListItemLink2 to={element.serviceLink} primary={element.linkText} key={index} />
              )
            })}
          </List>

        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>INFORMATION</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List component="nav">
            {InformationLinks.map((element, index) => {
              return (
                <ListItemLink2 to={element.serviceLink} primary={element.linkText} key={index}/>
              )
            })}
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>CONTACT</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List component="nav">
            {ContactLinks.map((element, index) => {
              return (
                <ListItemLink2 to={element.serviceLink} primary={element.linkText} key={index} />
              )
            })}
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);