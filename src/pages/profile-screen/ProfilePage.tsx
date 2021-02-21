import { Avatar, Button, Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import * as React from 'react';
import { Component } from 'react';
import WhiteLogo from '../welcome screen/WhiteLogo.svg';
import BadgeAvatar from '../../components/Display/AddAvatarBadge';
import SinglePostNew from '../../components/Display/singlePostNew';
import ProfileOverview from '../../components/Display/profileOverview';

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
                <ProfileOverview />
                <br></br>
                <br></br>
                <Button style={{ paddingLeft: '15%', paddingRight: '15%', background: '#f56920' }}>
                    <Typography variant="button" style={{ color: '#fafafa' }}>
                        Edit Profile
                    </Typography>
                </Button>

                <Button
                    style={{
<<<<<<< HEAD
                        paddingLeft: '10%',
                        paddingRight: '10%',
                        background: '#2f4858',
                        marginLeft: '10px',
=======
                        background: '#1b1b1b',
                        marginLeft: '15px',
                        marginRight: '15px',
                        border: '3px solid #f56920',
                        borderRadius: '20px',
                        maxWidth: '600px',
                        margin: 'auto',
>>>>>>> 1dde0723a99fefab01f88b7f67d1b5c4c05b0b27
                    }}
                    onClick={this.signOut}
                >
                    <Link to="/welcome">
                        <Typography variant="button" style={{ color: '#fafafa' }}>
                            Sign Out
                        </Typography>
                    </Link>
                </Button>
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
