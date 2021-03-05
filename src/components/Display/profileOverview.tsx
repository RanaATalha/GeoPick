import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddAvatar from './AddAvatar.png';
// import Avatar from '@material-ui/core/Avatar';
import BadgeAvatar from '../../components/Display/AddAvatarBadge';
import { Avatar, Button, Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AvatarSmall from '../../components/Display/avatarSmall';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
}));

const SmallAvatar = withStyles((theme) => ({
    root: {
        width: 22,
        height: 22,
        border: `2px solid ${theme.palette.background.paper}`,
    },
}))(Avatar);

const Followers = () => {
    return (
        <Button
            variant="contained"
            style={{
                padding: '5px 10px 5px 10px',
                marginRight: '5px',
                borderRadius: '20px',
                float: 'right',
                background: '#f56920',
                color: '#fafafa',
            }}
        >
            Follow
        </Button>
    );
};

export default function ProfileOverview(props: any) {
    const classes = useStyles();
    if (props.followers === true) {
        return (
            <Card
                style={{
                    background: '#1b1b1b',
                    marginLeft: '15px',
                    marginRight: '15px',
                    border: '3px solid #f56920',
                    borderRadius: '20px',
                }}
            >
                <CardContent style={{ textAlign: 'left', padding: '50px 10px 50px 10px' }}>
                    {/* <Grid container direction="column">
                                <Grid item> */}
                    {/* <Avatar
                                style={{ float: 'right', width: '18vw', height: '18vw', marginRight: '20px' }}
                            ></Avatar> */}
                    <Grid style={{ float: 'right' }}>
                        <AvatarSmall
                            uid={props.uid}
                            User_name={props.User_name}
                            Avatar={props.Avatar}
                            Size={props.Size}
                        />
                    </Grid>
                    <Typography style={{ color: '#fafafa', fontSize: 'calc(12px + 2vw)' }}>
                        Hi,<br></br>
                    </Typography>
                    <Typography style={{ color: '#f56920', fontSize: '2vw' }}>{props.User_name}</Typography>
                    {/* </Grid>
                                <Grid item></Grid> */}
                    {/* </Grid> */}
                    <br></br>
                    {/* <Card style={{ width: 'fit-content', height: 'fit-content', padding: '-5px' }}>
                                <CardContent> */}
                    <Button style={{ padding: '1px' }}>
                        <Typography variant="button" style={{ justifyContent: 'center' }}>
                            <span style={{ color: '#fafafa' }}>2</span>
                            <br></br>
                            <span style={{ color: '#f56920' }}>posts</span>
                        </Typography>
                        {/* Number of posts by user */}
                    </Button>
                    <Button style={{ padding: '1px' }}>
                        <Typography variant="button" style={{ justifyContent: 'center' }}>
                            <span style={{ color: '#fafafa' }}>{props.User.GamePoint}</span>
                            <br></br>
                            <span style={{ color: '#f56920' }}>points</span>
                        </Typography>
                        {/* Number of posts by user */}
                    </Button>
                    <Followers />
                </CardContent>
            </Card>
        );
    }
    return (
        <Card
            style={{
                background: '#1b1b1b',
                marginLeft: '15px',
                marginRight: '15px',
                border: '3px solid #f56920',
                borderRadius: '20px',
            }}
        >
            <CardContent style={{ textAlign: 'left', padding: '50px 10px 50px 10px' }}>
                {/* <Grid container direction="column">
                            <Grid item> */}
                {/* <Avatar
                            style={{ float: 'right', width: '18vw', height: '18vw', marginRight: '20px' }}
                        ></Avatar> */}
                <Grid style={{ float: 'right' }}>
                    <AvatarSmall uid={props.uid} User_name={props.User_name} Avatar={props.Avatar} Size={props.Size} />
                </Grid>
                <Typography style={{ color: '#fafafa', fontSize: 'calc(12px + 2vw)' }}>
                    Hi,<br></br>
                </Typography>
                <Typography style={{ color: '#f56920', fontSize: '2vw' }}>{props.User_name}</Typography>
                {/* </Grid>
                            <Grid item></Grid> */}
                {/* </Grid> */}
                <br></br>
                {/* <Card style={{ width: 'fit-content', height: 'fit-content', padding: '-5px' }}>
                            <CardContent> */}
                <Button style={{ padding: '1px' }}>
                    <Typography variant="button" style={{ justifyContent: 'center' }}>
                        <span style={{ color: '#fafafa' }}>2</span>
                        <br></br>
                        <span style={{ color: '#f56920' }}>posts</span>
                    </Typography>
                    {/* Number of posts by user */}
                </Button>
                <Button style={{ padding: '1px' }}>
                    <Typography variant="button" style={{ justifyContent: 'center' }}>
                        <span style={{ color: '#fafafa' }}>{props.User.GamePoint}</span>
                        <br></br>
                        <span style={{ color: '#f56920' }}>points</span>
                    </Typography>
                    {/* Number of posts by user */}
                </Button>
            </CardContent>
        </Card>
    );
}
