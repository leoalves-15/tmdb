import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Pagination from "./components/Pagination";
import ContainMovies from "./components/ContainMovies";
import Header from "./components/Header";
import MainCta from "./components/MainCta";

function App() {
  return (
    <>
      {" "}
      <Header/>
      <MainCta/>
      <ContainMovies />
      <Pagination />
    </>
  );
}

export default App;
