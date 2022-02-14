import React from "react";
import FeatureCard from "../FeatureCard";
import { FeaturesData } from "../../data/FeaturesData";
import { Box, Grid, Toolbar, Typography } from "@mui/material";

function Features() {
	return (
		<Box padding={2}>
			<Toolbar id="features" />
			<Typography variant="h2" align="center" gutterBottom>
				Features
			</Typography>
			<Grid container spacing={3}>
				{FeaturesData.map((feature) => (
					<Grid item xs={12} sm={6} md={4} lg={3} key={feature.title}>
						<FeatureCard
							title={feature.title}
							description={feature.description}
							image={feature.image}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}

export default Features;
