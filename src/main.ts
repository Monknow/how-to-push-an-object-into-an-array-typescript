import {Dish, Comment} from "./interfaces";
import {pastaDish, pastaComment} from "./pastaDish";

const addNewComment = (dish: Dish, newComment: Comment) => {
	const {comments} = dish;

	dish.comments = [...comments, newComment];
	console.log(dish.comments);
};

addNewComment(pastaDish, pastaComment);
