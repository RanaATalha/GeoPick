import * as React from 'react';
import { Component } from 'react';
import { Avatar, Box, Button, Card, CardHeader, Grid, Typography } from '@material-ui/core';
import WhiteLogo from '../welcome screen/WhiteLogo.svg';
export interface ViewPointsProps {}

export interface ViewPointsState {}

class ViewPoints extends React.Component<ViewPointsProps, ViewPointsState> {
    handleonclick() {
        console.log('Share with friends!');
    }
    render() {
        return (
            <div style={{ background: '#1b1b1b', paddingTop: '10px', paddingBottom: '50px' }}>
                <img
                    src={WhiteLogo}
                    alt="GeoPicK"
                    style={{ width: '200px', height: '66px', margin: 'auto', paddingBottom: '1em' }}
                />
                <Card
                    style={{
                        height: '80%',
                        width: '30em',
                        maxWidth: '70%',
                        margin: 'auto',
                        padding: '20px',
                        borderRadius: '50px',
                    }}
                >
                    <Avatar
                        src={'avatar comes here'}
                        alt={'username comes here'}
                        style={{ margin: 'auto', width: '100px', height: '100px', marginBottom: '20px' }}
                    ></Avatar>
                    <Typography variant="h5" style={{ color: '#f56920' }}>
                        {'username comes here'}
                    </Typography>
                    <Box m={5}></Box>

                    <Typography variant="h6">Congratulations, you have</Typography>
                    <Typography variant="h1" style={{ fontWeight: 'bolder' }}>
                        {'10000'}
                    </Typography>
                    <Box m={-2}></Box>
                    <Typography variant="h3" style={{ color: '#f56920' }}>
                        points
                    </Typography>
                    <Box m={3}></Box>
                </Card>
                <Button
                    onClick={this.handleonclick}
                    style={{
                        background: '#f56920',
                        color: '#fafafa',
                        padding: '10px 20px 10px 20px',
                        margin: 'auto',
                        borderRadius: '20px',
                        marginTop: '20px',
                    }}
                >
                    Share it with your friends
                </Button>
            </div>
        );
    }
}

export default ViewPoints;
