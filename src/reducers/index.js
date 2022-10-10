import { combineReducers } from "redux";
import counterReducer from "./counter";
import loggerReducer from "./isLogged";

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggerReducer
})

export default allReducers