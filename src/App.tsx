import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./core";
import { AllCarsPage, CarPage } from "./cars";
import css from "./App.module.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ea7f28",
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <div className={css.root}>
        <Header />
        <main className={css.main}>
          <Routes>
            <Route path="/" element={<AllCarsPage />} />
            <Route path="/:id" element={<CarPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
