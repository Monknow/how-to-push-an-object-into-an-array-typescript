import {Dish, Comment} from "./interfaces";
import {pastaDish, pastaComment} from "./pastaDish";

const addNewComment = (dish: Dish, newComment: Comment) => {
	dish.comments.push(newComment);
	console.log(dish.comments);
};

addNewComment(pastaDish, pastaComment);
