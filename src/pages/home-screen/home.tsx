import * as React from 'react';
import { Component, useEffect } from 'react';
import WhiteLogo from '../welcome screen/WhiteLogo.svg';
import './homesStyles.scss';
// import SinglePost from './singlePost';
import Picture from './welcome-pg.png';
import { storage } from '../../firebase/firebase';
import firebase from 'firebase';
import Feed from '../../components/Layouts/feed';

export interface HomeScreenProps {}
export interface HomeScreenState {
    posts: any;
}

export class HomeScreen extends Component<HomeScreenProps, HomeScreenState> {
    constructor(HomeScreenProps: any) {
        super(HomeScreenProps);
        this.state = {
            posts: [],
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
                querySnapshot.forEach(function (doc) {
                    console.log(doc.id, ' => ', doc.data());
                });
            })
            .catch((err) => {
                console.log('Error getting documents: ', err);
            });
    };
    render() {
        return (
            <div style={{ background: '#1b1b1b' }} onLoad={this.getData}>
                <img src={WhiteLogo} alt="GeoPicK" className="WhiteLogo" />
                <br></br>
                {/* <SinglePost username="GeoPicker" date="13-01-2021" postPic={Picture} />
                <SinglePost username="GeoPicker" date="13-01-2021" postPic={Picture} /> */}
                {/* {this.state.posts.map(({ id, post } : {id: any; post: any}) => {
                    return (
                    <SinglePost
                        key={id}
                        // id={id}
                        // profileUrl={post.profileUrl}
                        username={post.username}
                        postPic={post.photoUrl}
                        // caption={post.caption}
                        // comments={post.comments}
                    />
                    );
                })} */}
                <Feed />
            </div>
        );
    }
}
