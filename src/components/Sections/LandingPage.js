import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";
import logo from "../../assets/logo.png";
import PropTypes from "prop-types";
import { SiGoogleplay } from "react-icons/si";
import { MdPrivacyTip } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";
import PPolicy from "../../assets/legal/Privacy Policy.pdf";
import TandC from "../../assets/legal/Terms and Condition.pdf";
import SocialLinks from "../SocialLinks";
const PREFIX = "LandingPage";

const classes = {
	hero: `${PREFIX}-hero`,
};

const StyledBox = styled(Box)(({ theme }) => ({
	[`&.${classes.hero}`]: {
		display: "flex",
		flexDirection: "column",
		flexWrap: "wrap",
		color: theme.palette.text.primary,
		backgroundColor: theme.palette.background.default,
		textAlign: "center",
		alignItems: "center",
		justifyContent: "center",
		minHeight: "100vh",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
			fontSize: theme.spacing(2),
		},
	},
}));

export default function LandingPage({ isMobile }) {
	return (
		<StyledBox className={classes.hero} data-testid="hero">
			<Box
				display="flex"
				flexDirection="row"
				flexWrap="nowrap"
				justifyContent="center"
				alignItems="center"
				width="100%"
				maxWidth="100%"
				margin="auto"
				data-testid="landingIntro"
			>
				<Box
					display="flex"
					flexDirection="row"
					flexWrap="wrap"
					justifyContent="center"
					alignItems="center"
					width="100%"
					maxWidth="100%"
					margin="auto"
					data-testid="landingName"
				>
					<Typography variant="h2" color="textPrimary">
						Nimaz
					</Typography>
					<Typography variant="h4" color="textPrimary">
						A simple and Easy to use Islamic lifestyle Companion App
					</Typography>
					<Button
						startIcon={<SiGoogleplay />}
						variant="contained"
						sx={{
							padding: "0.5rem",
							margin: "0.5rem",
						}}
						data-testid="shoplink"
						data-block="shoplink"
						aria-label="Link to Google play for Nimaz"
						href="https://play.google.com/store/apps/details?id=com.arshadshah.nimaz&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
					>
						Android
					</Button>

					<Box
						display="flex"
						flexDirection="row"
						flexWrap="wrap"
						justifyContent="center"
						alignItems="center"
						width="100%"
						maxWidth="100%"
						margin="auto"
						data-testid="landingDocs"
					>
						<Button
							startIcon={<MdPrivacyTip />}
							variant="contained"
							sx={{
								padding: "0.5rem",
								margin: "0.5rem",
							}}
							data-testid="shoplink"
							data-block="shoplink"
							aria-label="Link to Google play for Nimaz"
							href={PPolicy}
						>
							Privacy
						</Button>
						<Button
							startIcon={<HiDocumentText />}
							variant="contained"
							sx={{
								padding: "0.5rem",
								margin: "0.5rem",
							}}
							data-testid="shoplink"
							data-block="shoplink"
							aria-label="Link to Google play for Nimaz"
							href={TandC}
						>
							T&Cs
						</Button>
					</Box>
					<Box
						display="flex"
						flexDirection="column"
						flexWrap="wrap"
						justifyContent="center"
						alignItems="center"
						width="100%"
						maxWidth="100%"
						margin="1rem"
						data-testid="landingSocialLinks"
					>
						<Typography variant="h6" color="textPrimary">
							Get in touch
						</Typography>
						<SocialLinks
							sx={{
								color: "#000000",
								transition: "all 0.3s ease-out",
								"&:hover": {
									boxShadow: "0px 0px 10px #000000",
									transform: "scale(1.1)",
									transition: "all 0.13s ease-in",
								},
							}}
						/>
					</Box>
				</Box>

				{!isMobile && (
					<Box
						display="flex"
						flexDirection="row"
						flexWrap="wrap"
						justifyContent="center"
						alignItems="center"
						width="100%"
						maxWidth="100%"
						margin="auto"
						data-testid="landingDesc"
					>
						<img src={logo} alt="logo" />
					</Box>
				)}
			</Box>
		</StyledBox>
	);
}

LandingPage.propTypes = {
	isMobile: PropTypes.bool.isRequired,
};
