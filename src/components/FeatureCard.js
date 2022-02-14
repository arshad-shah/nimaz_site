import { Card } from "@mui/material";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function FeatureCard({ title, description, image }) {
	return (
		//   a card that displays the feature title, description, and image
		// the image is on the right side of the card
		// the title is on the left side of the card
		// the description is below the title

		<Card
			elevation={0}
			style={{
				display: "flex",
				flexDirection: "row",
				flexWrap: "wrap",
				justifyContent: "center",
				alignItems: "center",
				width: "100%",
				maxWidth: "100%",
				margin: "auto",
				padding: "1rem",
				backgroundColor: "white",
				borderRadius: "0.5rem",
				boxShadow: "0px 0px 0px 0px rgba(0,0,0,0.2)",
				marginBottom: "1rem",
			}}
		>
			<LazyLoadImage
				aria-label="Picture of Arshad shah."
				src={image}
				alt={title}
				style={{
					width: "100%",
					maxWidth: "100%",
					margin: "auto",
					backgroundColor: "white",
					border: "1px solid #f7cd49",
					borderRadius: "0.5rem",
					boxShadow: "0px 0px 0px 0px rgba(0,0,0,0.2)",
					marginBottom: "1rem",
				}}
			/>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					flexWrap: "wrap",
					justifyContent: "center",
					alignItems: "center",
					width: "100%",
					maxWidth: "100%",
					margin: "auto",
					padding: "1rem",
					backgroundColor: "white",
					borderRadius: "0.5rem",
					boxShadow: "0px 0px 0px 0px rgba(0,0,0,0.2)",
					marginBottom: "1rem",
				}}
			>
				<h3
					style={{
						fontSize: "1.5rem",
						fontWeight: "bold",
						color: "#3f51b5",
						margin: "0",
						padding: "0",
					}}
				>
					{title}
				</h3>
				<p
					style={{
						fontSize: "1rem",
						fontWeight: "normal",
						color: "#3f51b5",
						margin: "0",
						padding: "0",
					}}
				>
					{description}
				</p>
			</div>
		</Card>
	);
}

export default FeatureCard;
