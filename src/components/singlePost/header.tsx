import { Avatar, Grid, Card, Container } from '@material-ui/core';
import * as React from 'react';
import { Component } from 'react';
import './headerStyles.scss';
export interface HeaderProps {
    username?: string;
    PostUserPic?: string;
    date?: string;
    postImage?: string;
}

export interface HeaderState {}

const username = 'Mohit';
const PostUserPic = 'retrieve/avatar/from/firebase';
const date = '11 Jan 21';
const postImage = 'retrieve/image/from/firebase';

class Header extends Component<HeaderProps, HeaderState> {
    // state = { :  }
    render() {
        return (
            <Container fixed>
                <Grid container direction="column" spacing={2} justify="flex-start">
                    <Grid item>
                        <Avatar alt={username} src={PostUserPic}></Avatar>
                    </Grid>
                    <Grid item>
                        <Card style={{ color: '#F56920', borderRadius: '21.94' }} className="boxField"></Card>
                    </Grid>
                    <Grid item justify="flex-end">
                        <Card style={{ color: '#F56920', borderRadius: '21.94' }} className="boxField">
                            {date}
                        </Card>
                    </Grid>
                </Grid>
                <br></br>
                <Grid container direction="row" spacing={1} justify="center">
                    <div className="postImage">
                        <img src={postImage} alt="not loading..." width="500px" height="400px"></img>
                        {/* add GuessTheLocation button here.. */}
                    </div>
                </Grid>
            </Container>
        );
    }
}

export default Header;
