import React, { MutableRefObject, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { ArchitectureData, ArchitectureTransition } from '../types';

interface PlaceProps {
	place: ArchitectureData;
	setIndex: SetStateAction<any>;
	i: number;
	cursor: MutableRefObject<HTMLDivElement>;
}

const Place = ({ place, setIndex, i, cursor }: PlaceProps) => {
	const transition: ArchitectureTransition = { duration: 1, delay: -2, ease: [0.43, 0.13, 0.23, 0.96] };

	return (
		<motion.h2
			key={`place-${i + 1}`}
			initial={{ x: 0, opacity: 0 }}
			animate={{ x: 1, opacity: 1 }}
			exit={{ x: 0, opacity: 0, transition: { duration: 2, ease: transition.ease } }}
			className={`project p-${i + 1}`}
			onHoverStart={() => setIndex(i)}
		>
			<Link to={`/${place.url}`} className='link'>
				<div
					className='project-overlay'
					onMouseMove={() => gsap.to(cursor.current, { duration: 0.8, scale: 1, autoAlpha: 1 })}
					onMouseOut={() => gsap.to(cursor.current, { duration: 0.8, scale: 0.1, autoAlpha: 0 })}
				></div>
				<div className='project-title'>
					<h3>{place.name}</h3>
				</div>
				<div className='project-category'>{place.location}</div>
			</Link>
		</motion.h2>
	);
};

export default React.memo(Place);
