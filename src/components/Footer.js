import { Box, Button, Link, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import SocialLinks from "./SocialLinks";
import PPolicy from "../assets/legal/Privacy Policy.pdf";
import TandC from "../assets/legal/Terms and Condition.pdf";
import { HiDocumentText } from "react-icons/hi";
import { MdPrivacyTip } from "react-icons/md";
export default function Footer({ isMobile }) {
	const desktopStyles = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "#ffffff",
		padding: "1rem",
	};

	const mobileStyles = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "#ffffff",
		padding: "1rem",
		marginBottom: "5rem",
	};
	return (
		<Box data-testid="footer" sx={isMobile ? mobileStyles : desktopStyles}>
			<Typography variant="h6">
				&copy; {new Date().getFullYear()} Arshad Shah
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

			<Box
				display="flex"
				flexDirection="row"
				flexWrap="wrap"
				justifyContent="center"
				alignItems="center"
				alignContent="center"
				width="100%"
				maxWidth="100%"
				margin="auto"
				padding="0.5rem"
				data-testid="footerDocs"
			>
				<Link
					href={PPolicy}
					target="_blank"
					rel="noopener noreferrer"
					data-testid="privacyPolicy"
					sx={{
						color: "#000000",
						transition: "all 0.3s ease-out",
						textDecoration: "none",
						margin: "0.5rem",
						"&:hover": {
							textDecoration: "underline",
							color: "purple.500",
						},
					}}
				>
					Privacy
				</Link>

				<Link
					href={TandC}
					target="_blank"
					rel="noopener noreferrer"
					data-testid="privacyPolicy"
					sx={{
						color: "#000000",
						transition: "all 0.3s ease-out",
						textDecoration: "none",
						margin: "0.5rem",
						"&:hover": {
							textDecoration: "underline",
							color: "purple.500",
						},
					}}
				>
					T&Cs
				</Link>
			</Box>
			<Typography variant="subtitle2">
				V1.1 16 / February / 2022
			</Typography>
		</Box>
	);
}

Footer.propTypes = {
	isMobile: PropTypes.bool.isRequired,
};
