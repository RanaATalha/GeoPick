import React, { useState } from 'react'
import WhiteLogo from '../welcome screen/WhiteLogo.svg';
import Card from '../../components/Layouts/Card';
import { RegularBtn } from '../../components/Buttons/RegularBtn';
import TextField from '../../components/Inputs/TextField';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import { Typography } from '@material-ui/core';
import firebase from 'firebase';
import ProfileOverview from '../../components/Display/profileOverview';
import Button from '@material-ui/core/Button';
import SinglePostNew from '../../components/Display/singlePostNew';



export interface SearchProps {}

export default function SearchScreen() {
    const [res, setRes] = useState(Array());
    const [userOn, setUserOn] = useState(false);
    const [postOn, setPostOn] = useState(false);

    const toggleUser = () => {
        setUserOn(true);
        setPostOn(false);
    }

    const togglePost = () => {
        setUserOn(false);
        setPostOn(true);
    }

    const fetchResults = (search: React.ChangeEvent<HTMLInputElement>) => {
        if(userOn){
            firebase.firestore()
            .collection('users')
            .where('User_name', '>=', search.target.value)
            .limit(5)
            .get()
            .then((snapshot) => {
                let users = snapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data }
                });
                setRes(users);
            })
        }

        if(postOn){
            firebase.firestore()
            .collection('Posts')
            .where('tags', 'array-contains', search.target.value)
            .limit(5)
            .get()
            .then((snapshot) => {
                let posts = snapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data }
                });
                setRes(posts);
            })
        }
        
    }

    return (
        <div className="background">
            <div className="button" style={{ float: 'left' }}>
                <ArrowBackRoundedIcon />
            </div>
            <div className="image">
                <img src={WhiteLogo} alt="GeoPicK Logo" className="WhiteLogo" />
            </div>
            <div id="titleDiv">
                <Card background="#202020" title="Search" split={2}>
                    <TextField
                        id="standard-multiline-flexible"
                        label="Search"
                        variant="outlined"
                        placeholder="Search here..."
                        onChange = {fetchResults}
                    />
                    <br></br>
                    <Button variant="contained" style={{float:'left'}} onClick={toggleUser}>Users</Button>
                    <Button variant="contained" style={{float:'right'}} onClick={togglePost}>Posts</Button>
                    {res.length>0 && res.map((data) => {
                        // console.log(data);
                        if(userOn){
                            return (
                                <div>
                                  <ProfileOverview 
                                      key = {data.id}
                                      uid = {data.id} 
                                      User_name = {data.User_name} 
                                      Avatar = {data.Avatar} 
                                      Size = "small"
                                      User = {data}
                                  />
                                  <br/><br/>
                                </div>
                            );
                        } else {
                            return (
                                <div>
                                  <SinglePostNew
                                    key={data.id}
                                    id={data.id}
                                    // profileUrl={post.profileUrl}
                                    username={data.user_name}
                                    postPic={data.Image}
                                    uid={data.uid}
                                    // caption={post.caption}
                                    // comments={post.comments}
                                    date={new Date(data.post_time.seconds * 1000).toLocaleDateString('en-US')}
                                    likes_count={data.likes_count}
                                    caption={data.caption}
                                    sharedURL={window.location.href}
                                    hidden={false}
                                    comments_count={data.comments_count}
                                />
                                  <br/><br/>
                                </div>
                            );
                        }
                      
                      // console.log(data.User_name);
                  })}
                 
                  
                </Card>
            </div>
            <br />
        </div>
    );
}
