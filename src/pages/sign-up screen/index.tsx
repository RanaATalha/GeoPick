import React from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import { LANDING } from '../../constants/routes';
import SignupForm from './SignupForm';

function Signup() {
    const { push } = useHistory();
    console.log(push);
    if (auth.checkUserLoggedIn()) push(LANDING);
    return <SignupForm />;
}

export default Signup;
