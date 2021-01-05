import * as React from 'react';
import './styles.scss';
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
<<<<<<< Updated upstream
                            <Grid
                                item
                                xs={2}
                                alignContent="center"
                                alignItems="center"
                                style={{ verticalAlign: 'true' }}
                            ></Grid>
                            <Grid item xs={12} alignItems="center" justify="center" style={{ textAlign: 'center' }}>
                                <RegularBtn
                                    colorType="dark"
                                    style={{ border: 'orange', width: '150px', borderRadius: '15px', height: '50px' }}
                                >
                                    <img src={googleButton} width="22px" alt="Google" />
                                    <h1 style={{ color: 'white', fontSize: '15px' }}>Sign in </h1>
                                </RegularBtn>
                            </Grid>
                            <Divider variant="middle" orientation="horizontal" />
                            <Grid item xs={12} alignItems="center" justify="center" style={{ textAlign: 'center' }}>
                                <RegularBtn
                                    colorType="orange"
                                    style={{ color: 'white', width: '150px', height: '50px', borderRadius: '15px' }}
                                >
                                    <h1 style={{ color: 'white', fontSize: '15px' }}>Sign Up Now! </h1>
                                </RegularBtn>
                            </Grid>
                            <Grid item xs={12} alignItems="center" justify="center" style={{ textAlign: 'center' }}>
                                <RegularBtn
                                    colorType="dark"
                                    style={{ width: '150px', height: '50px', borderRadius: '15px' }}
                                >
                                    <h1 style={{ color: 'white', fontSize: '15px' }}>Sign in </h1>
                                </RegularBtn>
=======
                            <Grid item>
                                <button className="g-btn">
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
>>>>>>> Stashed changes
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </body>
        </html>
    );
};

export default WelcomeScreen;
