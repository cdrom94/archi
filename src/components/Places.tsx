import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { data } from "../data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IData } from "../types";

export const Places = ({ match }: RouteComponentProps<{ id: string }>) => {
	const place: IData = data[match.params.id];

	const animate: {
		duration: number;
		ease: number[];
	} = {
		duration: 0.75,
		ease: [0.43, 0.13, 0.23, 0.96],
	};

	return (
		<motion.div initial="initial" animate="animate" exit="exit" className="container">
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
					<a className="cite" href={place.link} target="_blank" rel="noopener noreferrer">
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
				<img src={place.carousel[0]} alt={place.name} />
				<img src={place.carousel[1]} alt={place.name} />
				<img src={place.carousel[2]} alt={place.name} />
				<img src={place.carousel[3]} alt={place.name} />
			</motion.div>
		</motion.div>
	);
};
