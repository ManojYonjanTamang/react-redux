import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { legacy_createStore as createStore } from "redux";
import allReducer from "./reducers/allReducer";
import { Provider } from "react-redux";

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
