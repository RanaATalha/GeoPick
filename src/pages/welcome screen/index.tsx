import * as React from 'react';
import './styles.scss';
import WhiteLogo from './WhiteLogo.svg';
import googleButton from './googleButton.svg';
import background from './welcome-pg.png';
import { Grid, Typography } from '@material-ui/core';
import Checkbox from '../../components/Inputs/Checkbox';
import TextField from '../../components/Inputs/TextField';
import PasswordField from '../../components/Inputs/PasswordField';
import Card from '../../components/Layouts/Card';
import { RegularBtn } from '../../components/Buttons/RegularBtn';
import { Widgets } from '@material-ui/icons';
interface WelcomeProps {}

const WelcomeScreen: React.FunctionComponent<WelcomeProps> = (props) => {
    return (
        <html>
            <body
                style={{
                    backgroundImage: `url(${background})`,
                }}
            >
                {/* <img src ={background} width='auto'> */}
                <div className="welcomepg">
                    <Grid container spacing={4} direction="column" alignItems="center" justify="center">
                        <Grid item>
                            <img src={WhiteLogo} alt="GeoPicK Logo" />
                        </Grid>
                        <Grid item>
                            <Typography variant="h5" align="center">
                                <span>A tool for</span>
                                <br></br>shutterbugs!
                            </Typography>
                        </Grid>
                        <Grid item>
                            <button className="g-btn">
                                <img src={googleButton} width="22px" alt="Google" />
                                <p className="text">Sign in</p>
                            </button>
                        </Grid>
                        <Grid item>
                            {/* <p className="or">or</p> */}
                            <hr />
                        </Grid>
                        <Grid item>
                            <button className="sign-btn">Sign up now!</button>
                            {/* <br></br> */}
                            <button className="sign-btn1">Sign in</button>
                        </Grid>
                    </Grid>

                    {/* <p className="caption"> */}

                    {/* </p> */}
                    {/* <div className=""></div> */}

                    {/* <br></br> */}
                </div>
            </body>
        </html>
    );
};

export default WelcomeScreen;
