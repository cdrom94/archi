// // @ts-nocheck
import * as React from "react";
import { Link } from "react-router-dom";
import { data } from "../data";
import gsap from "gsap";
import { motion } from "framer-motion";
import { IData } from "../types";

const NavBar = () => {
	const transition: { duration: number; delay: number; ease: number[] } = { duration: 1, delay: -2, ease: [0.43, 0.13, 0.23, 0.96] };
	let cursor = React.useRef<HTMLDivElement>(null);
	const list = React.useRef<HTMLDivElement>(null);
	const [index, setIndex] = React.useState<number>(3);

	React.useEffect(() => {
		document.addEventListener("mousemove", moveCursor);
	});

	const moveCursor = (e: { pageX: number; pageY: number }) => {
		gsap.to(cursor.current, {
			duration: 0.5,
			css: {
				left: e.pageX,
				top: e.pageY,
			},
			delay: 0.03,
		});
	};

	return (
		<div>
			<div ref={cursor} className="cursor" style={{ backgroundImage: `url(${data[index].cursor})` }}></div>
			<div className="wrapper">
				<div className="project-list">
					{data.map((place: IData, i: number) => (
						<motion.h2
							key={`place${i}`}
							initial={{ x: 0, opacity: 0 }}
							animate={{ x: 1, opacity: 1 }}
							exit={{ x: 0, opacity: 0, transition: { duration: 2, ease: transition.ease } }}
							className={`project p-${i + 1}`}
							onHoverStart={() => setIndex(i)}
							ref={list}
						>
							<Link to={`/${i}`} className="link">
								<div
									className="project-overlay"
									onMouseMove={() => gsap.to(cursor.current, { duration: 0.8, scale: 1, autoAlpha: 1 })}
									onMouseOut={() => gsap.to(cursor.current, { duration: 0.8, scale: 0.1, autoAlpha: 0 })}
								></div>
								<div className="project-title">
									<h3>{place.name}</h3>
								</div>
								<div className="project-categ">{place.location}</div>
							</Link>
						</motion.h2>
					))}
				</div>
			</div>
		</div>
	);
};

export default NavBar;
