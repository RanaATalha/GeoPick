import { Avatar, Button, Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import * as React from 'react';
import { Component } from 'react';
import WhiteLogo from '../welcome screen/WhiteLogo.svg';
import BadgeAvatar from '../../components/Display/AddAvatarBadge';
import SinglePostNew from '../../components/Display/singlePostNew';
import { auth } from '../../firebase';
export interface ProfilePageProps {}

export interface ProfilePageState {}

class ProfilePage extends Component<ProfilePageProps, ProfilePageState> {
    signOut = () => {
        auth.doSignOut();
    };

    render() {
        return (
            <div style={{ background: '#1b1b1b', height: 'auto' }}>
                <img
                    src={WhiteLogo}
                    alt="GeoPicK"
                    style={{ width: '200px', height: '66px', margin: 'auto', paddingBottom: '1em' }}
                />
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
                        <Avatar
                            style={{ float: 'right', width: '120px', height: '120px', marginRight: '20px' }}
                        ></Avatar>
                        <Typography variant="h3" style={{ color: '#fafafa' }}>
                            Hi<br></br>
                            {
                                <Typography variant="h4" style={{ color: '#f56920' }}>
                                    'mo.kvs_'
                                </Typography>
                            }
                            {/* The username comes here */}
                        </Typography>

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

                        <Button style={{ marginLeft: '10px', padding: '1px' }}>
                            <Typography variant="button" style={{ justifyContent: 'center' }}>
                                <span style={{ color: '#fafafa' }}>10</span>
                                <br></br>
                                <span style={{ color: '#f56920' }}>points</span>
                            </Typography>
                            {/* Number of posts by user */}
                        </Button>
                        <br></br>
                        <br></br>
                        <Button style={{ paddingLeft: '15%', paddingRight: '15%', background: '#f56920' }}>
                            <Typography variant="button" style={{ color: '#fafafa' }}>
                                Edit Profile
                            </Typography>
                        </Button>

                        <Button
                            style={{
                                paddingLeft: '10%',
                                paddingRight: '10%',
                                background: '#2f4858',
                                marginLeft: '10px',
                            }}
                            onClick={this.signOut}
                        >
                            <Link to="/welcome">
                                <Typography variant="button" style={{ color: '#fafafa' }}>
                                    Sign Out
                                </Typography>
                            </Link>
                        </Button>

                        {/* </CardContent>
                        </Card> */}
                    </CardContent>
                </Card>
                <div style={{ margin: 'auto' }}>
                    <Typography variant="h4" style={{ color: '#fafafa', paddingTop: '25px' }}>
                        My <span style={{ color: '#f56920' }}>Posts</span>
                    </Typography>
                    <SinglePostNew />
                </div>
            </div>
        );
    }
}

export default ProfilePage;
