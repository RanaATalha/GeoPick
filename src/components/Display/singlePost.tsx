import { Avatar, Grid, Card, Typography, IconButton, Container } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import * as React from 'react';
import { Component } from 'react';
import './singlePostStyles.scss';
import GuessTheLocationButton from './guess-the-location.svg';
import InputBase from '@material-ui/core/InputBase';
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';
import { checkUserLoggedIn } from "../../firebase/auth";
// import SinglePostBanner from './singlePostBanner';
import firebase from 'firebase';
import fb from 'firebase/app';


export interface SinglePostProps {
    username?: string;
    postPic?: string;
    date?: string;
    postImage?: string;
    avatar?: string;



    uid?: string;
    likes_count?: string;
    id?: string;
}

export interface SinglePostState {
    favourited: boolean,
    user: any,
    post_user: any
}
class SinglePost extends Component<SinglePostProps, SinglePostState> {

    constructor(SinglePostProps: any){
        super(SinglePostProps)
        this.state ={
            favourited: false,
            user: checkUserLoggedIn(),
            // post_user: this.getPostUser(SinglePostProps.uid)
            post_user: {}
        }
        this.handleColorChange = this.handleColorChange.bind(this);
        // this.getPostUser = this.getPostUser.bind(this);
    }
    handleColorChange = () => {
        this.setState({
            favourited:!this.state.favourited
        })

        const increment = fb.firestore.FieldValue.increment(1);
        const decrement = fb.firestore.FieldValue.increment(-1);

        if(this.state.favourited == false){
            fb.firestore().collection('Posts').doc(this.props.id).update({
                likes_count: increment
            });
        }else{
            fb.firestore().collection('Posts').doc(this.props.id).update({
                likes_count: decrement
            });
        }
    }

    // getPostUser = async ({uid} : {uid: string}) => {
    //     await firebase.firestore().collection("Users").doc(uid)
    //     .get()
    //     .then(function(doc) {
    //         // querySnapshot.forEach(function(doc) {
    //         //     // doc.data() is never undefined for query doc snapshots
    //         //     console.log(doc.id, " => ", doc.data());
    //             return doc.data();
    //             console.log(doc.data());
    //             // setHaveUser(true);
    //         });

    // }

    componentDidMount() {
        firebase.firestore().collection("users").doc(this.props.uid)
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.data();
            // console.log(data);
            this.setState({ 
                post_user: data 
            });
            // console.log(this.state.post_user);
        }
        );
    }

    
    render() {
        return (
            // <Container fixed style={{ background: '#FAFAFA', padding: '2%' }}>
            <Card style={{ background: '#1b1b1b', justifyContent: 'center', alignContent: 'center', margin: '50px' }}>
                <Grid container direction="row" spacing={1} justify="center">
                    <Grid item justify="flex-start" style={{ marginLeft: '0%' }}>
                        <Avatar alt={this.state.post_user.User_name} src={this.state.post_user.Avatar}></Avatar>
                    </Grid>
                    <Grid item justify="flex-start">
                        <Card style={{ color: '#F56920', borderRadius: '22px' }} className="boxField">
                            <Typography variant="h6" style={{ justifyContent: 'space-evenly' }}>
                                {this.state.post_user.User_name}
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

                        {/* <div style={{ alignContent: 'flex-start', justifyContent: 'left' }}> */}
                            {/* <Grid item justify="flex-start"> */}
                                {/* <Card style={{ background: '#FAFAFA', borderRadius: '22px' }} className="boxField"> */}
                                    <Typography variant="h6" style={{ justifyContent: 'space-evenly', background: '#FAFAFA' }}>
                                        {this.props.likes_count}
                                    </Typography>
                                {/* </Card> */}
                                    <IconButton
                                        aria-label="add to favorites"
                                        style={this.state.favourited ? { color: '#dc143c' } : { color: '#FAFAFA' }}
                                        onClick={this.handleColorChange}
                                    >
                                        <FavoriteIcon />
                                    </IconButton>
                                
                            {/* </Grid> */}
                            

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
                        {/* </div> */}
                    </Grid>
                </Grid>
                <div style={{ padding: '25px' }}></div>
            </Card>
        );
    }
}

export default SinglePost;

// {/* <IconButton type="submit" aria-label="submit" style={{ color: '#FAFAFA' }}></IconButton> */}
