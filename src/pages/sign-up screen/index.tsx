import React from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import { auth } from '../../firebase';
import { LANDING } from '../../constants/routes';
import SignupForm from './SignupForm';
import { useForm } from 'react-hook-form';

function Signup(props: RouteChildrenProps) {
    if (auth.checkUserLoggedIn()) props.history.push(LANDING);
    return <SignupForm />;
}

export default Signup;
