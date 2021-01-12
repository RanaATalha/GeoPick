import { Avatar, Grid, Card, Container } from '@material-ui/core';
import * as React from 'react';
import { Component } from 'react';
import './headerStyles.scss';
export interface SinglePostProps {
    username?: string;
    postPic?: string;
    date?: string;
    postImage?: string;
    avatar?: string;
}

export interface SinglePostState {}

// const username = 'Mohit';
// const postPic = 'retrieve/avatar/from/firebase';
// const date = '11 Jan 21';
// const postImage = 'retrieve/image/from/firebase';

class SinglePost extends Component<SinglePostProps, SinglePostState> {
    // state = { :  }
    render() {
        return (
            <Container fixed>
                <Grid container direction="column" spacing={2} justify="flex-start">
                    <Grid item>
                        <Avatar alt={this.props.username} src={this.props.avatar}></Avatar>
                    </Grid>
                    <Grid item>
                        <Card style={{ color: '#F56920', borderRadius: '21.94' }} className="boxField">
                            {this.props.username}
                        </Card>
                    </Grid>
                    <Grid item justify="flex-end">
                        <Card style={{ color: '#F56920', borderRadius: '21.94' }} className="boxField">
                            {this.props.date}
                        </Card>
                    </Grid>
                </Grid>
                <br></br>
                <Grid container direction="row" spacing={1} justify="center">
                    <div className="postImage">
                        <img src={this.props.postPic} alt="not loading..." width="500px" height="400px"></img>
                        {/* add GuessTheLocation button here.. */}
                    </div>
                </Grid>
            </Container>
        );
    }
}

export default SinglePost;
