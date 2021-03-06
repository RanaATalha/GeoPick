import { Card, Typography } from '@material-ui/core';
import * as React from 'react';
import { Component } from 'react';
import './Styles.scss';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { checkUserLoggedIn } from '../../firebase/auth';
import firebase from 'firebase';
import { RegularBtn } from '../../components/Buttons/RegularBtn';
import { Box } from '@material-ui/core';
import UploadIcon from '../../components/Display/uploadIcon';
import TextField from '../../components/Inputs/TextField';
import Tags from '../../components/Inputs/tags';
import { auth } from '../../firebase';
import Compress from 'react-image-file-resizer';
import { storage } from '../../firebase/firebase';
import Places from '../../components/Inputs/Places';
export interface UploadImageProps {}

export interface UploadImageState {
    user: any;
    isAuthenticated: boolean;
    imgurl: string;
    img: any;
    caption: string;
    tags: any;
    height: number;
    width: number;
    rawurl: string;
    location: any;
    check: boolean;
}

export class UploadImage extends Component<UploadImageProps, UploadImageState> {
    constructor(UploadImageProps: any) {
        super(UploadImageProps);
        // firebase.auth().onAuthStateChanged(function(user) {
        //     this.setState({ user: user });
        // });
        this.state = {
            user: {},
            isAuthenticated: false,
            imgurl: '',
            img: {},
            caption: '',
            tags: [],
            height: 0,
            width: 0,
            rawurl: 'https://wallpapercave.com/wp/wp3597484.jpg',
            location: {},
            check: false,
        };
    }

    selectedTags = (tagses: any) => {
        this.setState({ tags: tagses });
    };

    componentDidMount() {
        this.getUser().then(
            (user) => {
                this.setState({ isAuthenticated: true, user: user });
            },
            (error) => {
                this.setState({ isAuthenticated: true });
            },
        );
    }

    getUser = () => {
        const auth = checkUserLoggedIn();
        return new Promise(function (resolve, reject) {
            if (auth === undefined) {
            } else {
                firebase
                    .firestore()
                    .collection('users')
                    .doc(auth.uid)
                    .get()
                    .then((querySnapshot) => {
                        const data = querySnapshot.data();
                        if (data) {
                            resolve(data);
                        } else {
                            reject('User not authenticated');
                        }
                    });
            }
        });
    };

    onSubmit = () => {
        const file = this.state.img;
        const user = auth.checkUserLoggedIn();
        const image = new Image();
        let fr = new FileReader();

        if (!user) return;

        if(!this.state.check) {
            alert("You must check the condition");
            return;
        }
        fr.onload = async function () {
            if (fr !== null && typeof fr.result == 'string') {
                image.src = fr.result;
                console.log('in frload');
                console.log('frwidg', image.width);
                console.log('frhigg', image.height);
            }
        };
        fr.readAsDataURL(file);

        var width = 0;
        var height = 0;

        image.onload = function () {
            height = image.height;
            width = image.width;
        };

        setTimeout(() => {
            Compress.imageFileResizer(
                file,
                width,
                height,
                'JPEG',
                50,
                0,
                async (uri: any) => {
                    if (typeof uri === 'string') {
                        const urinew = uri.split('base64,')[1];
                        storage
                            .ref(`/Images/${user.uid}/Posts/${file.name}`)
                            .putString(urinew, 'base64')
                            .then((data) => {
                                data.ref.getDownloadURL().then((url) => {
                                    // this.setState({ imgurl: url });
                                    firebase
                                        .firestore()
                                        .collection('Posts/')
                                        .add({
                                            Image: url,
                                            caption: this.state.caption,
                                            comments: [],
                                            comment_count: 0,
                                            likes_count: 0,
                                            uid: user.uid,
                                            username: this.state.user.User_name,
                                            post_time: new Date(),
                                            tags: this.state.tags,
                                            location: this.state.location,
                                        })
                                        .then(function (docRef) {
                                            console.log('Document written with ID: ', docRef.id);
                                        })
                                        .catch(function (error) {
                                            console.error('Error adding document: ', error);
                                        });
                                });

                                // console.log(this.state.imgurl);
                            });
                    }
                },
                'base64',
            );
        }, 2500);

        // push('/home');
        // console.log(postRef.documentID);
    };

    changeImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files || !event.target.files[0]) return;
        const file = await event.target.files[0];
        this.setState({ img: file, rawurl: URL.createObjectURL(file) });

        // console.log(this.state.img);
    };

    updateCaption = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ caption: event.target.value });
    };

    updateLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ location: event.target.value });
    };

    toggleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ check: !this.state.check });
    };

    render() {
        return (
            <Card
                style={{
                    maxHeight: 800,
                    maxWidth: 600,
                    margin: 'auto',
                    marginBlock: '20px',
                    background: '#1b1b1b',
                    // border: '3px solid #fafafa',
                    borderRadius: '20px',
                }}
            >
                <CardHeader
                    avatar={
                        <Avatar
                            aria-label="recipe"
                            alt={this.state.user.User_name}
                            src={this.state.user.Avatar}
                            style={{ backgroundColor: 'auto' }}
                        >
                            {this.state.user.User_name}
                        </Avatar>
                    }
                    title={<Typography variant="h6">{this.state.user.User_name}</Typography>}
                    style={{ textAlign: 'left', color: '#fafafa' }}
                />
                <CardMedia
                    image={this.state.rawurl}
                    title={`A Photo by ${this.state.user.User_name}`}
                    style={{
                        borderRadius: '20px 20px 20px 20px',
                        height: 0,
                        paddingTop: '56.25%',
                        marginLeft: '10px',
                        marginRight: '10px',
                    }}
                />
                <Box m={-2} />
                <CardActions disableSpacing>
                    <UploadIcon onChange={this.changeImage} />
                </CardActions>
                <CardContent>
                    <TextField
                        name="caption"
                        id="caption"
                        label="Enter Caption"
                        type="caption"
                        onChange={this.updateCaption}
                    />
                </CardContent>
                <CardContent>
                    <Tags selectedTags={this.selectedTags} />
                </CardContent>
                <CardContent>
                    {/* <TextField label="Add Location"> */}
                        <Places address={this.updateLocation}/>
                    {/* </TextField> */}
                </CardContent>
                <CardContent>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        style={{ color: '#fafafa', textAlign: 'center' }}
                        >
                    <label>
                        <input type="checkbox" name="Accept" required onChange={this.toggleCheck}/>
                        
                            Before submitting, you are aware that the post does not go against the community guidelines and
                            does not feature any human faces
                    </label>
                    </Typography>
                </CardContent>
                <CardActions>
                    <RegularBtn
                        type="submit"
                        colorType="white"
                        style={{ width: '50%', borderRadius: '15px' }}
                        onClick={this.onSubmit}
                    >
                        Upload Post!
                    </RegularBtn>
                </CardActions>

                <Places />
            </Card>
        );
    }
}
