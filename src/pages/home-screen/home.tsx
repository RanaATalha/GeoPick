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
import SinglePostNew from '../../components/Display/singlePostNew';
export interface HomeScreenProps {}
export interface HomeScreenState {
    posts: any;
    user: any;
    isAuthenticated: boolean;
}

export class HomeScreen extends Component<HomeScreenProps, HomeScreenState> {
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
            this.setState({ isAuthenticated: true, user: user });
            }, (error) => {
            this.setState({ isAuthenticated: true });
            });
    }

    componentDidUpdate() {
        firebase
            .firestore()
            .collection('Posts')
            .onSnapshot((snapshot: any) => {
                this.setState(snapshot.docs.map((doc: any) => ({ id: doc.id, post: doc.data() })));
            });
        // console.log(this.state);
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
                            resolve(data)
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
        // if (!this.state.isAuthenticated) return null;
        return (
            <div style={{ background: '#1b1b1b' }} onLoad={this.getData}>
                <Toolbar style={{ position: 'relative' }}>
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
                <SinglePostNew />
                <Feed />
                <div style={{ padding: '30px' }}></div>
                <BottomNavigation />
            </div>
        );
    }
}
