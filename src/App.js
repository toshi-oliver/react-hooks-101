import React, { useEffect, useState } from "react";

const App = (props) => {
  const [state, setState] = useState(props);
  const { name, price } = state;

  // useEffect(() => {
  //   console.log("useEffect is invoked"); //useEffectはレンダリングの後に実行される。
  // });

  useEffect(() => {
    console.log("This is like componentDidmount");
  }, []);

  useEffect(() => {
    console.log("This callback is for name only");
  }, [name]);

  return (
    <>
      <p>
        現在の{name}は、{price}円です。
      </p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>
        -1
      </button>
      <button onClick={() => setState(props)}>reset</button>
      <input
        value={name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
    </>
  );
};

App.defaultProps = {
  name: "",
  price: 1000,
};

export default App;
