import {Dish, Comment} from "./interfaces";
import {pastaDish, pastaComment} from "./pastaDish";

const addNewComment = (dish: Dish, newComment: Comment) => {
	const {comments} = dish;

	const editedDish = {...dish, comments: [...comments, newComment]};
	console.log(editedDish.comments);

	return editedDish;
};

addNewComment(pastaDish, pastaComment);
