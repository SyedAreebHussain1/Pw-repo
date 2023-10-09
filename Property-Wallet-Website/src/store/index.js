import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import reducer from "./reducer";
import reducer from "../store/reducer/contactUs"

const store = createStore(reducer, compose(applyMiddleware(thunk)));
export default store;