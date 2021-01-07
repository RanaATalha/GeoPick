import * as React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

export interface ICardProps {
    background?: string;
}

export default function Card({ background = 'white', ...props }: React.PropsWithChildren<ICardProps>) {
    return (
        <Box display="flex" m={'10px'} alignItems="center" justifyContent="center">
            <Grid
                container
                alignItems="center"
                justify="center"
                spacing={4}
                style={{ maxWidth: '400px', minWidth: '200px' }}
            >
                <Grid item xs={12}>
                    <Box
                        boxShadow={100}
                        width={'auto'}
                        maxWidth={400}
                        minWidth={200}
                        m="auto"
                        borderRadius={18}
                        padding={'30px'}
                        style={{ background }}
                    >
                        {props.children}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
