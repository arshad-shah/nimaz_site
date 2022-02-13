import { createTheme, responsiveFontSizes, StyledEngineProvider, ThemeProvider} from '@mui/material';
import React from 'react';
import MainSite from './components/MainSite';


let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#fdff95",
    },
    secondary: {
      main: "#ffbf0d",
    },
    action: {
      hoverOpacity: 0.09,
    },
  },
  breakpoints: {
    values: {
      xs: 320,
      smxs: 350,
      sm: 460,
      md: 786,
      lg: 1024,
      xl: 1440,
    },
  },
  typography: {
    fontFamily: "Nunito",
    fontSize: 18,
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <MainSite/>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
