import * as React from 'react';
import PasswordField from '../../components/Inputs/PasswordField';
import TextField from '../../components/Inputs/TextField';
import Card from '../../components/Layouts/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { RegularBtn } from '../../components/Buttons/RegularBtn';
import { Link } from 'react-router-dom';
import './styles.scss';
import { auth } from '../../firebase';
export interface SignInProps {}

export default class SignInScreen extends React.Component<SignInProps> {
    public render(): JSX.Element {
        /* const Signin = ()=> {
            const email=document.querySelector("#Email")?.nodeValue;
            const password=document.querySelector("#Password")?.nodeValue;
            auth.doSignInWithEmailAndPassword(email,password).then((u)=>{
                console.log("sucessfully logged");
                
            }).catch((err)=>{
                console.log("Error "+ err.toString)
            })
        };*/
        
        return (
            <div>
                <div className="bg">
                    <Card background="white" title="Sign In" split={1}>
                        <Grid container spacing={4} direction="row">
                            <Grid item>
                                <Typography align="left" variant="h3">
                                    <h5>You know what to do... </h5>
                                </Typography>
                            </Grid>

                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField id="Email" label="Email"> </TextField>
                                </Grid>

                                <Grid item xs={12}>
                                    <PasswordField id="Password"> </PasswordField>
                                </Grid>

                                <Grid item xs={12}>
                                    <RegularBtn colorType="orange" style={{ width: '50%', borderRadius: '18px' }}>
                                        Sign In
                                    </RegularBtn>
                                </Grid>

                                <Grid item xs={12}>
                                    <Link to="/ReSet-password"> Forgot Password ?</Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                </div>
            </div>
        );
    }
}
