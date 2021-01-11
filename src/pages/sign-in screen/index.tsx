import * as React from 'react';
import PasswordField from '../../components/Inputs/PasswordField';
import TextField from '../../components/Inputs/TextField';
import Card from '../../components/Layouts/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { RegularBtn } from '../../components/Buttons/RegularBtn';
import { Link } from 'react-router-dom';
import './styles.scss';
export interface SignInProps {}

export default class SignInScreen extends React.Component<SignInProps> {
    public render(): JSX.Element {
        return (
            <div>
                
                <div className="bg">

                        <Typography align="center" variant="h3">
                             Sign <span> In</span>
                        </Typography>
                    
                <Card background="black">
                    <Grid container spacing={4} direction="row">
                        <Grid item>
                            <Typography align="left" variant="h3">
                                <span>You know</span> <div> what </div> <span> to do... </span>
                            </Typography>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField label="Email"> </TextField>
                            </Grid>

                            <Grid item xs={12}>
                                <PasswordField> </PasswordField>
                            </Grid>

                            <Grid item xs={12}>
                                <RegularBtn colorType="auto"> Sign In </RegularBtn>
                            </Grid>

                            <Grid item xs={12}>
                                <RegularBtn colorType="white">
                                    <Link to="/ReSet-password"> Forgot Password ?</Link>
                                </RegularBtn>
                            </Grid>
                        </Grid>
                    </Grid>
                    </Card>
                    </div>
            </div>
        );
    }
}
