import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';


const useTheme = ()=>{
    let theme = createMuiTheme({
      palette: {
        primary: {
          // light: will be calculated from palette.primary.main,
          main: '#05122a',
          // dark: will be calculated from palette.primary.main,
          // contrastText: will be calculated to contrast with palette.primary.main
        },
        // secondary: {
        //   light: '#0066ff',
        //   main: '#0044ff',
        //   // dark: will be calculated from palette.secondary.main,
        //   contrastText: '#ffcc00',
        // },
        info:{
            main: "#f34423"
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
      },
    });
    theme = responsiveFontSizes(theme);

    return theme;

}

export default useTheme;