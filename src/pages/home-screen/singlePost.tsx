import { Avatar, Grid, Card, Typography } from '@material-ui/core';
import * as React from 'react';
import { Component } from 'react';
import './singlePostStyles.scss';
export interface SinglePostProps {
    username?: string;
    postPic?: string;
    date?: string;
    postImage?: string;
    avatar?: string;
}

export interface SinglePostState {}

class SinglePost extends Component<SinglePostProps, SinglePostState> {
    // state = { :  }
    render() {
        return (
            // <Container fixed style={{ background: '#FAFAFA', padding: '2%' }}>
            <>
                <Grid container direction="row" spacing={1} justify="center">
                    <Grid item justify="flex-start" style={{ marginLeft: '0%' }}>
                        <Avatar alt={this.props.username} src={this.props.avatar}></Avatar>
                    </Grid>
                    <Grid item justify="flex-start">
                        <Card style={{ color: '#F56920', borderRadius: '22px' }} className="boxField">
                            <Typography variant="h6" style={{ justifyContent: 'space-evenly' }}>
                                {this.props.username}
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item justify="flex-end" style={{ marginLeft: '20%' }}>
                        <Card
                            style={{
                                color: '#F56920',
                                borderRadius: '22px',
                                justifyContent: 'center',
                            }}
                            className="boxField"
                        >
                            <Typography variant="body1" style={{ justifyContent: 'space-evenly' }}>
                                {this.props.date}
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
                <br></br>
                <Grid container direction="row" spacing={1} justify={'center'}>
                    <div className="postImage" style={{ justifyItems: 'center' }}>
                        <img
                            src={this.props.postPic}
                            alt="not loading..."
                            width="40%"
                            height="90%"
                            className="postImage"
                            style={{ borderRadius: '20px 20px 0px 0px' }}
                        ></img>
                        {/* add GuessTheLocation button here.. */}
                    </div>
                </Grid>
                <div style={{ padding: '25px' }}></div>
            </>
        );
    }
}

export default SinglePost;
