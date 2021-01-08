import { colors, Grid, Typography } from '@material-ui/core';
import * as React from 'react';
import Checkbox from '../../components/Inputs/Checkbox';
import './styles.scss';
import TextField from '../../components/Inputs/TextField';
import PasswordField from '../../components/Inputs/PasswordField';
import Card from '../../components/Layouts/Card';
//import Card1 from '../../components/Layouts/Card';
import { RegularBtn } from '../../components/Buttons/RegularBtn';

export interface SetNewPassProps {}

export default class SetNewPasswordScreen extends React.Component<SetNewPassProps> {
    public render(): JSX.Element {
        function message() {
            alert('your password has been sucessfilly reset!');
        }
        return (
            <html>
                <body>
                    <div className="set-password">
                        <Grid container direction="column" xs={12} alignItems="center" style={{ padding: '16px' }}>
                        <SetpasswordHeader/>                       </Grid>
                        <Card background="#FFFFFF">
                           <Grid container spacing={4} direction="row" alignItems="center" justify="center">
                               <SetpasswordCardHeader/>
                                 <form>
                                    <Setpasswordtextbox/>
                                    <Setpassworditem/>
                                    <br/>
                                 </form>
                                    <Setpasswordbutton/>
                            </Grid>                            
                        </Card>
                    </div>
                </body>
            </html>
        );
    }
}

const SetpasswordHeader = () => {
    return (
        <Typography variant="h3" align="left" style={{ fontWeight: 'bolder' }}>
        set a{' '}
        <span style={{ color: 'orange' }}>
            new <br></br>password!
        </span>
    </Typography>

    );};
    const SetpasswordCardHeader = () => {
        return (
            <Grid item>
            <Typography variant="h3" style={{ color: 'white', fontWeight: 'unset' }}>
                Setup your account!
            </Typography>
        </Grid>

        );};    

    const Setpasswordbutton=()=>{
        return(
            <Grid item xs={12} alignItems="center" justify="center" style={{ textAlign: 'center' }}>
            <RegularBtn colorType="orange" style={{ width: '50%', borderRadius: '15px' }}>
                Set password
            </RegularBtn>
          </Grid>
        );
    };

    const Setpasswordtextbox=()=>{
        return(
        <Grid
            item
            container
            spacing={3}
            direction="row"
            alignItems="center"
            justify="center"
        >
            <Grid item xs={12}>
                <PasswordField> </PasswordField>
            </Grid>
            <Grid item style={{ width: '100%' }}>
                <PasswordField label="Confirm Password" />
            </Grid>
        </Grid>
);
    };

    const Setpassworditem=()=>{
       return(<Grid item container spacing={3}>
        <Grid
            item
            xs={2}
            alignContent="center"
            alignItems="center"
            style={{ verticalAlign: 'true' }}
        >
            
        </Grid>
        <Grid
            item
            xs={10}
            alignContent="center"
            alignItems="center"
            style={{ paddingTop: '20px', verticalAlign: 'true' }}
        ></Grid>
    </Grid>
);
};