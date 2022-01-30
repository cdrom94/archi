import * as React from "react";
import { Link } from "react-router-dom";
import { architectureList } from "../data";
import gsap from "gsap";
import { motion } from "framer-motion";
import { ArchitecureData, ArchitecureTransition } from "../types";

export const NavBar = () => {
	const transition: ArchitecureTransition = { duration: 1, delay: -2, ease: [0.43, 0.13, 0.23, 0.96] };

	const cursor = React.useRef<HTMLDivElement>(null);

	const [index, setIndex] = React.useState<number>(0);

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

	React.useEffect(() => {
		document.addEventListener("mousemove", moveCursor);
	});

	return (
		<div>
			<div ref={cursor} className="cursor" style={{ backgroundImage: `url(${architectureList[index].cursor})` }}></div>
			<div className="wrapper">
				<div className="project-list">
					{architectureList.map((place: ArchitecureData, i: number) => (
						<motion.h2
							key={`place${i}`}
							initial={{ x: 0, opacity: 0 }}
							animate={{ x: 1, opacity: 1 }}
							exit={{ x: 0, opacity: 0, transition: { duration: 2, ease: transition.ease } }}
							className={`project p-${i + 1}`}
							onHoverStart={() => setIndex(i)}
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
