import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Button, IconButton, Tooltip } from '@mui/material';
import { Link } from 'react-scroll';
// icons
import { FiArrowDown } from 'react-icons/fi';

import PropTypes from 'prop-types';
import {
	SiGoogleplay,
} from 'react-icons/si';
const PREFIX = 'LandingPage';

const classes = {
	hero: `${PREFIX}-hero`,
	landingIntro: `${PREFIX}-landingIntro`,
	landingName: `${PREFIX}-landingName`,
	landingDesc: `${PREFIX}-landingDesc`,
	ScrollDown: `${PREFIX}-scrollDown`,
};

const StyledBox = styled(Box)(({ theme }) => ({
	[`&.${classes.hero}`]: {
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
        color: '#000000',
        backgroundColor: '#ffecb3',
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: '100vh',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			fontSize: theme.spacing(2),
		},
	},

	[`& .${classes.ScrollDown}`]: {
		padding: '1rem',
		marginTop: '1rem',
        fontSize: '2rem',
        color: "black",
	},
}));

export default function LandingPage({ isMobile }) {
	return (
        <StyledBox className={classes.hero} data-testid="hero">
            <Tooltip title="Play Store Link" arrow>
						<IconButton
							data-testid="shoplink"
							data-block="shoplink"
							role="button"
							color="inherit"
							sx={{
								transition: 'all 0.3s ease-out',
								'&:hover': {
									boxShadow: '0px 0px 10px #e0e0e0',
									transform: 'scale(1.2)',
									transition: 'all 0.13s ease-in',
								},
							}}
							aria-label="Link to Google play for Nimaz"
							href="https://play.google.com/store/apps/details?id=com.arshadshah.nimaz&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
							size="large">
							<SiGoogleplay />
						</IconButton>
					</Tooltip>
			{!isMobile ? (
				<Link to="aboutme" spy smooth>
					<Button
						data-testid="scrollDown"
						aria-label="scroll down button"
						size="large"
						className={classes.ScrollDown}
                        variant="outlined"
                        color="inherit"
						data-block="scrolldown">
						<FiArrowDown />
					</Button>
				</Link>
			) : null}
		</StyledBox>
	);
}

LandingPage.propTypes = {
	isMobile: PropTypes.bool.isRequired,
};
