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
                        <Card title="Reset your Password" split={2} background="#FFFFFF">
                            <br/>
                            <Grid container spacing={4} direction="row" alignItems="center" justify="center">
                                <ReSetpasswordHeader title="We just want to confirm your identity..." split={6}/>
                                <form>
                                    <Grid
                                        item
                                        container
                                        spacing={4}
                                        direction="row"
                                        alignItems="center"
                                        justify="center"
                                    >
                                    <EmailTextbox/>
                                    <br/>
                                    <ReSetpasswordbutton/>
                                    </Grid>         
                                    <br/>
                                    <br/>                      
                                </form>
                            </Grid>
                        </Card>
                    </div>
                </body>
            </html>
        );
    }
}

const ReSetpasswordHeader = (props: { title: string; split: number }) => {
    const { title, split } = props;
    const titleArray = title.split(' ');
    const tile1 = titleArray.slice(0, split).join(' ');
    const tile2 = titleArray.slice(split, title.length - 1).join(' ');
    return (
        <Grid item xs={12} justify="center" style={{ paddingLeft: '5%' }}>
            <Typography variant="h4" align="left">
                <span style={{ color: '#F56920' }}>{tile1}</span> <span style={{ color: 'black' }}>{tile2}</span>
            </Typography>
        </Grid>
    );
};
  

const ReSetpasswordbutton=()=>{
    return(
        <Grid item xs={12} alignItems="center" justify="center" style={{textAlign: 'center', paddingTop: '20%', paddingBottom: '25%'}}>
            <RegularBtn type="submit" colorType="orange" style={{ width: '50%', borderRadius: '15px', padding: '2%'}}>
                Send me a link!
            </RegularBtn>
        </Grid>
    );
};

const EmailTextbox=()=>{
    return(
        <Grid
            item
            container
            spacing={3}
            direction="row"
            alignItems="center"
            justify="center"
        >
            <Grid item style={{ width: '90%', paddingTop: '20%'}}>
                    <TextField label="Email"> </TextField>
            </Grid>
        </Grid>
    );
};

  