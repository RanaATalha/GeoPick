import { Avatar, Grid, Card, Typography, IconButton, CardActions, Button, Box, Container } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddCommentRoundedIcon from '@material-ui/icons/AddCommentRounded';
import ShareIcon from '@material-ui/icons/Share';
import * as React from 'react';
import { Component } from 'react';
import './singlePostStyles.scss';
import InputBase from '@material-ui/core/InputBase';
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';
import { checkUserLoggedIn } from '../../firebase/auth';
import firebase from 'firebase';
import fb from 'firebase/app';
import AddIcon from '@material-ui/icons/Add';
import SvgIcon from '@material-ui/core/SvgIcon';
import GuessTheLocationPlay from '../Game/guessPlay';
import { Link } from 'react-router-dom';
import SharePost from './sharePost';

export interface SinglePostProps {
    username?: string;
    postPic: string;
    date?: string;
    avatar?: string;
    uid?: string;
    likes_count?: number;
    caption?: string;
    id?: string;
    sharedURL: string;
    hidden: boolean;
    comments_count: number;
}

export interface SinglePostState {
    favourited: boolean;
    user: any;
    post_user: any;
    open_share: boolean;
    GTLButton: any;
    isOpen: boolean;
}

class SinglePost extends Component<SinglePostProps, SinglePostState> {
    constructor(SinglePostProps: any) {
        super(SinglePostProps);
        this.state = {
            favourited: false,
            user: checkUserLoggedIn(),
            post_user: {},
            open_share: false,
            GTLButton: this.handleGuessTheLocationOnClick,
            isOpen: false,
        };
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleGuessTheLocationOnClick = this.handleGuessTheLocationOnClick.bind(this);
    }

    handleColorChange = () => {
        this.setState({
            favourited: !this.state.favourited,
        });

        const increment = fb.firestore.FieldValue.increment(1);
        const decrement = fb.firestore.FieldValue.increment(-1);

        if (this.state.favourited === false) {
            fb.firestore().collection('Posts').doc(this.props.id).update({
                likes_count: increment,
            });
        } else {
            fb.firestore().collection('Posts').doc(this.props.id).update({
                likes_count: decrement,
            });
        }
    };
    share_area = React.createRef();

    componentDidMount() {
        firebase
            .firestore()
            .collection('users')
            .doc(this.props.uid)
            .get()
            .then((querySnapshot) => {
                const data = querySnapshot.data();
                // console.log(data);
                this.setState({
                    post_user: data,
                });
            });
    }

    handleButtonClick = () => {
        this.setState((state) => {
            return {
                open_share: !state.open_share,
            };
        });
    };

    handleGuessTheLocationOnClick() {
        return (
            // <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
            <Card style={{ borderRadius: '20px', width: '20%', height: '30%', background: '#1b1b1b' }}>
                {/* <CardHeader style={{ textAlign: 'left', marginLeft: '10px' }}> */}
                <Typography
                    variant="h6"
                    style={{
                        fontWeight: 'bolder',
                        color: '#f56920',
                        textAlign: 'left',
                        margin: 'auto',
                        padding: '10px',
                    }}
                >
                    Guess The Location
                </Typography>
                {/* </CardHeader> */}

                <CardActions>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <Button
                                style={{
                                    borderRadius: '20px',
                                    marginLeft: '10px',
                                    marginRight: '10px',
                                    background: '#fafafa',
                                    color: '#1b1b1b',
                                    width: '80%',
                                }}
                            >
                                Angola
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                style={{
                                    borderRadius: '20px',
                                    marginLeft: '10px',
                                    marginRight: '10px',
                                    background: '#fafafa',
                                    color: '#1b1b1b',
                                    width: '80%',
                                }}
                            >
                                Dubai
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                style={{
                                    borderRadius: '20px',
                                    marginLeft: '10px',
                                    marginRight: '10px',
                                    background: '#fafafa',
                                    color: '#1b1b1b',
                                    width: '80%',
                                }}
                            >
                                Abu Dhabi
                            </Button>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
            // </Zoom>
        );
    }

    render() {
        return (
            // <Container fixed style={{ background: '#FAFAFA', padding: '20%', margin: 'auto' }}>

            <div
                style={{
                    background: '#1b1b1b',
                    justifyContent: 'center',
                    alignContent: 'center',
                    margin: 'auto',
                    width: '700px',
                }}
            >
                <Grid container direction="row" spacing={1} justify="center">
                    <Grid item justify="flex-start" style={{ marginLeft: '5em', position: 'relative' }}>
                        <Avatar alt={this.state.post_user.User_name} src={this.state.post_user.Avatar}></Avatar>
                    </Grid>
                    <Grid item justify="flex-start">
                        <Card style={{ color: '#F56920', borderRadius: '22px' }} className="boxField">
                            <Typography variant="h6" style={{ justifyContent: 'space-evenly' }}>
                                {this.state.post_user.User_name}
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item justify="flex-end" style={{ marginLeft: '20em', position: 'relative' }}>
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
                            width="600px"
                            height="500px"
                            className="postImage"
                            style={{ borderRadius: '20px 20px 0px 0px', position: 'sticky' }}
                        ></img>
                        <GuessTheLocationPlay city1="Dubai" city2="Paris" city3="Tokyo" />
                        <Box m={-30} />
                    </div>
                </Container>
                <Grid container spacing={2} justify="center">
                    <Grid item style={{ color: 'white', fontSize: '12' }}>
                        <span>{this.props.caption}</span> 
                    </Grid>
                </Grid>
                <Grid container spacing={2} justify="center" alignItems="center">
                    <Grid item>
                        <IconButton
                            aria-label="add to favorites"
                            style={this.state.favourited ? { color: '#dc143c' } : { color: '#FAFAFA' }}
                            onClick={this.handleColorChange}
                        >
                            <FavoriteIcon />
                            {this.props.likes_count}
                        </IconButton>   
                    </Grid>
                    <Grid item xs={4}>
                        <SharePost sharedURL= {this.props.postPic}/>
                    </Grid>
                    <Grid item>
                     <Link to = "/post">
                         <IconButton
                            aria-label="add a comment"
                            style={{ color: '#FAFAFA' }}
                        >
                            <AddCommentRoundedIcon/>
                            <span>{this.props.comments_count}</span>
                        </IconButton>
                    </Link>
                    </Grid>
                </Grid>
                <div style={{ padding: '25px' }}></div>
            </div>
            // </Container>
        );
    }
}

export default SinglePost;
