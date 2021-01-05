import * as React from 'react';
import { Button as MatButton, ButtonProps, Theme, withStyles } from '@material-ui/core';

export interface IRegularBtnProps extends ButtonProps {
    colorType: 'white' | 'dark' | 'orange' | 'auto';
}

const Button = ({
    style = { borderRadius: '16px', textTransform: 'none', minWidth: '100px', fontWeight: 'bold' },
    ...props
}: ButtonProps) => <MatButton style={style} {...props} />;

const WhiteButton = withStyles({
    root: {
        background: 'white',
        color: '#F56920',
    },
})(Button);

const DarkButton = withStyles({
    root: {
        background: '#1B1B1E',
    },
})(Button);

const OrangeButton = withStyles({
    root: {
        background: '#F56920',
    },
})(Button);

const AutoButton = withStyles((theme: Theme) => ({
    root: {
        background: theme.palette.type === 'dark' ? '#F56920' : 'white',
    },
}))(Button);

export function RegularBtn({ colorType = 'auto', ...props }: IRegularBtnProps) {
    switch (colorType) {
        case 'white':
            return <WhiteButton variant="contained" {...props} />;
        case 'dark':
            return <DarkButton variant="contained" {...props} />;
        case 'orange':
            return <OrangeButton variant="contained" {...props} />;
        case 'auto':
            return <AutoButton variant="contained" {...props} />;
        default:
            return <AutoButton variant="contained" {...props} />;
    }
}
