import * as React from 'react';
import { Box } from '@material-ui/core';

export interface ICardProps {
    background?: string;
}

export default function Card({ background = '#F56920', ...props }: React.PropsWithChildren<ICardProps>) {
    return (
        <Box display="flex" m={'10px'}>
            <Box
                boxShadow={100}
                maxWidth={400}
                minWidth={200}
                width={'auto'}
                m="auto"
                borderRadius={18}
                padding={'30px'}
                style={{ background }}
            >
                {props.children}
            </Box>
        </Box>
    );
}
