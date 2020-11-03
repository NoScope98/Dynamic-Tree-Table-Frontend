import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import "./index.css";
import App from "./containers/App";
import form from "./reducers/form";
import node from "./reducers/node";
import properties from "./reducers/properties";
import table from "./reducers/table";
import validation from "./reducers/validation";
import "./i18n";

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

const store = configureStore({
  reducer: { form, node, properties, table, validation },
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
