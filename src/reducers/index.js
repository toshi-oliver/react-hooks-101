import { combineReducers } from "redux";

import events from "./events";
import operationLogs from "./events";

export default combineReducers({ events, operationLogs });
