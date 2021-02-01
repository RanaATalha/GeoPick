import * as React from 'react';
import { Component } from 'react';
import WhiteLogo from '../welcome screen/WhiteLogo.svg';
import './homesStyles.scss';
import firebase from 'firebase';
import Feed from '../../components/Layouts/feed';
import { Avatar, IconButton, Toolbar } from '@material-ui/core';
import { checkUserLoggedIn } from '../../firebase/auth';
import BottomNavigation from '../../components/NavBar/navbar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { auth } from '../../firebase';
import { Link } from 'react-router-dom';

export interface HomeScreenProps {}
export interface HomeScreenState {
    posts: any;
    user: any;
}

export class HomeScreen extends Component<HomeScreenProps, HomeScreenState> {
    constructor(HomeScreenProps: any) {
        super(HomeScreenProps);
        this.state = {
            posts: [],
            user: checkUserLoggedIn(),
        };
    }

    componentDidUpdate() {
        firebase
            .firestore()
            .collection('Posts')
            .onSnapshot((snapshot: any) => {
                this.setState(snapshot.docs.map((doc: any) => ({ id: doc.id, post: doc.data() })));
            });
        console.log(this.state);
    }

    getData = () => {
        firebase
            .firestore()
            .collection('Posts')
            .orderBy('likes_count')
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach(function () {
                    // console.log(doc.id, ' => ', doc.data());
                });
            })
            .catch((err) => {
                console.log('Error getting documents: ', err);
            });
    };

    signOut = () => {
        auth.doSignOut();
    };
    render() {
        return (
            <div style={{ background: '#1b1b1b' }} onLoad={this.getData}>
                <Toolbar>
                    <Link to="/welcome">
                        <IconButton edge="end" onClick={this.signOut}>
                            <ExitToAppIcon style={{ color: 'white' }} />
                        </IconButton>
                    </Link>

                    <img src={WhiteLogo} alt="GeoPicK" className="WhiteLogo" />
                    <IconButton edge="end">
                        <Avatar alt={this.state.user.User_name} src={this.state.user.Avatar} />
                    </IconButton>
                </Toolbar>

                <Feed />
                <BottomNavigation />
            </div>
        );
    }
}
