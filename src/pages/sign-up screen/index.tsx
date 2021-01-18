
import React from 'react';
import { RouteChildrenProps, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import { CREATE_PROFILE } from '../../constants/routes';
import SignupForm from './SignupForm';
import { useForm } from 'react-hook-form';

function Signup() {
    const { push } = useHistory();
    if (auth.checkUserLoggedIn()) push(CREATE_PROFILE);
    return <SignupForm />;
}

export default Signup;
