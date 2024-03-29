import React, { useState, useRef, useLayoutEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { ArchitectureData, ArchitectureTransition } from '../types';

export const HomePage = ({ places }: any): JSX.Element => {
	const transition: ArchitectureTransition = { duration: 1, delay: -2, ease: [0.43, 0.13, 0.23, 0.96] };
	const cursor = useRef<HTMLDivElement>();
	const [index, setIndex] = useState<number>(0);
	const [cursorImage, setCursorImage] = useState('none');

	gsap.config({
		nullTargetWarn: false,
	});

	const moveCursor = useCallback(
		(e: { pageX: number; pageY: number }) => {
			gsap.to(cursor.current, {
				duration: 0.5,
				css: {
					left: e.pageX,
					top: e.pageY,
				},
				delay: 0.03,
			});
		},
		[cursor]
	);

	useLayoutEffect(() => {
		if (cursor) {
			document.addEventListener('mousemove', moveCursor);
			setCursorImage(places[index].cursor);
		}
		return () => {
			document.removeEventListener('mousemove', moveCursor);
		};
	}, [moveCursor, places, index]);

	return (
		<div>
			<div ref={cursor} className='cursor' style={{ backgroundImage: `url(${cursorImage})` }}></div>
			<div className='wrapper'>
				<div className='project-list'>
					{places.map((place: ArchitectureData, i: number) => (
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
								<div className='project-categ'>{place.location}</div>
							</Link>
						</motion.h2>
					))}
				</div>
			</div>
		</div>
	);
};
