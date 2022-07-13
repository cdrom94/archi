export interface ArchitectureData {
	url: string;
	name: string;
	location: string;
	cursor: string;
	built: number;
	architect: string;
	area: string;
	quote: string;
	link: string;
	carousel: string[];
}

export interface ArchitectureTransition {
	duration: number;
	delay: number;
	ease: number[];
}
