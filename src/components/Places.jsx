import React from "react";
import data from "../data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Places = ({ match }) => {
	const place = data[match.params.id];
	const carousel = place.carousel.map((image, key) => (
		<img key={key} rel="preload" src={image} alt={place.name} />
	));

	const animate = {
		duration: 0.75,
		ease: [0.43, 0.13, 0.23, 0.96],
	};

	return (
		<motion.div
			intial="intial"
			animate="animate"
			exit="exit"
			className="container"
		>
			<div className="info">
				<button>
					<Link to="./" className="exit">
						X
					</Link>
				</button>
				<motion.h4
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						y: 20,
						transition: { delay: 0.1, ...animate },
					}}
					exit={{
						opacity: 0,
						y: -20,
						transition: { delay: 0.1, ...animate },
					}}
				>
					{place.name}
				</motion.h4>
				<motion.h5
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						y: 20,
						transition: { delay: 0.3, ...animate },
					}}
					exit={{
						opacity: 0,
						y: -20,
						transition: { delay: 0.3, ...animate },
					}}
				>
					{place.location}
				</motion.h5>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						y: 20,
						transition: { delay: 0.5, ...animate },
					}}
					exit={{
						opacity: 0,
						y: -20,
						transition: { delay: 0.5, ...animate },
					}}
					className="description"
				>
					<p>architect: {place.architect}</p>
					<p>
						area: {place.area} m<sup>2</sup>
					</p>
					<p>built: {place.built}</p>
					<blockquote cite={place.link}>{place.quote}</blockquote>
					<a
						className="cite"
						href={place.link}
						target="_blank"
						rel="noopener noreferrer"
					>
						<cite>—Wikipedia</cite>
					</a>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: 200 }}
				animate={{
					opacity: 1,
					y: 0,
					transition: { ...animate },
				}}
				exit={{
					opacity: 0,
					y: 200,
					transition: { ...animate },
				}}
				className="images"
			>
				{carousel}
			</motion.div>
		</motion.div>
	);
};

export default Places;
