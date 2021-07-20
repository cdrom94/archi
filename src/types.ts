export interface IData {
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

export interface ITransition {
	duration: number;
	delay: number;
	ease: number[];
}
