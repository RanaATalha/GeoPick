import {
    Avatar,
    Grid,
    Card,
    Typography,
    IconButton,
    CardActions,
    Button,
    Box,
    Container,
    // Link,
} from '@material-ui/core';
import * as React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { render } from '@testing-library/react';
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';
import fb from 'firebase/app';
import {Component} from 'react';
import { checkUserLoggedIn } from '../../firebase/auth';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SharePost from '../../components/Display/sharePost';

export interface PostViewState {
    newComment: string;
    user: any;
    Image: string;
    caption: string;
    likes_count: number;
    post_time: string;
    user_name: string;
    favourited: boolean;
    post_uid: string;
    post_user: any;
    comments: any;
}

export interface PostViewProps {
    state: string;
}


export default class PostViewScreen extends Component<PostViewProps,PostViewState> {

    constructor(PostViewProps: any) {
        super(PostViewProps);
        this.state = {
            favourited: false,
            user: {},
            Image: "",
            caption: "",
            likes_count: 0,
            post_time: "",
            user_name: "",
            newComment: '',
            post_uid: '',
            post_user: {},
            comments: [],
        };
        this.handleColorChange = this.handleColorChange.bind(this);
    }

    async componentDidMount() {
        const path = window.location.pathname.split('/')
        const pid = path[path.length - 1]
        const auth = checkUserLoggedIn();
        console.log(pid);
        if(auth === undefined){

        }else{
            fb
            .firestore()
            .collection('users')
            .doc(auth.uid)
            .get()
            .then((querySnapshot) => {
                const data = querySnapshot.data();
                // console.log(data);
                this.setState({
                    user: data,
                });
            });
        }

        await fb
            .firestore()
            .collection('Posts')
            .doc(pid)
            .get()
            .then((doc) => {
                console.log(doc.data());
                const data = doc.data();
                if(data){
                    this.setState({
                        Image: data.Image,
                        caption: data.caption,
                        likes_count: data.likes_count,
                        post_time: new Date(data.post_time.seconds * 1000).toLocaleDateString("en-US"),
                        user_name: data.user_name,
                        post_uid: data.uid,
                        comments: data.comments,
                    });
                }
                
            });

            fb
            .firestore()
            .collection('users')
            .doc(this.state.post_uid)
            .get()
            .then((querySnapshot) => {
                const data = querySnapshot.data();
                // console.log(data);
                this.setState({
                    post_user: data,
                });
            });
        
            this.setState({
                favourited: false,
            })
    }

    handleColorChange = () => {
        const path = window.location.pathname.split('/')
        const pid = path[path.length - 1]
        this.setState({
            favourited: !this.state.favourited,
        });

        const increment = fb.firestore.FieldValue.increment(1);
        const decrement = fb.firestore.FieldValue.increment(-1);

        if (this.state.favourited === false) {
            fb.firestore().collection('Posts').doc(pid).update({
                likes_count: increment,
            });
            this.setState({
                likes_count: this.state.likes_count + 1
            })
        } else {
            fb.firestore().collection('Posts').doc(pid).update({
                likes_count: decrement,
            });
            this.setState({
                likes_count: this.state.likes_count - 1
            })
        }
    };
    
