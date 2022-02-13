import React from "react";
import { styled } from "@mui/material/styles";
import { Box, List, ListItem, Link as ExternalLink } from "@mui/material";
import { Link } from "react-scroll";

const PREFIX = "Mobile";

const classes = {
  button: `${PREFIX}-button`,
  mobileMenuList: `${PREFIX}-mobileMenuList`,
  mobileMenuItem: `${PREFIX}-mobileMenuItem`,
};

const StyledBox = styled(Box)(({ theme }) => ({
  [`& .${classes.button}`]: {
    "&:hover": {
      backgroundColor: "transparent",
    },
    color: theme.palette.text.primary,
    fontWeight: "bold",
    textDecoration: "none",
    cursor: "pointer",
    borderRadius: "0.5rem",
    transition: "all 0.5s ease",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("smxs")]: {
      fontSize: "0.8rem",
    },
  },

  [`& .${classes.mobileMenuList}`]: {
    display: "flex",
    flexDirection: "row",
    bottom: "0",
    position: "fixed",
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    zIndex: "100",
    padding: "10px",
  },

  [`& .${classes.mobileMenuItem}`]: {
    justifyContent: "center",
    padding: "10px",
  },
}));

export default function Mobile() {
  return (
    <StyledBox aria-label="mobileMenu" data-toggle="mobileMenu">
      <List className={classes.mobileMenuList}>
        <ListItem button className={classes.mobileMenuItem}>
          <Link
            className={classes.button}
            data-block="Featuresmenuitemmobile"
            to="Features"
            data-testid="FeaturesOption"
            spy
            smooth
            aria-label="Features"
          >
            Features
          </Link>
        </ListItem>
        <ListItem button className={classes.mobileMenuItem}>
          <Link
            className={classes.button}
            data-block="Gallerymenuitemmobile"
            to="Gallery"
            data-testid="GalleryOption"
            spy
            smooth
            aria-label="Gallery"
          >
            Gallery
          </Link>
        </ListItem>
      </List>
    </StyledBox>
  );
}
