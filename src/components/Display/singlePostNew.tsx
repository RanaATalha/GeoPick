import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import SharePost from './sharePost';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddCommentRoundedIcon from '@material-ui/icons/AddCommentRounded';
import './singlePostStyles.scss';
import { checkUserLoggedIn } from '../../firebase/auth';
import firebase from 'firebase';
import fb from 'firebase/app';
// import GuessTheLocationPlay from '../Game/guessPlay';

export interface SinglePostNewProps {
    username?: string;
    postPic?: string;
    date?: string;
    avatar?: string;
    uid?: string;
    likes_count?: number;
    caption?: string;
    id?: string;
    sharedURL?: string;
    hidden?: boolean;
    comments_count?: number;
}

export interface SinglePostNewState {
    favourited: boolean;
    user: any;
    post_user: any;
    open_share: boolean;
    isOpen: boolean;
    path_name: string;
}

class SinglePostNew extends Component<SinglePostNewProps, SinglePostNewState> {
    constructor(SinglePostNewProps: any) {
        super(SinglePostNewProps);
        this.state = {
            favourited: false,
            user: checkUserLoggedIn(),
            post_user: {},
            open_share: false,
            isOpen: false,
            path_name: `/post/${this.props.uid}`,
        };
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
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

    componentDidUpdate() {
        firebase
            .firestore()
            .collection('users')
            .doc(this.props.uid)
            .get()
            .then((querySnapshot) => {
                const data = querySnapshot.data();
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
    render() {
        // const classes = useStyles();
        const path = window.location.href.split('/');
        const root = path[path.length - 2];
        return (
            <Card style={{ maxWidth: 400, margin: 'auto', marginBlock: '20px', background: '#1b1b1b' }}>
                <CardHeader
                    avatar={
                        <Avatar
                            aria-label="recipe"
                            alt={this.state.post_user.User_name}
                            src={this.state.post_user.Avatar}
                            style={{ backgroundColor: 'auto' }}
                        >
                            {this.state.post_user.User_name}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={this.state.post_user.User_name}
                    subheader={this.props.date}
                    style={{ textAlign: 'left', color: '#fafafa' }}
                />
                <CardMedia
                    image={this.props.postPic}
                    title="Paella dish"
                    style={{
                        borderRadius: '20px 20px 20px 20px',
                        height: 0,
                        paddingTop: '56.25%',
                        marginLeft: '10px',
                        marginRight: '10px',
                    }}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p" style={{ color: '#fafafa' }}>
                        {this.props.caption}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton
                        aria-label="add to favorites"
                        style={this.state.favourited ? { color: '#dc143c' } : { color: '#FAFAFA' }}
                        onClick={this.handleColorChange}
                    >
                        <FavoriteIcon />
                        {this.props.likes_count}
                    </IconButton>
                    <IconButton aria-label="share">
                        <SharePost sharedURL={`${root}${this.state.path_name}`} />
                    </IconButton>
                    <Link to={{ pathname: `/post/${this.props.id}`, state: this.props.uid }}>
                        <IconButton aria-label="add a comment" style={{ color: '#FAFAFA' }}>
                            <AddCommentRoundedIcon />
                            <span>{this.props.comments_count}</span>
                        </IconButton>
                    </Link>
                    {/* <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton> */}
                </CardActions>
            </Card>
        );
    }
}
export default SinglePostNew;
