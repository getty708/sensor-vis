import {createReducer} from "redux-act"
//import {List} from "immutable"

const init = {
    root: {}
};

const rootReducer = createReducer({}, init.root)
export default rootReducer
