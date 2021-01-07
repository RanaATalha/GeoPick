import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import sampleavatar from './sampleavatar.png';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    large: {
        width: theme.spacing(24),
        height: theme.spacing(24),
    },
}));

export default function Avatars() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Avatar alt="Avatar Image" src={sampleavatar} className={classes.large} />
        </div>
    );
}
