import React from "react";
import Todo from "./component/Todo";
import { Provider } from "react-redux";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
