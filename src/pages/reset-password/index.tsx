import { colors, Grid, Typography } from '@material-ui/core';
import * as React from 'react';
import Checkbox from '../../components/Inputs/Checkbox';
import './styles.scss';
import TextField from '../../components/Inputs/TextField';
import PasswordField from '../../components/Inputs/PasswordField';
import Card from '../../components/Layouts/Card';
//import Card1 from '../../components/Layouts/Card';
import { RegularBtn } from '../../components/Buttons/RegularBtn';
export interface ReSetNewPassProps {}

export default class ReSetNewPasswordScreen extends React.Component<ReSetNewPassProps> {
    public render(): JSX.Element {
        return (
            <html>
                <body>
                    <div className="set-password">
                        <Grid container direction="column" xs={12} alignItems="center" style={{ padding: '16px' }}>
                        <ReSetpasswordHeader/>                       </Grid>
                        <Card background="#FFFFFF">
                           <Grid container spacing={8} direction="row" alignItems="center" justify="center">
                               <ReSetpasswordCardHeader/>
                                 <form>
                                    <ReSetpasswordtextbox/>
                                 
                                    <br/>
                                 </form>
                                    <ReSetpasswordbutton/>
                            </Grid>                            
                        </Card>
                        <br/>
                    </div>
                </body>
            </html>
        );
    }
}

const ReSetpasswordHeader = () => {
    return (
        <Typography variant="h3" align="left" style={{ fontWeight: 'bolder' }}>
        Reset your{' '}
        <span style={{ color: 'orange' }}>
             <br></br>password
        </span>
    </Typography>

    );};
    const ReSetpasswordCardHeader = () => {
        return (
            <Grid item>
            <Typography variant="h5" style={{ color: 'black', fontWeight: 'unset' }}>
                We just want to Confirm your identity...
            </Typography>
        </Grid>

        );};    

    const ReSetpasswordbutton=()=>{
        return(
            <Grid item xs={12} alignItems="center" justify="center" style={{textAlign: 'center' }}>
            <RegularBtn colorType="orange" style={{ width: '50%', borderRadius: '15px' }}>
                Send me a link!
            </RegularBtn>
          </Grid>
        );
    };

    const ReSetpasswordtextbox=()=>{
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
                 <TextField label="Email"> </TextField>
            </Grid>
        </Grid>
);
    };

  