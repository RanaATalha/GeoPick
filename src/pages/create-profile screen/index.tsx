import * as React from 'react';
import './styles.scss';
import UsernameField from '../../components/Inputs/UsernameField';
import TextField from '../../components/Inputs/TextField';
import Card from '../../components/Layouts/Card';


export interface CreateProfileProps {}
export default class CreateProfileScreen extends React.Component<CreateProfileProps>  {
    public render(): JSX.Element {
        return (<html>
                <body>
                    <div className = "Create-Profile-Page">
                        <h1>
                            {' '}
                            Create <br/> <span>Profile</span>
                        </h1>
                        <div className = "Profile-Orange-Box">
                            <div className = "eclipse7"></div>
                            <button type = "button" className = "Add-Avatar"></button>
                            <form className = "User-Details">
                                <UsernameField required
                                    className = "textField"
                                    placeholder = "Enter username"
                                    type = "text"
                                    id="username-input-required"
                                />
                                <br/>
                                <br/>
                                <TextField
                                    className = "textField"
                                    placeholder = "Enter occupation (optional)"
                                    type = "text"
                                    id="occupation-input-optional"
                                />
                                <p className = "Condition">*Other users will be able to view your username and display picture as above</p>
                                <button type = "submit" className = "Registeration-Button">Complete Registration</button>
                            </form>
                        </div>
                    </div>
                </body>
            </html>
        );
    }
}

