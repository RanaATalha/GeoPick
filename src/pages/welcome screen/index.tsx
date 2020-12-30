import * as React from 'react';
import './styles.scss';
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
                            <Grid item>
                                <button className="g-btn">
                                    <img src={googleButton} width="22px" alt="Google" />
                                    <p className="text">Sign in</p>
                                </button>
                                <br></br>
                                <hr />
                                <button className="sign-btn">Sign up now!</button>
                                {/* <br></br> */}
                                <button className="sign-btn1">Sign in</button>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </body>
        </html>
    );
};

export default WelcomeScreen;
