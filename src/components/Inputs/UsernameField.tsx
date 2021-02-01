import React from 'react';
import { Box, TextField as MatTextField, TextFieldProps, withStyles } from '@material-ui/core';
import { InputAdornment } from '@material-ui/core';
import Tick from './Tick.svg';
import cross from './cross.svg';

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'black',
        },
        '& label': {
            color: 'black',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'black',
        },
        '& .MuiFilledInput-root': {
            borderRadius: 20,
            background: 'white',
            color: 'black',
            '& fieldset': {
                borderColor: 'black',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'black',
            },
        },
    },
})(MatTextField);

interface State {
    username: string;
    acceptableUsername: boolean;
}

export default function UsernameField({ InputProps, variant = 'filled', ...props }: TextFieldProps) {
    const [values] = React.useState<State>({
        username: '',
        acceptableUsername: false,
    });

    return (
        <Box display="flex">
            <Box boxShadow={5} maxWidth={380} minWidth={200} width="100%" m="auto" borderRadius={20}>
                <CssTextField
                    variant="filled"
                    fullWidth
                    InputProps={{
                        ...InputProps,
                        endAdornment: (
                            <InputAdornment position="end">
                                {values.acceptableUsername ? (
                                    <img src={Tick} alt="tick" />
                                ) : (
                                    <img src={cross} alt="cross" />
                                )}
                            </InputAdornment>
                        ),
                        disableUnderline: true,
                    }}
                    {...props}
                />
            </Box>
        </Box>
    );
}
