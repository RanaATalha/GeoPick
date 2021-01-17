import { Grid, Typography } from '@material-ui/core';
import * as React from 'react';
import Checkbox from '../../components/Inputs/Checkbox';
import TextField from '../../components/Inputs/TextField';
import PasswordField from '../../components/Inputs/PasswordField';
import Card from '../../components/Layouts/Card';
import { RegularBtn } from '../../components/Buttons/RegularBtn';
import { auth } from '../../firebase';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
export interface SignUpProps {}

export default function SignUpScreen() {
    return (
        <Card title="Sign Up!" split={1}>
            <Grid container spacing={4} direction="row" alignItems="center" justify="center">
                <SignUpHeader title="Enter some of your personal details" />
                <SignUpForm />
            </Grid>
        </Card>
    );
}

const SignUpHeader = (props: { title: string }) => {
    return (
        <Grid item>
            <Typography variant="h5" style={{ color: 'white', fontWeight: 'unset', textAlign: 'left' }}>
                {props.title}
            </Typography>
        </Grid>
    );
};

const SignUpFields = ({ register, errors }: { register: any; errors: any }) => {
    console.log(errors);
    return (
        <Grid item container spacing={3} direction="row" alignItems="center" justify="center">
            <Grid item style={{ width: '100%' }}>
                <TextField
                    name="email"
                    id="Email"
                    label="Email"
                    inputRef={register({ required: true })}
                    error={errors.email ? true : false}
                />
            </Grid>
            <Grid item style={{ width: '100%' }}>
                <PasswordField
                    name="password"
                    id="Password"
                    inputRef={register({ required: true, minLength: 8 })}
                    error={errors.password ? true : false}
                />
            </Grid>
            <Grid item style={{ width: '100%' }}>
                <PasswordField
                    name="confirm-password"
                    id="ConformPassword"
                    label="Confirm Password"
                    inputRef={register({ required: true, minLength: 8 })}
                />
            </Grid>
        </Grid>
    );
};

const SignUpForm = () => {
    const { handleSubmit, errors, register } = useForm();
    const { push } = useHistory();
    const onSubmit = (data: any) => {
        console.log(data);
        push('/create-profile');
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <SignUpFields register={register} errors={errors} />
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
                <Grid item xs={12} alignItems="center" justify="center" style={{ textAlign: 'center' }}>
                    <RegularBtn type="submit" colorType="white" style={{ width: '50%', borderRadius: '15px' }}>
                        Sign Up!
                    </RegularBtn>
                </Grid>
            </form>
        </>
    );
};
