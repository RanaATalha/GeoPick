import React from 'react';
import { Box, TextField as MatTextField, TextFieldProps, withStyles } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import TextField from './TextField';

function LocationPicker({ InputProps, variant = 'filled', ...props }: TextFieldProps) {
    return (
        <Autocomplete
            id="combo-box-demo"
            options={countries}
            getOptionLabel={(option) => option.label}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
        />
    );
}

const countries = [
    { code: 'AD', label: 'Andorra', phone: '376' },
    { code: 'AE', label: 'United Arab Emirates', phone: '971' },
    { code: 'AF', label: 'Afghanistan', phone: '93' },
    { code: 'AG', label: 'Antigua and Barbuda', phone: '1-268' },
    { code: 'AI', label: 'Anguilla', phone: '1-264' },
];

export default LocationPicker;
