import React, { useReducer } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import EventForm from "./EventForm";

import Events from "./Events";
import reducer from "../reducers";

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <div className="container-fluid">
      <EventForm state={state} dispatch={dispatch} />
      <Events state={state} dispatch={dispatch} />
    </div>
  );
}; // JSXの場合class属性は「className」

export default App;
