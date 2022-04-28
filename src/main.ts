import {Dish, Comment} from "./interfaces";
import {pastaDish, pastaComment} from "./pastaDish";

const addNewComment = (dish: Dish, newComment: Comment) => {
	const editedComments = dish.comments.concat(newComment);
	const editedDish = Object.assign({}, dish, {comments: editedComments});
	console.log(editedDish.comments);

	return editedDish;
};

addNewComment(pastaDish, pastaComment);
