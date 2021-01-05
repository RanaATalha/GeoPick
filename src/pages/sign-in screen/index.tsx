import * as React from 'react';
import './styles.scss';
import PasswordField from '../../components/Inputs/PasswordField';
import TextField from '../../components/Inputs/TextField';
import Card from '../../components/Layouts/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { RegularBtn } from '../../components/Buttons/RegularBtn';
import GoogleSignInBtn from '../../components/Buttons/GoogleSignInBtn';
import { Link } from 'react-router-dom';
import './styles.scss';
;



export interface SignInProps {}

export default class SignInScreen extends React.Component<SignInProps> {
    public render(): JSX.Element {
        return (

            <html>
                <body>
                    <div className="main_div">

                        <div className="Sign-In">
                            <h1>Sign in</h1>
                        </div>

                        <div className="Rectangle">

                            <h1> You know what to do... </h1>
                        
                        <form>
                                      
                            <input type="Username" className="form" placeholder="Username" />
                            <br></br>
                            <input type="Password" className="form" placeholder="Password" required />
                            <br></br>
                
                        </form>

                            <button className="signin-btn">Sign in</button>

                            <a href="/about/contact_us.htm">Contact</a>
                            
                        </div>
                    </div>
                </body>
            </html>
        );
    }
}
