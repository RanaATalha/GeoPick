import { Grid, Typography } from '@material-ui/core';
import * as React from 'react';
import Checkbox from '../../components/Inputs/Checkbox';
// import './styles.scss';
import TextField from '../../components/Inputs/TextField';
import PasswordField from '../../components/Inputs/PasswordField';
import Card from '../../components/Layouts/Card';
import { RegularBtn } from '../../components/Buttons/RegularBtn';
export interface SignUpProps {}

export default class SignUpScreen extends React.Component<SignUpProps> {
    public render(): JSX.Element {
        return (
            <html>
                <body>
                    <div className="PageSignUp">
                        <h1>
                            {' '}
                            <Typography variant="h2" align="left">
                                Sign Up
                            </Typography>
                        </h1>
                        {/* <div className="Sign-Up"> */}
                        <Card>
                            <Grid container spacing={4} direction="row" alignItems="center" justify="center">
                                <Grid item>
                                    <Typography variant="h3">Setup your account!</Typography>
                                </Grid>
                                <Grid item>
                                    <form>
                                        <Grid
                                            container
                                            spacing={3}
                                            direction="row"
                                            alignItems="center"
                                            justify="center"
                                        >
                                            <Grid item style={{ width: '100%' }}>
                                                <TextField label="Email" />
                                            </Grid>
                                            <Grid item style={{ width: '100%' }}>
                                                <PasswordField />
                                            </Grid>
                                            <Grid item style={{ width: '100%' }}>
                                                <PasswordField label="Confirm Password" />
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={4}>
                                            <Grid item xs={1}>
                                                <Checkbox required />
                                            </Grid>
                                            <Grid
                                                item
                                                xs={11}
                                                alignContent="center"
                                                alignItems="center"
                                                style={{ paddingTop: '20px', verticalAlign: 'true' }}
                                            >
                                                <Typography align="left" style={{ fontSize: '12px', color: '1B1B1E' }}>
                                                    By signing up I conform that I have read and accepted the terms and
                                                    conditions of using the application.
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <br></br>
                                        <RegularBtn colorType="white">Sign Up!</RegularBtn>
                                    </form>
                                </Grid>
                            </Grid>
                        </Card>
                        {/* </div> */}
                    </div>
                </body>
            </html>
        );
    }
}
