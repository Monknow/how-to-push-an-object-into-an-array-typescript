import {Dish, Comment} from "./interfaces";

export const addNewComment = (dish: Dish, newComment: Comment) => {
	const {comments} = dish;

	dish.comments = [...comments, newComment];
	console.log(dish.comments);
};
