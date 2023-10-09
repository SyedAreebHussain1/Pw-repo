import { combineReducers } from "redux";
import authReducer from "./auth";
import postContact_Data from "./contactUs";
import saleOrderReducer from "./saleOrder";
import traficReducer from "./trafic";

const rootReducer = combineReducers({
  contact_us: postContact_Data,
  auth: authReducer,
  saleOrder: saleOrderReducer,
  trafic: traficReducer
});

export default rootReducer;
