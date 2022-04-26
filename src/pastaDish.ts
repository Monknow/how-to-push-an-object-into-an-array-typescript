import {Dish, Comment} from "./interfaces";

export let pastaDish: Dish = {
	id: 124,
	name: "Carbonara Pasta",
	image: "pasta-carbonara.jpg",
	category: "Italian Food",
	description:
		"Italian pasta dish originating in Lazio based on eggs, cheese, extra virgin olive oil, pancetta or guanciale, and bacon with black pepper.",
	comments: [],
};

export let pastaComment: Comment = {
	rating: 5,
	comment: "Very tasty!",
	author: "Juan Diego",
	date: "04/14/2022",
};
