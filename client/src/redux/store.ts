import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";

let rootReducer = combineReducers({});

export type RootStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;