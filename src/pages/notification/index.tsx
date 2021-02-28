import * as React from 'react';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import WhiteLogo from '../welcome screen/WhiteLogo.svg';
import { Grid, Typography, Box } from '@material-ui/core';
import Card from '../../components/Layouts/Card';
import { Avatar, IconButton, Toolbar } from '@material-ui/core';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';


export interface NotificationpgProps {}

export default function Notificationpg() {

    return (
        <div style={{ background: '#1b1b1b' }} className="bgg">
            <Toolbar>
                    <img src={WhiteLogo} alt="GeoPicK" className="WhiteLogo" />
            </Toolbar>
            <div style={{ color: '#fafafa' }}>
                        <Card background="#202020" title="Notification" split={1}></Card>
            </div>
        </div>
            )
}