import {Dish, Comment} from "./interfaces";

export const addNewComment = (dish: Dish, newComment: Comment) => {
	dish.comments.push(newComment);
	console.log(dish);
};
