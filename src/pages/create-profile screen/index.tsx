import * as React from 'react';
import './styles.scss';
import TextField from '@material-ui/core/TextField';
import {
    FilledInput,
    IconButton,
    Input,
    InputAdornment,
    InputBaseProps,
    InputLabel,
    OutlinedInput,
    SvgIcon,
} from '@material-ui/core';

interface State {
    username: string;
    occupation: string;
    acceptableUsername: boolean;
}


const CreateProfileScreen : React.FunctionComponent<InputBaseProps> = (props) =>  {
        
    const [values, setValues] = React.useState<State>({
        username: '',
        occupation:'',
        acceptableUsername: false,
    });
    
        const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setValues({ ...values, [prop]: event.target.value });
        };
        
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
                            <form>
                                <Input required
                                    className = "textField"
                                    placeholder = "Enter Username"
                                    type = "text"
                                    value={values.username}
                                    onChange={handleChange('username')}
                                    id="username-input-adornment"
                                    endAdornment={
                                        <InputAdornment position="end">
                                        {values.acceptableUsername? <img src="GeoPick/Assets/SVGs/Tick.svg"/>: <img src="GeoPick/Assets/SVGs/cross.svg"/> }
                                        </InputAdornment>
                                    }
                                />
                                <TextField
                                    className = "textField"
                                    placeholder = "Enter occupation (optional)"
                                    type = "text"
                                    value={values.occupation}
                                    onChange={handleChange('occupation')}
                                    id="occupation-input-optional"
                                />
                                <span className = "Condition">*Other users will be able to view your username and display picture as above</span>
                                <button type = "submit" className = "Common">Complete Registration</button>
                            </form>
                        </div>
                    </div>
                </body>
            </html>
        );
}

export default CreateProfileScreen;