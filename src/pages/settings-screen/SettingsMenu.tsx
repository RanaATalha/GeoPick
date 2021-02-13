import * as React from 'react';
import Card from '../../components/Layouts/Card';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {Grid} from '@material-ui/core';
import WhiteLogo from '../welcome screen/WhiteLogo.svg';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);


export default function SettingsScreen() {
    
    return (
        <div style={{ background: '#1b1b1b' }}>
            <img src={WhiteLogo} alt="GeoPicK" className="WhiteLogo" />
            <Card background="white" title="Settings" split={1} >
                <Grid container spacing={4} direction="row" alignItems="center" justify="center">
                    <SettingsMenu />
                </Grid>
            </Card>
            <br />
        </div>
    );
}

const SettingsMenu = () => {

    const classes = useStyles();
    return(
        <List component="nav" className={classes.root} aria-label="mailbox folders">
        <ListItem button>
            <ListItemText primary="Account Settings" />
        </ListItem>
        <Divider />
        <ListItem button divider>
            <ListItemText primary="Notification Settings" />
        </ListItem>
        <ListItem button>
            <ListItemText primary="Accessibility Settings" />
        </ListItem>
        <Divider light />
        <ListItem button>
            <ListItemText primary="Help and Feedback" />
        </ListItem>
        <ListItem button>
            <ListItemText primary="Terms and Conditions" />
        </ListItem>
        </List>
    )
}
