import { Grid, Typography } from '@material-ui/core';
import * as React from 'react';
import { RegularBtn } from '../../components/Buttons/RegularBtn';
import TextField from '../../components/Inputs/TextField';
import Card from '../../components/Layouts/Card';
import './styles.scss';
export interface ResetPassProps {}

export default class ResetPass extends React.Component<ResetPassProps> {
    public render(): JSX.Element {
        return (
            <div>
                <div className="bgreset">
                    <Card background="white" title="Reset your Password" split={2}>
                        <Grid container spacing={4} direction="row">
                            <Grid item>
                                <Typography align="left" variant="h3">
                                    <h6>We just want to confirm your identity...</h6>
                                </Typography>
                            </Grid>

                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField label="Email"> </TextField>
                                </Grid>

                                <Grid item xs={12}>
                                    <RegularBtn colorType="orange" style={{ width: '50%', borderRadius: '18px' }}>
                                        Send me a link!
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
