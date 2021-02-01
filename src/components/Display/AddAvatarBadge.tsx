import React from 'react';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';
import UploadButton from './AddAvatarIcon';
import Avatars from './Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function BadgeAvatar(props: any) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Badge
                overlap="circle"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                badgeContent={<UploadButton onChange={props.onChange} />}
            >
                <Avatars imgsrc={props.src} />
            </Badge>
        </div>
    );
}
