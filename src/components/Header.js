import React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Typography } from '@mui/material';
import HideOnScroll from '../Animations/HideOnScroll';

import Desktop from '../Navigation/Desktop';
import logo from '../assets/logo.png';
import PropTypes from 'prop-types';
const PREFIX = 'Header';

const classes = {
	root: `${PREFIX}-root`,
	MobileHeader: `${PREFIX}-MobileHeader`,
	title: `${PREFIX}-title`,
	titleMobile: `${PREFIX}-titleMobile`,
	logo: `${PREFIX}-logo`,
};

const Root = styled('div')(({ theme }) => ({
	[`& .${classes.root}`]: {
		flexGrow: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	[`& .${classes.MobileHeader}`]: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},

	[`& .${classes.title}`]: {
		flexGrow: 1,
		padding: '0.9rem',
		fontWeight: 'bold',
		letterSpacing: '3px',
	},

	[`& .${classes.titleMobile}`]: {
		padding: '0.9rem',
		fontWeight: 'bold',
		letterSpacing: '3px',
	},

	[`& .${classes.logo}`]: {
		height: '3rem',
		width: '3rem',
		padding: '0.3rem',
	},
}));

export default function Header(props) {
	const { isMobile } = props;

	return (
		<Root className={isMobile ? '' : classes.root}>
			<Toolbar id="back-to-top-anchor" />
			{isMobile ? (
				<HideOnScroll {...props}>
					<AppBar data-testid="header">
						<Toolbar className={classes.MobileHeader}>
							<img aria-label="Logo" src={logo} className={classes.logo} alt="Logo" />
							<Typography
								variant="h5"
								color="textPrimary"
								className={classes.titleMobile}>
								Nimaz
							</Typography>
						</Toolbar>
					</AppBar>
				</HideOnScroll>
			) : (
				<HideOnScroll {...props}>
					<AppBar data-testid="header">
						<Toolbar>
							<img aria-label="Logo" src={logo} className={classes.logo} alt="Logo" />
							<Typography variant="h5" color="textPrimary" className={classes.title}>
								Nimaz
							</Typography>
							<Desktop />
						</Toolbar>
					</AppBar>
				</HideOnScroll>
			)}
		</Root>
	);
}
Header.propTypes = {
	isMobile: PropTypes.bool,
};
