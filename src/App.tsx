import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import {GlobalStyle} from "./styles/generic.styles"
import Movie from "./pages/Movie";
import Header from "./components/Header";


function App() {
  return (
    <BrowserRouter>
      <>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movie" element={<Movie />} />
        </Routes>
        <GlobalStyle />
      </>
    </BrowserRouter>
  );
}

export default App;