import React, { useState, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Event from "./event";
import reducer from "../reducers/";

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  //  NOTE: addEventが発火すると、dispatch関数の中身がindex.jsに渡される。
  const addEvent = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE_EVENT",
      title,
      body,
    });
    setTitle("");
    setBody("");
  };

  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm("全てのイベントを本当に削除しても良いですか");
    if (result) {
      dispatch({
        type: "DELETE_ALL_EVENTS",
      });
    }
  };

  const unCreatable = title === "" || body === "";

  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)} // NOTE: e.target.valueは値を取ってくる慣用句みたいなもの
          />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディ</label>
          <textarea
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary"
          onClick={addEvent}
          disabled={unCreatable}
        >
          イベントを作成する
        </button>
        <button
          className="btn btn-danger"
          onClick={deleteAllEvents}
          disabled={state.length === 0}
        >
          全てのイベントを削除する
        </button>
      </form>

      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボティ</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* indexはmapに元々与えられているので、keyとして与える */}
          {state.map((event, index) => (
            <Event key={index} event={event} dispatch={dispatch} />
          ))}
        </tbody>
      </table>
    </div>
  ); // JSXの場合class属性は「className」
};

export default App;
