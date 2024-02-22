import React, { useState, useRef, useLayoutEffect, useCallback } from 'react';
import gsap from 'gsap';
import PlaceList from '../components/PlaceList';

export const HomePage = ({ places }: any): JSX.Element => {
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
			<div
				ref={cursor}
				className='cursor'
				style={{ backgroundImage: `url(${cursorImage})` }}
			></div>
			<div className='wrapper'>
				<PlaceList setIndex={setIndex} cursor={cursor} places={places} i={0} />
			</div>
		</div>
	);
};
