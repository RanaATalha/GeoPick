import { colors, Grid, Typography } from '@material-ui/core';
import * as React from 'react';
import Checkbox from '../../components/Inputs/Checkbox';
import './styles.scss';
import TextField from '../../components/Inputs/TextField';
import PasswordField from '../../components/Inputs/PasswordField';
import Card from '../../components/Layouts/Card';
import { RegularBtn } from '../../components/Buttons/RegularBtn';

export interface SetNewPassProps {}

export default class SetNewPasswordScreen extends React.Component<SetNewPassProps> {
    public render(): JSX.Element {
        function message() {
            alert('your password has been sucessfilly reset!');
        }
        return (
            <html>
                <body style={{ padding: '100px' }}>
                    <div className="set-password">
                        <Card title="Set a new Password" split={2} background="#FFFFFF">
                            <Grid container spacing={4} direction="row" alignItems="center" justify="center">
                                <form>
                                    <PasswordFields />
                                    <Setpasswordbutton />
                                </form>
                            </Grid>
                        </Card>
                        <br />
                    </div>
                </body>
            </html>
        );
    }
}

const PasswordFields = () => {
    return (
        <Grid item container spacing={3} direction="row" alignItems="center" justify="center">
            <Grid item style={{ width: '100%', paddingTop: '30%' }}>
                <PasswordField style={{ paddingTop: '50px' }} />
            </Grid>
            <Grid item style={{ width: '100%', paddingBottom: '20%' }}>
                <PasswordField label="Confirm Password" />
            </Grid>
        </Grid>
    );
};

const Setpasswordbutton = () => {
    return (
        <Grid
            item
            xs={12}
            alignItems="center"
            justify="center"
            style={{ textAlign: 'center', paddingTop: '10%', paddingBottom: '40%' }}
        >
            <RegularBtn type="submit" colorType="orange" style={{ width: '50%', borderRadius: '15px' }}>
                Set password
            </RegularBtn>
        </Grid>
    );
};
