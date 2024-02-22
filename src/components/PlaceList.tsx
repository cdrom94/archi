import React, { SetStateAction, MutableRefObject } from 'react';
import Place from './Place';
import { ArchitectureData } from '../types';

interface PlaceListProps {
	places: ArchitectureData[];
	setIndex: SetStateAction<any>;
	i: number;
	cursor: MutableRefObject<HTMLDivElement>;
}

const PlaceList = ({ places, setIndex, cursor }: PlaceListProps) => {
	return (
		<div className='project-list'>
			{places.map((place: ArchitectureData, i: number) => (
				<Place place={place} setIndex={setIndex} i={i} cursor={cursor} />
			))}
		</div>
	);
};

export default PlaceList;
