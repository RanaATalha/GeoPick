import React from 'react';
import { Box, TextField as MatTextField, TextFieldProps, withStyles } from '@material-ui/core';

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

function TextField({ InputProps, variant = 'filled', ...props }: TextFieldProps) {
    return (
        <Box display="flex">
            <Box boxShadow={5} maxWidth={380} minWidth={200} width="100%" m="auto" borderRadius={20}>
                <CssTextField
                    variant="filled"
                    fullWidth
                    InputProps={{
                        ...InputProps,
                        disableUnderline: true,
                    }}
                    {...props}
                />
            </Box>
        </Box>
    );
}

export default TextField;
