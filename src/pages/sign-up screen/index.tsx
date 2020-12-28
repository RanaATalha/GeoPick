import * as React from 'react';
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
                                <input type="text" className="form" placeholder="Email" />
                                <br></br>
                                <input type="password" className="form" placeholder="Password" required />
                                <br></br>
                                <input type="password" className="form" placeholder="Confirm password" required />
                                <br></br>
                                <input type="radio" className="radio-btn" />
                                <span>
                                    {' '}
                                    By signing up i confirm that i have read and accepted the terms and conditions of
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