    render() {
        const path = window.location.pathname.split('/')
        const pid = path[path.length - 1]
        // console.log(uid);
        const handleChange = (event: any) => {
            console.log(event.target.value);
            this.setState({ 
                newComment: event.target.value as string,
                // user: checkUserLoggedIn(),
            });
            

        };

        const handleClick = (event: any) => {
            const FieldValue = fb.firestore.FieldValue;
            const comment = `${this.state.user.User_name} : ${this.state.newComment}`;
            fb.firestore()
                .collection('Posts')
                .doc(pid)
                .update({
                    comments: FieldValue.arrayUnion(comment),
                    comments_count: fb.firestore.FieldValue.increment(1),
                });
            // console.log(`${this.state.user.User_name} : ${comment}`);
            // console.log(this.state.user);
            this.setState({
                comments: [
                    ...this.state.comments,
                    comment
                ]
            })
        };

        return (
            <Card
                style={{
                    background: '#1b1b1b',
                    justifyContent: 'center',
                    alignContent: 'center',
                    margin: 'auto',
                    width: '700px',
                    padding: 'auto',
                }}
            >
                <Grid container direction="row" spacing={1} justify="center">
                    <Grid item justify="flex-start" style={{ marginLeft: '5em', position: 'relative' }}>
                        <Avatar alt={this.state.post_user.User_name} src={this.state.post_user.Avatar}></Avatar>
                    </Grid>
                    <Grid item justify="flex-start" xs={7}>
                        <Card style={{ color: '#F56920', borderRadius: '22px' }} className="boxField">
                            <Typography variant="h6" style={{ justifyContent: 'space-evenly' }}>
                                {this.state.post_user.User_name}
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item justify="flex-end" style={{ position: 'relative' }}>
                        <Card
                            style={{
                                color: '#F56920',
                                borderRadius: '22px',
                                justifyContent: 'center',
                            }}
                            className="boxField"
                        >
                            <Typography variant="body1" style={{ justifyContent: 'space-evenly' }}>
                                {this.state.post_time}
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
                <br></br>
                <Grid container spacing={2} justify="center">
                <Container>
                    <div className="postImage" style={{ justifyItems: 'normal', marginRight: '-10%' }}>
                        <img
                            src={this.state.Image}
                            alt="not loading..."
                            // width= "80%"
                            width= "600px"
                            height= "500px"
                            className="postImage"
                            style={{ borderRadius: '20px 20px 0px 0px'}}
                        ></img>
                    </div>
                </Container>
                </Grid>
                <br/>
                <Grid container spacing={2} justify="center">
                    <Grid item style={{ color: 'white', fontSize: '12' }}>
                        <span>{this.state.caption}</span> 
                    </Grid>
                </Grid>
                <Grid container spacing={2} justify="flex-start" alignItems="center" style={{ justifyItems: 'normal', marginLeft: '10%' }}>
                    <Grid item>
                        <IconButton
                            aria-label="add to favorites"
                            style={this.state.favourited ? { color: '#dc143c' } : { color: '#FAFAFA' }}
                            onClick={this.handleColorChange}
                        >
                            <FavoriteIcon />
                            {this.state.likes_count}
                        </IconButton>
                    </Grid>
                    <Grid item xs={5}>
                        <SharePost sharedURL= {window.location.href}/>
                    </Grid>
                </Grid>
                <Grid container spacing={2} justify="flex-start" style={{ justifyItems: 'normal', marginLeft: '10%' }}>
                    <Grid item style={{ color: 'white', fontSize: '12' }}>
                    <ul>
                        {
                            this.state.comments.map((val: string, index: any) => {
                            return (
                                <li key={index}>
                                { val }
                                </li>
                            );
                            })
                        }
                    </ul>
                    </Grid>
                </Grid>
                <Grid container spacing={2} justify="flex-start" alignItems="center">  
                <Grid item>
                <InputBase
                            onChange={handleChange}
                            placeholder="Start typing..."
                            style={{
                                width: '32.5%',
                                marginRight: '-12%',
                                textDecorationColor: '#FAFAFA',
                                border: '1px solid #FAFAFA',
                                borderRadius: '10px',
                                height: '50px',
                                padding: '10px',
                                color: 'black',
                            }}
                            endAdornment={
                                <IconButton
                                    onClick={handleClick}
                                    aria-label="upload"
                                    type="submit"
                                    style={{ color: '#FAFAFA', alignContent: 'end' }}
                                >
                                    <PublishRoundedIcon />
                                </IconButton>
                            }
                        />
                </Grid>
                </Grid>
                        
                    {/* </div> */}
                </Card>
        );
    }
}

