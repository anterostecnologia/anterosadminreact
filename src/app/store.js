import {createStore, combineReducers, applyMiddleware} from "redux";
import { createLogger } from 'redux-logger'
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import authentication from "./reducers/authenticationReducer";
import { composeWithDevTools } from 'redux-devtools-extension';


export default createStore(
    combineReducers({
        authentication
    }),
    {},
    composeWithDevTools(applyMiddleware(createLogger(), thunk, promise()))
);