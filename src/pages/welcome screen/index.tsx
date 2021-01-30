import * as React from 'react';
import './styles.scss';
import { auth } from '../../firebase';
import { BrowserRouter as Link, useHistory } from 'react-router-dom';
import WhiteLogo from './WhiteLogo.svg';
import googleButton from './googleButton.svg';
// import background from './welcome-pg.png';
import { Grid, Typography } from '@material-ui/core';

import { RegularBtn } from '../../components/Buttons/RegularBtn';
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
};*/const { push } = useHistory();
    const GoogleSignin = () => {
        
        auth.doGoogleSignUp().then((u)=>{
            
            if(u.additionalUserInfo?.isNewUser){
                push('/create-profile');
            } else {
                push('/home')
            }
    
        }).catch((error) => {
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
                                    <span style={{ color: 'white' }}>New to GeoPicK?</span>
                                    <br />
                                    <br />
                                    <RegularBtn colorType="dark" onClick={GoogleSignin} className="g-btn">
                                        <p className="text">Sign up with </p>
                                        <img
                                            src={googleButton}
                                            width="22px"
                                            alt="Google"
                                            style={{ marginLeft: '10px' }}
                                        />    
                                    </RegularBtn>
                                    <br></br>
                                    <br />
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
                                    <hr style={{ width: '500px' }} />
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
