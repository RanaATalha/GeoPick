import * as React from 'react';
import './styles.scss';
import Firebase from '../../firebase';
import app from 'firebase/app';
import SignUpScreen from '../sign-up screen/index';
import { BrowserRouter as Router, Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import WhiteLogo from './WhiteLogo.svg';
import googleButton from './googleButton.svg';
// import background from './welcome-pg.png';
import { createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Checkbox from '../../components/Inputs/Checkbox';
import TextField from '../../components/Inputs/TextField';
import PasswordField from '../../components/Inputs/PasswordField';
import Card from '../../components/Layouts/Card';
import { RegularBtn } from '../../components/Buttons/RegularBtn';
import { Widgets } from '@material-ui/icons';
interface WelcomeProps {}

// const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//         root: {
//             flexGrow: 1,
//         },
//         paper: {
//             padding: theme.spacing(2),
//             textAlign: 'center',
//             color: theme.palette.text.secondary,
//         },
//     }),
// );
const WelcomeScreen: React.FunctionComponent<WelcomeProps> = (props) => {
    // const classes = useStyles();
/* var config={
   apiKey:"",
   authDomain:"",
   databaseURL:"",
   project:"",
   storeageBucket:"",
   messageingSenderid:""
};
GoogleSignin=()=>{
    provider=new firebase.auth.GoogleAuthProvider()
    firebase.auth().signinWithPopup(provider).then(function(result){
        console.log(result)
        console.log("Google account is linked")
    }).catch(function(err){
     console.log(err)
     console.log("failed to login")
    })
}
*/
const Submit =()=>{
   alert('error')
}
var firebaseConfig = {
    apiKey: "AIzaSyDIvlHZc4WMB_6IibnMOQc-_D9M2noB57w",
    authDomain: "geopick-db.firebaseapp.com",
    projectId: "geopick-db",
    storageBucket: "geopick-db.appspot.com",
    messagingSenderId: "165396932142",
    appId: "1:165396932142:web:e39c9dcd9e80c5d4cfa1bf",
    measurementId: "G-XS2DD50LZW"
  };


    return (
        <html>
            <body>
                {/* <img src ={background} width='auto'> */}
                <div className="welcomepg">
                    <Grid container spacing={10} direction="column" alignItems="center" justify="center">
                        <Grid item>
                            <img src={WhiteLogo} alt="GeoPicK Logo" />
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                        </Grid>
                        <Grid item>
                            <Typography variant="h3" align="center">
                                <span>A tool for</span>
                                <br></br>shutterbugs!
                            </Typography>
                        </Grid>
                        <Grid container spacing={3} direction="column" alignItems="center" justify="center">
                            <Grid
                                item
                                xs={2}
                                alignContent="center"
                                alignItems="center"
                                style={{ verticalAlign: 'true' }}
                            ></Grid>
                            <Grid item xs={12} alignItems="center" justify="center" style={{ textAlign: 'center' }}>
                                <Grid item>
                                    <button onClick={Submit} className="g-btn">
                                        <img src={googleButton} width="22px" alt="Google" />
                                        <p className="text">Sign in</p>
                                    </button>
                                    <br></br>
                                    <hr style={{ width: '500px' }} />
                                    <div style={{ paddingBottom: '5%' }}>
                                        <a href="/sign-up">
                                            <button className="sign-btn">Sign up now!</button>
                                        </a>
                                    </div>
                                    {/* <br></br> */}
                                    <div style={{ paddingBottom: '20%' }}>
                                        <a href="/sign-in">
                                            <button className="sign-btn1">Sign in</button>
                                        </a>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </body>
        </html>
    );
};

export default WelcomeScreen;
