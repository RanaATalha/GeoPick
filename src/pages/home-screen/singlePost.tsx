import { Avatar, Grid, Card, Typography, IconButton, Container, Button, colors } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import * as React from 'react';
import { Component } from 'react';
import './singlePostStyles.scss';
import GuessTheLocationButton from './guess-the-location.svg';
import InputBase from '@material-ui/core/InputBase';
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';
export interface SinglePostProps {
    username?: string;
    postPic?: string;
    date?: string;
    postImage?: string;
    avatar?: string;
}

export interface SinglePostState {}
class SinglePost extends Component<SinglePostProps, SinglePostState> {
    // handleColorChange: { color: string };
    // constructor(props: SinglePostProps | Readonly<SinglePostProps>) {
    //     super(props);
    //     this.handleColorChange = {
    //         color: 'primary',
    //     };
    // }
    // state = { :  }
    render() {
        return (
            // <Container fixed style={{ background: '#FAFAFA', padding: '2%' }}>
            <Card style={{ background: '#1b1b1b', justifyContent: 'center', alignContent: 'center', margin: '50px' }}>
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
                    <Grid item justify="flex-end" style={{ marginLeft: '22.5%' }}>
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

                <Container>
                    <div className="postImage" style={{ justifyItems: 'normal', marginRight: '-10%' }}>
                        <img
                            src={this.props.postPic}
                            alt="not loading..."
                            width="50%"
                            height="90%"
                            className="postImage"
                            style={{ borderRadius: '20px 20px 0px 0px' }}
                        ></img>
                        {/* <Button style={{ transform: 'translate(-130%, -50%)' }}>GeoPick</Button> */}
                        <IconButton style={{ transform: 'translate(-110%, -45%)' }}>
                            <img src={GuessTheLocationButton} alt="Guess The Location"></img>
                        </IconButton>
                    </div>
                </Container>
                {/* <br></br> */}
                {/* </Grid>
                </Grid> */}
                <Grid container direction="column" spacing={2} justify={'center'}>
                    <Grid item justify="flex-start" direction="column" style={{ marginLeft: '-15%' }}>
                        <div style={{ alignContent: 'flex-start', justifyContent: 'left' }}>
                            <IconButton
                                aria-label="add to favorites"
                                style={{ color: '#FAFAFA' }}
                                // onClick={this.handleColorChange.color}
                            >
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share" style={{ color: '#FAFAFA' }}>
                                <ShareIcon />
                            </IconButton>
                            {/* <Grid item> */}

                            <InputBase
                                placeholder="Start typing..."
                                style={{
                                    width: '32.5%',
                                    marginRight: '-12%',
                                    textDecorationColor: '#FAFAFA',
                                    border: '1px solid #FAFAFA',
                                    borderRadius: '10px',
                                    height: '50px',
                                    padding: '10px',
                                    color: '#FAFAFA',
                                }}
                                endAdornment={
                                    <IconButton aria-label="upload" style={{ color: '#FAFAFA', alignContent: 'end' }}>
                                        <PublishRoundedIcon />
                                    </IconButton>
                                }
                            />
                            {/* </Grid> */}
                        </div>
                    </Grid>
                </Grid>
                <div style={{ padding: '25px' }}></div>
            </Card>
        );
    }
}

export default SinglePost;

// {/* <IconButton type="submit" aria-label="submit" style={{ color: '#FAFAFA' }}></IconButton> */}
