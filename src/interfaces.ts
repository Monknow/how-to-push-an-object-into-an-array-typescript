export interface Comment {
	rating: number;
	comment: string;
	author: string;
	date: string;
}

export interface Dish {
	id: number;
	name: string;
	image: string;
	category: string;
	description: string;
	comments: Comment[];
}
