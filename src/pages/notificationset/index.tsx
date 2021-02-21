import * as React from 'react';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import WhiteLogo from '../welcome screen/WhiteLogo.svg';
import { Grid, Typography, Box } from '@material-ui/core';
import Card from '../../components/Layouts/Card';
import { Avatar, IconButton, Toolbar } from '@material-ui/core';

export interface NotificationProps {}

export default function Notification() {
    return (
        <div style={{ background: '#1b1b1b' }} className="bgg">
                <Toolbar>
                    <img src={WhiteLogo} alt="GeoPicK" className="WhiteLogo" />
                </Toolbar>
                <div style={{ color: '#fafafa' }}>
                    <Card  background="#202020" title="Notification Setting" split={1}>
                        <div style={{ color: 'black' }}>
                            <Grid container spacing={4} direction="row" alignItems="center" justify="center">
                                
                            </Grid>
                        </div>
                    </Card>
                </div>
                <br />
            </div>
    );
}
