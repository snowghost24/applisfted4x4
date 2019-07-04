import React from 'react';
import Typography from '@material-ui/core/Typography';
import Email from '@material-ui/icons/Email';
import Grid from '@material-ui/core/Grid';
import LogoButton from '../LogoButton'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import LocationOn from '@material-ui/icons/LocationOn';
import Phone from '@material-ui/icons/Phone';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';



const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '0px'
  },
  avatarMargin: {
    marginRight:theme.spacing(1),
  }
}));

const FooterContentBig = (props) => {
  const classes = useStyles();
 
  return (
    <div >
      <Grid container spacing={5}>
        <Grid item xs={6} sm={3}>
          <LogoButton imageSize='big' />
        </Grid>

        <Grid item xs={6} sm={3} >
          <div style={{ justifyContent: 'center' }}>
            <Typography variant="h6" gutterBottom>
              CUSTOMER SERVICE
            </Typography>
            {/* the props from the button get passed to the component */}
            {props.CustomerServiceLinks.map((element, index) => {
              return (
                <div key={index}>
                  <Link component={RouterLink} to={{
                    pathname: `${element.serviceLink}`,
                    search: `${element.theSearch}`,
                    hash: `${element.theHash}`
                  }}>
                    {element.linkText}
                  </Link>
                  <br></br>
                </div>
              )
            })}
          </div>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Typography variant="h6" gutterBottom>
            INFORMATION
         </Typography>
          {props.InformationLinks.map((element, index) => {
            return (
              <div key={index}>
                <Link component={RouterLink} to={{
                  pathname: `${element.serviceLink}`,
                  search: `${element.theSearch}`,
                  hash: `${element.theHash}`
                }}>
                  {element.linkText}
                </Link>

                <br></br>
              </div>
            )
          })}
        </Grid>

        <Grid item xs={6} sm={3}>
          <Typography variant="h6" >
            CONTACT
         </Typography>
          <List className={classes.root} >
            <ListItem >
              <Avatar className={classes.avatarMargin}>
                <LocationOn />
              </Avatar>
              <ListItemText primary="Lifted4x4parts.com" secondary={
                <React.Fragment>
                  <Typography component="span" className={props.classes.inline} color="textPrimary">
                    923 West Memorial Blvd
              </Typography>
                  <Typography component="span" className={props.classes.inline} color="textPrimary">
                    Lakeland, FL 33815
              </Typography>
                </React.Fragment>} />
            </ListItem>
            <ListItem  >
              <Avatar className={classes.avatarMargin}>
                <Phone />
              </Avatar>
              <ListItemText primary="(863) 687-9000" />
            </ListItem>
            <ListItem >
              <Avatar className={classes.avatarMargin}>
                <Email />
              </Avatar>
              {/* TODO:change this to lifted4x4partsemail */}
              <ListItemText primary="4x4@highstandars.com" />
            </ListItem>
          </List>
        </Grid>

      </Grid>
    </div>
  )
}


export default FooterContentBig