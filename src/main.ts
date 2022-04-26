import {pastaDish, pastaComment} from "./pastaDish";
import {addNewComment as arrayPushAddNewComment} from "./using-array-push";
import {addNewComment as arrayConcatAddNewComment} from "./using-array-concat";
import {addNewComment as spreadAddNewComment} from "./using-spread-operator";
import {addNewComment as spreadNoMutationsAddNewComment} from "./using-spread-operator-and-no-mutations";

// Methods that mutate the original object
// Therefore, other functions' output will be affected by them
arrayPushAddNewComment(pastaDish, pastaComment);
spreadAddNewComment(pastaDish, pastaComment);

// Methods that don't mutate the original object, but create a new one
spreadNoMutationsAddNewComment(pastaDish, pastaComment);
arrayConcatAddNewComment(pastaDish, pastaComment);
