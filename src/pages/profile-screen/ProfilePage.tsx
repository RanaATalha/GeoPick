import { Avatar, Button, Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import * as React from 'react';
import { Component } from 'react';
import WhiteLogo from '../welcome screen/WhiteLogo.svg';
import BadgeAvatar from '../../components/Display/AddAvatarBadge';
import SinglePostNew from '../../components/Display/singlePostNew';
import ProfileOverview from '../../components/Display/profileOverview';
import { checkUserLoggedIn } from '../../firebase/auth';
import firebase from 'firebase';


import { auth } from '../../firebase';
export interface ProfilePageProps {}

export interface ProfilePageState {
    posts: any;
    user: any;
    isAuthenticated: boolean;
}

class ProfilePage extends Component<ProfilePageProps, ProfilePageState> {

    constructor(HomeScreenProps: any) {
        super(HomeScreenProps);
        this.state = {
            posts: [],
            user: {},
            isAuthenticated: false,
        };
    }

    componentDidMount() {
        this.getUser().then((user) => {
            this.setState({ isAuthenticated: true, user: user.data, uid: user.id });
            }, (error) => {
            this.setState({ isAuthenticated: true });
            });
    }

    // componentDidUpdate() {
    //     firebase
    //         .firestore()
    //         .collection('Posts')
    //         .onSnapshot((snapshot: any) => {
    //             this.setState(snapshot.docs.map((doc: any) => ({ id: doc.id, post: doc.data() })));
    //         });
    //     // console.log(this.state);
    // }

    // getData = () => {
    //     firebase
    //         .firestore()
    //         .collection('Posts')
    //         .orderBy('likes_count')
    //         .get()
    //         .then((querySnapshot) => {
    //             querySnapshot.forEach(function () {
    //                 // console.log(doc.id, ' => ', doc.data());
    //             });
    //         })
    //         .catch((err) => {
    //             console.log('Error getting documents: ', err);
    //         });
    // };

    getUser = () => {
        const auth = checkUserLoggedIn();
        return new Promise(function (resolve, reject) {
            if (auth === undefined) {
            } else {
                firebase.firestore()
                    .collection('users')
                    .doc(auth.uid)
                    .get()
                    .then((querySnapshot) => {
                        const data = querySnapshot.data();
                        if(data){
                            resolve(querySnapshot.doc.map((doc: any) => ({ id: doc.id, data: doc.data() })))
                        } else {
                            reject('User not authenticated')
                        }
                        
                    });
                }
            });
        }

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
                <ProfileOverview uid = {this.state.user.uid} User_name = {this.state.user.User_name} Avatar = {this.state.user.Avatar} Size = "large"/>
                <br></br>
                <br></br>
                <Button style={{ paddingLeft: '15%', paddingRight: '15%', background: '#f56920' }}>
                    <Typography variant="button" style={{ color: '#fafafa' }}>
                        Edit Profile
                    </Typography>
                </Button>

                <Button
                    style={{
                        background: '#1b1b1b',
                        marginLeft: '15px',
                        marginRight: '15px',
                        border: '3px solid #f56920',
                        borderRadius: '20px',
                        maxWidth: '600px',
                        margin: 'auto',
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
