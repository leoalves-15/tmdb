import React from "react";
import Pagination from "../components/Pagination";
import ContainMovies from "../components/ContainMovies";
import MainCta from "../components/MainCta";

function Home() {
  return (
    <>
      <MainCta/>
      <ContainMovies />
      <Pagination />
    </>
  );
}

export default Home;
