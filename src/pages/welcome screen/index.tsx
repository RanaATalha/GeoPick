import * as React from 'react';
import './styles.scss';
import { auth } from '../../firebase';
import app from 'firebase/app';
import SignUpScreen from '../sign-up screen/index';
import { BrowserRouter as Router, Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import WhiteLogo from './WhiteLogo.svg';
import googleButton from './googleButton.svg';
// import background from './welcome-pg.png';
import { createStyles, Grid, makeStyles, Theme, Typography, Button } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Checkbox from '../../components/Inputs/Checkbox';
import TextField from '../../components/Inputs/TextField';
import PasswordField from '../../components/Inputs/PasswordField';
import Card from '../../components/Layouts/Card';
import { RegularBtn } from '../../components/Buttons/RegularBtn';
import { AlternateEmailTwoTone, Widgets } from '@material-ui/icons';
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
};*/
    const GoogleSignin = () => {
        auth.doGoogleSignUp().catch((error) => {
            console.log(error);
            window.alert('Failed to login');
        });
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
                                    <RegularBtn colorType="dark" onClick={GoogleSignin} className="g-btn">
                                        <img
                                            src={googleButton}
                                            width="22px"
                                            alt="Google"
                                            style={{ marginLeft: '10px' }}
                                        />
                                        <p className="text">Sign in</p>
                                    </RegularBtn>
                                    <br></br>
                                    <hr style={{ width: '500px' }} />
                                    <div style={{ paddingBottom: '5%' }}>
                                        <a href="/sign-up">
                                            <RegularBtn
                                                // className="sign-btn"
                                                colorType="orange"
                                                style={{
                                                    // color: '#fafafa',
                                                    borderRadius: '20px',
                                                    width: '195px',
                                                    height: '45px',
                                                    // background: '#f56920',
                                                }}
                                            >
                                                <div style={{ color: '#fafafa' }}>Sign up now!</div>
                                            </RegularBtn>
                                        </a>
                                    </div>
                                    {/* <br></br> */}
                                    <div style={{ paddingBottom: '20%' }}>
                                        <a href="/sign-in">
                                            <RegularBtn colorType="dark" className="sign-btn1">
                                                Sign in
                                            </RegularBtn>
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
