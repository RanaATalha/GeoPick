import * as React from 'react';
import PasswordField from '../../components/Inputs/PasswordField';
import TextField from '../../components/Inputs/TextField';
import './styles.scss';
export interface SignUpProps {}

export default class SignUpScreen extends React.Component<SignUpProps> {
    public render(): JSX.Element {
        return (
            <html>
                <body>
                    <div className="PageSignUp">
                        <h1>
                            {' '}
                            <span>Sign</span> Up
                        </h1>
                        <div className="Sign-Up">
                            <p>
                                Enter some of your <br></br> <span>personal details</span>...
                            </p>
                            <form>
                                <TextField label="email" />
                                <br></br>
                                <PasswordField />
                                <br></br>
                                <PasswordField label="Confirm Password" />
                                <br></br>
                                <input type="radio" className="radio-btn" />
                                <span>
                                    {' '}
                                    By signing up i conform that i have read and accepted the terms and conditions of
                                    using the application.
                                </span>
                                <br></br>
                                <button className="signin-btn">Sign Up!</button>
                            </form>
                        </div>
                    </div>
                </body>
            </html>
        );
    }
}
