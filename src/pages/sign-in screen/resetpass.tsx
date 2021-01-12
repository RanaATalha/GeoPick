import * as React from 'react';
import Card from '../../components/Layouts/Card';
export interface ResetPassProps {}

export default class ResetPass extends React.Component<ResetPassProps> {
    public render(): JSX.Element {
        return (
            <div>
                <div className="bg">
                    <Card background="white" title="Sign In" split={1}>
                        <Grid container spacing={4} direction="row">
                            <Grid item>
                                <Typography align="left" variant="h3">
                                    <h5>You know what to do... </h5>
                                </Typography>
                            </Grid>

                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField label="Email"> </TextField>
                                </Grid>

                                <Grid item xs={12}>
                                    <PasswordField> </PasswordField>
                                </Grid>

                                <Grid item xs={12}>
                                    <RegularBtn colorType="orange" style={{ width: '50%', borderRadius: '18px' }}>
                                        Sign In
                                    </RegularBtn>
                                </Grid>

                                <Grid item xs={12}>
                                    <Link to="/ReSet-password"> Forgot Password ?</Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                </div>
            </div>
        );
    }
}
