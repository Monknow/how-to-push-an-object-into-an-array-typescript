import {pastaDish, pastaComment} from "./pastaDish";
import {addNewComment as addNewCommentUsingPush} from "./using-array-push";
import {addNewComment as addNewCommentUsingConcat} from "./using-array-concat";
import {addNewComment as addNewCommentUsingSpread} from "./using-spread-operator";
import {addNewComment as addNewCommentUsingSpreadNoMutations} from "./using-spread-operator-and-no-mutations";

// Methods that mutate the original object
// Therefore, other functions' output will be affected by them

addNewCommentUsingPush(pastaDish, pastaComment);
addNewCommentUsingSpread(pastaDish, pastaComment);

// Methods that don't mutate the original object, but create a new one
addNewCommentUsingConcat(pastaDish, pastaComment);
addNewCommentUsingSpreadNoMutations(pastaDish, pastaComment);

// In this case, addNewCommentUsingPush and addNewCommentUsingSpread add one comment each to pastaDish
// so pastaDish will have two comments
// Then addNewCommentUsingConcat and addNewCommentUsingSpreadNoMutations will output three comments
// But they won't mutate pastaDish, so it will remain with two comments
