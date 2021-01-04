import * as React from 'react';
import './styles.scss';
import SignUpScreen from '../sign-up screen/index';
import { BrowserRouter as Router, Route, Switch, Link, BrowserRouter, } from 'react-router-dom';
import WhiteLogo from './WhiteLogo.svg';
import googleButton from './googleButton.svg';
import background from './welcome-pg.png';
import { createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
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
            <body
                style={{
                    backgroundImage: `url(${background})`,
                }}
            >
                {/* <img src ={background} width='auto'> */}
                <div className="welcomepg">
                    <Grid container spacing={10} direction="column" alignItems="center" justify="center">
                        <Grid item>
                            <img src={WhiteLogo} alt="GeoPicK Logo" />
                        </Grid>
                        <Grid item>
                            <Typography variant="h3" align="center">
                                <span>A tool for</span>
                                <br></br>shutterbugs!
                            </Typography>
                        </Grid>
                        <Grid container spacing={3} direction="column" alignItems="center" justify="center">
                            <Grid item xs={2}
                                            alignContent="center"
                                            alignItems="center"
                                            style={{ verticalAlign: 'true' }}>
                            </Grid>

                                <Grid item xs={12} alignItems="center" justify="center" style={{ textAlign: 'center' }}>
                                    <RegularBtn colorType="dark" style={{border:"orange", width: '150px', borderRadius: '15px', height:'50px' }}>
                                    <img src={googleButton} width="22px" alt="Google" />
                                    <h1 style={{color:"white" , fontSize:"15px"}}>Sign in </h1> 
                                    </RegularBtn>
                                </Grid>
                    __________________________________
                                <Grid item xs={12} alignItems="center" justify="center" style={{ textAlign: 'center' }}>
                                    <RegularBtn colorType="auto"  style={{ background:"Orange" ,color:"white", width: '150px',height:'50px' ,borderRadius: '15px' }}>
                                    <h1 style={{color:"white" , fontSize:"15px"}}>Sign Up Now! </h1> 
                                    </RegularBtn>
                                </Grid>

                                <Grid item xs={12} alignItems="center" justify="center" style={{ textAlign: 'center' }}>
                                    <RegularBtn colorType="dark" style={{ width: '150px',height:'50px' ,borderRadius: '15px' }}>
                                    <h1 style={{color:"white" , fontSize:"15px"}}>Sign in </h1> 
                                    </RegularBtn>
                                </Grid>
                        </Grid>
                    </Grid>
                </div>
            </body>
        </html>
    );
};

export default WelcomeScreen;
