import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#F56920',
            light: '#F56920',
            dark: '#F56920',
        },
        secondary: {
            main: '#2F4858',
        },
    },

    typography: {
        fontFamily: [
            'Poppins',
            'Quicksand',
            'Montserrat',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});

export default responsiveFontSizes(theme);
