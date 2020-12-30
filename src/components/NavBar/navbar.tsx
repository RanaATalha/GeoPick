import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import CameraAltRoundedIcon from '@material-ui/icons/CameraAltRounded';
import ExploreRoundedIcon from '@material-ui/icons/ExploreRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';

const useStyles = makeStyles({
    root: {
        width: 500,
    },
});

export default function LabelBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction label="Home" value="Home" icon={<HomeRoundedIcon />} />
            <BottomNavigationAction label="Search" value="Search" icon={<SearchRoundedIcon />} />
            <BottomNavigationAction label="Camera" value="Add" icon={<CameraAltRoundedIcon />} />
            <BottomNavigationAction label="Explore" value="Explore" icon={<ExploreRoundedIcon />} />
            <BottomNavigationAction label="Settings" value="Settings" icon={<SettingsRoundedIcon />} />
        </BottomNavigation>
    );
}
