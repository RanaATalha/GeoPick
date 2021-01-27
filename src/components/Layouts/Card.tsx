import * as React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

export interface ICardProps {
    background?: string;
    title?: string;
    split?: number;
}

export default function Card({ background = '#F56920', title, split, ...props }: React.PropsWithChildren<ICardProps>) {
    return (
        <Box display="flex" m={'10px'} alignItems="center" justifyContent="center">
            <Grid
                container
                alignItems="center"
                justify="center"
                spacing={4}
                style={{ maxWidth: '400px', minWidth: '200px' }}
            >
                {title && split ? <CardTitle title={title} split={split} /> : null}
                <Grid item xs={12} justify="center">
                    
                    <Box
                        boxShadow={100}
                        width={'auto'}
                        maxWidth={400}
                        minWidth={200}
                        minHeight={450}
                        m="auto"
                        borderRadius={18}
                        padding={'30px'}
                        style={{ background }}
                    >
                        <br/>
                        {props.children}
                    </Box>
                    <br/>
                </Grid>
            </Grid>
        </Box>
    );
}

const CardTitle = (props: { title: string; split: number }) => {
    const { title, split } = props;
    const titleArray = title.split(' ');
    const whiteTitle = titleArray.slice(0, split).join(' ');
    const orangeTitle = titleArray.slice(split, title.length - 1).join(' ');
    return (
        <Grid item xs={12} justify="center" style={{ paddingLeft: '18px' }}>
            <Typography variant="h3" align="left" style={{ fontWeight: 'bolder' }}>
                {whiteTitle} <span style={{ color: '#F56920' }}>{orangeTitle}</span>
            </Typography>
        </Grid>
    );
};
