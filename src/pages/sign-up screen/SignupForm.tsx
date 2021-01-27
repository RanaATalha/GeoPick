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
                    type="email"
                    inputRef={register({
                        required: true,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'invalid email address',
                        },
                    })}
                    error={errors.email ? true : false}
                    helperText={errors.email ? 'invalid email' : null}
                />
            </Grid>
            <Grid item style={{ width: '100%' }}>
                <PasswordField
                    name="password"
                    id="Password"
                    inputRef={register({ required: true, minLength: 8 })}
                    error={errors.password ? true : false}
                    helperText={errors.password ? 'invalid password' : null}
                />
            </Grid>
            <Grid item style={{ width: '100%' }}>
                <PasswordField
                    name="confirmpassword"
                    id="ConformPassword"
                    label="Confirm Password"
                    inputRef={register({ required: true, minLength: 8 })}
                    required />
            </Grid>
            <Grid item container spacing={3}>
                <Grid item xs={2} alignContent="center" alignItems="center" style={{ verticalAlign: 'true' }}>
                    <Checkbox required inputRef={register({ register: true })} />
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
        </Grid>
    );
};

const SignUpForm = () => {
    const { handleSubmit, errors, register } = useForm();
    const { push } = useHistory();
    const onSubmit = (data: any) => {
        console.log('trying ');
        if (data.password === data.confirmpassword) {
            auth.doCreateUserWithEmailAndPassword(data.email, data.password)
                .then((u) => {
                    console.log('sucessfully signed up');
                    push('/create-profile');
                })
                .catch((err) => {
                    console.log('Error ' + err);
                    alert(err);
                });
        } else {
            alert('type the same password in conformation password');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <SignUpFields register={register} errors={errors} />

                <Grid item xs={12} alignItems="center" justify="center" style={{ textAlign: 'center' }}>
                    <RegularBtn type="submit" colorType="white" style={{ width: '50%', borderRadius: '15px' }}>
                        Sign Up!
                    </RegularBtn>
                </Grid>
            </form>
        </>
    );
};
