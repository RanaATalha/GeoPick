import { Grid, Typography } from '@material-ui/core';
import * as React from 'react';
import { RegularBtn } from '../../components/Buttons/RegularBtn';
import PasswordField from '../../components/Inputs/PasswordField';
import TextField from '../../components/Inputs/TextField';
import Card from '../../components/Layouts/Card';
import './styles.scss';
export interface SetNewPassProps {}

export default class SetNewPass extends React.Component<SetNewPassProps> {
    public render(): JSX.Element {
        return (
            <div>
                <div className="bgnewpass">
                    <Card background="white" title="Set a new Password" split={2}>
                        <Grid container spacing={5} direction="row">
                            <Grid container spacing={4}>
                                <Grid item xs={12}>
                                    <PasswordField> </PasswordField>
                                </Grid>

                                <Grid item xs={12}>
                                    <PasswordField label="Confirm Password" />{' '}
                                    {/* ask to add the cofirm text in the components */}
                                </Grid>
                                <Grid item xs={12}>
                                    <RegularBtn colorType="orange" style={{ width: '50%', borderRadius: '18px' }}>
                                        Set Password
                                    </RegularBtn>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                </div>
            </div>
        );
    }
}
