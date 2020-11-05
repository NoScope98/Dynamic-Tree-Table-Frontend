import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import "./index.css";
import "./i18n";
import App from "./containers/App";

import propertiesReducer from "./store/properties";
import nodeReducer from "./store/node";
import formReducer from "./store/form";
import tableReducer from "./store/table";

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

const store = configureStore({
  reducer: {
    form: formReducer,
    node: nodeReducer,
    properties: propertiesReducer,
    table: tableReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

ReactDOM.render(
  <Suspense fallback="loading">
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById("root")
);
