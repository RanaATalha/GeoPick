import { Avatar, Grid, Card, Container, Typography } from '@material-ui/core';
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
            <Container fixed style={{ background: '#FAFAFA' }}>
                <Grid container direction="row" spacing={1} justify="center">
                    <Grid item justify="flex-start">
                        <Avatar
                            alt={this.props.username}
                            src={this.props.avatar}
                            style={{ marginRight: '80%' }}
                        ></Avatar>
                    </Grid>
                    <Grid item justify="flex-start">
                        <Card style={{ color: '#F56920', borderRadius: '22px' }} className="boxField">
                            <Typography variant="body1" style={{ justifyContent: 'space-evenly' }}>
                                {this.props.username}
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item justify="flex-end">
                        <Card
                            style={{ color: '#F56920', borderRadius: '22px', marginLeft: '50%' }}
                            className="boxField"
                        >
                            <Typography variant="body1" style={{ justifyContent: 'space-evenly' }}>
                                {this.props.date}
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
                <br></br>
                <Grid container direction="row" spacing={1} justify="center">
                    <div className="postImage" style={{ justifyItems: 'center' }}>
                        <img
                            src={this.props.postPic}
                            alt="not loading..."
                            width="500px"
                            height="400px"
                            className="postImage"
                        ></img>
                        {/* add GuessTheLocation button here.. */}
                    </div>
                </Grid>
            </Container>
        );
    }
}

export default SinglePost;
