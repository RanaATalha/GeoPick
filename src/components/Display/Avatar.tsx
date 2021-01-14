import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

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

interface Image {
    imgsrc: string
}

export default function Avatars(props: any) {
    const classes = useStyles();
    console.log(props.imgsrc);
    return (
        <div className={classes.root}>
            <Avatar alt="Avatar Image" src={props.imgsrc} className={classes.large} />
        </div>
    );
}
