import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { carApi } from "./cars";

function render(
  ui: any,
  {
    // @ts-ignore
    preloadedState,
    store = configureStore({
      reducer: {
        [carApi.reducerPath]: carApi.reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([carApi.middleware]),
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  // @ts-ignore
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";
export { render };
