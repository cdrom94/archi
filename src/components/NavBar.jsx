import React, { useRef } from "react";
import { Link } from "react-router-dom";
import data from "../data";
import { TweenLite } from "gsap";
import { motion } from "framer-motion";

const NavBar = () => {
	const projectOverlay = useRef(null);
	const cursor = useRef(null);

	const transition = {
		duration: 1,
		delay: -2,
		ease: [0.43, 0.13, 0.23, 0.96],
	};

	const moveCursor = e => {
		TweenLite.to(cursor.current, 0.5, {
			css: {
				left: e.pageX,
				top: e.pageY,
			},
			delay: 0.03,
		});
	};

	const mouseMove = e => {
		TweenLite.to(cursor.current, 0.8, { scale: 1, autoAlpha: 1 });
		moveCursor(e);
	};

	const mouseOut = (e, i) => {
		TweenLite.to(cursor.current, 0.8, { scale: 0.1, autoAlpha: 0 });
	};

	const mouseEnter = i => {
		if (data) {
			cursor.current.style.backgroundImage = `url(${data[i].cursor}`;
		}
	};

	return (
		<div>
			<div ref={cursor} className="cursor"></div>
			<div className="wrapper">
				<div className="project-list">
					{data.map((place, i) => (
						<motion.h2
							key={`place${i}`}
							initial={{ x: 0, opacity: 0 }}
							animate={{ x: 1, opacity: 1 }}
							exit={{
								x: 0,
								opacity: 0,
								transition: {
									duration: 2,
									ease: transition.ease,
								},
							}}
							className={`project p-${i + 1}`}
							onMouseOver={e => mouseEnter(i)}
						>
							<Link to={`/${i}`} className="link">
								<div
									ref={projectOverlay}
									className="project-overlay"
									onMouseMove={e => mouseMove(e)}
									onMouseOut={e => mouseOut(e, i)}
								></div>
								<div className="project-title">
									<h3>{place.name}</h3>
								</div>
								<div className="project-categ">
									{place.location}
								</div>
							</Link>
						</motion.h2>
					))}
				</div>
			</div>
		</div>
	);
};

export default NavBar;
