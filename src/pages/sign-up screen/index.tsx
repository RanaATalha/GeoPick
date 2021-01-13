import { Grid, Typography } from '@material-ui/core';
import * as React from 'react';
import Checkbox from '../../components/Inputs/Checkbox';
// import './styles.scss';
import TextField from '../../components/Inputs/TextField';
import PasswordField from '../../components/Inputs/PasswordField';
import Card from '../../components/Layouts/Card';
import { RegularBtn } from '../../components/Buttons/RegularBtn';
import CreateProfileScreen from '../create-profile-screen/index';

export interface SignUpProps {}

export default class SignUpScreen extends React.Component<SignUpProps> {
    public render(): JSX.Element {
        return (
            <Card title="Sign Up!" split={1}>
                <Grid container spacing={4} direction="row" alignItems="center" justify="center">
                    <SignUpHeader title="Enter some of your personal Details"/>
                    <SignUpForm />
                </Grid>
            </Card>
        );
    }
}

const SignUpHeader = (props: { title: string }) => {
    return (
        <Grid item>
            <Typography variant="h5" style={{ color: 'white', fontWeight: 'unset', textAlign: 'left'}}>
                {props.title}
            </Typography>
        </Grid>
    );
};

const SignUpFields = () => {
    return (
        <Grid item container spacing={3} direction="row" alignItems="center" justify="center">
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
    );
};

const SignUpForm = () => {
    return (
        <>
            <form>
                <SignUpFields />
                <Grid item container spacing={3}>
                    <Grid item xs={2} alignContent="center" alignItems="center" style={{ verticalAlign: 'true' }}>
                        <Checkbox required />
                    </Grid>
                    <Grid
                        item
                        xs={10}
                        alignContent="center"
                        alignItems="center"
                        style={{ paddingTop: '20px', verticalAlign: 'true' }}
                    >
                        <Typography align="left" style={{ fontSize: '12px', color: '1B1B1E' }}>
                            By signing up I conform that I have read and accepted the terms and conditions of using the
                            application.
                        </Typography>
                    </Grid>
                </Grid>
            </form>
            <Grid item xs={12} alignItems="center" justify="center" style={{ textAlign: 'center' }}>
                <a href="/create-profile">
                <RegularBtn colorType="white" style={{ width: '50%', borderRadius: '15px' }}>
                    Sign Up!
                </RegularBtn>
                </a>
            </Grid>
        </>
    );
};
