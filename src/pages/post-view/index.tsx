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
    post: any;
    favourited: boolean;
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
            post: {},
            newComment: '',
        };
        this.handleColorChange = this.handleColorChange.bind(this);
    }

    componentDidMount() {
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

        fb
            .firestore()
            .collection('Posts')
            .doc(pid)
            .get()
            .then((doc) => {
                console.log(doc.data());
                this.setState({
                    post: doc.data()
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
        } else {
            fb.firestore().collection('Posts').doc(pid).update({
                likes_count: decrement,
            });
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
            const comment = this.state.newComment;
            fb.firestore()
                .collection('Posts')
                .doc(pid)
                .update({
                    comments: FieldValue.arrayUnion(`${this.state.user.User_name}: ${comment}`),
                    comments_count: fb.firestore.FieldValue.increment(1),
                });
            console.log(`${this.state.user.User_name} : ${comment}`);
            console.log(this.state.user);
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
                        <Avatar alt={this.state.user.User_name} src={this.state.user.Avatar}></Avatar>
                    </Grid>
                    <Grid item justify="flex-start" xs={7}>
                        <Card style={{ color: '#F56920', borderRadius: '22px' }} className="boxField">
                            <Typography variant="h6" style={{ justifyContent: 'space-evenly' }}>
                                {this.state.user.User_name}
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
                                {this.state.post.post_time}
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
                <br></br>

                <Container>
                    <div className="postImage" style={{ justifyItems: 'normal', marginRight: '-10%' }}>
                        <img
                            src={this.state.post.Image}
                            alt="not loading..."
                            width= "80%"
                            max-width= "600px"
                            height= "500px"
                            className="postImage"
                            style={{ borderRadius: '20px 20px 0px 0px', position: 'sticky' }}
                        ></img>
                        <Box m={-30} />
                    </div>
                </Container>
                <Grid container spacing={2} justify="center">
                    <Grid item style={{ color: 'white', fontSize: '12' }}>
                        <span>{this.state.post.caption}</span> 
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
                            {this.state.post.likes_count}
                        </IconButton>
                    </Grid>
                    <Grid item xs={5}>
                        <SharePost sharedURL= {window.location.href}/>
                    </Grid>
                </Grid>
                            
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
                        
                    {/* </div> */}
                </Card>
        );
    }
}

