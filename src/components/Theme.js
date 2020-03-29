import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#eeeeee',
            contrastText: '#2b2b2b',
        },
        secondary: {
            main: '#ffffff',
            contrastText: '#6b6b6b',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    typography: {
        // Use the system font instead of the default Roboto font.
        "fontFamily": "\"Helvetica\", \"Arial\", sans-serif",

    },
    shadows: ["none"],
    spacing: 8,
});

export default theme