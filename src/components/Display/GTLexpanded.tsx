import { Box, Button, Typography } from '@material-ui/core';
import * as React from 'react';
import { Component } from 'react';
import GTLicon from '../Inputs/The pin.svg';
export interface GTLexpandedProps {}

export interface GTLexpandedState {}

const GTLexpanded = (props: { location1: String; location2: String; location3: String }) => {
    return (
        <Box
            style={{
                padding: '5px 20px 5px 20px',
                // position: 'static',
                // // float: 'right',
                // right: '200px',
                marginLeft: 'auto',
                marginRight: '3px',
                background: '#202020',
                color: '#F56920',
                borderRadius: '20px',
                fontSize: '10px',
                maxWidth: '100px',
                maxHeight: '400px',
            }}
        >
            <img src={GTLicon} alt="GeoPin" style={{ float: 'right' }}></img>
            <Typography variant="body2" color="primary" style={{ textAlign: 'left', marginBottom: '10px' }}>
                Guess The Location
            </Typography>
            <span style={{ paddingBottom: '10px', paddingTop: '10px' }}>
                <Button
                    style={{
                        marginLeft: '3px',
                        marginRight: '3px',
                        textAlign: 'center',
                        fontSize: '10px',
                        marginBottom: '5px',
                        background: '#fafafa',
                        width: '90%',
                        borderRadius: '20px',
                    }}
                >
                    {props.location1}
                </Button>
                {/* The correct option */}
                <Button
                    style={{
                        marginLeft: '3px',
                        marginRight: '3px',
                        textAlign: 'center',
                        fontSize: '10px',
                        marginBottom: '5px',
                        background: '#fafafa',
                        width: '90%',
                        borderRadius: '20px',
                    }}
                >
                    {props.location2}
                </Button>
                <Button
                    style={{
                        marginLeft: '3px',
                        marginRight: '3px',
                        textAlign: 'center',
                        fontSize: '10px',
                        marginBottom: '5px',
                        background: '#fafafa',
                        width: '90%',
                        borderRadius: '20px',
                    }}
                >
                    {props.location3}
                </Button>
            </span>
        </Box>
    );
};

export default GTLexpanded;
