import { CssBaseline, Fab, styled, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { FiArrowUp } from 'react-icons/fi';
import Footer from './Footer';
import Header from './Header';
import Mobile from '../Navigation/Mobile';
import { ScrollToFade, ScrollToTop } from '../Animations/ScrollToTop';
import LandingPage from './LandingPage';



const PREFIX = "MainSite";

const classes = {
  root: `${PREFIX}-root`,
  fab: `${PREFIX}-fab`,
};

const Root = styled("div")(({ theme }) => ({

  [`& .${classes.fab}`]: {
    fontSize: "2rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "4rem",
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "4rem",
    },
  },
}));
function MainSite(props) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
      <Root>
          
        <CssBaseline />
      <Header isMobile={isMobile} />
      {isMobile ? <Mobile /> : null}
        <ScrollToFade {...props}>
            <LandingPage isMobile={isMobile} />
        </ScrollToFade>

      <ScrollToTop {...props}>
          <Fab
            color="secondary"
            data-block="backtotopbutton"
            data-testid="backtoTopButton"
            size="large"
            className={classes.fab}
            aria-label="scroll back to top"
          >
            <FiArrowUp />
          </Fab>
        </ScrollToTop>
      <Footer isMobile={isMobile}/>
    </Root>
  )
}

export default MainSite;