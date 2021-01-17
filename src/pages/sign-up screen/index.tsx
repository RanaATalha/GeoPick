import React from 'react';
import { RouteChildrenProps, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import { LANDING } from '../../constants/routes';
import SignupForm from './SignupForm';
import { useForm } from 'react-hook-form';

function Signup() {
    const { push } = useHistory();
    if (auth.checkUserLoggedIn()) push(LANDING);
    return <SignupForm />;
}

export default Signup;
