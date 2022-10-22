import React from "react";
import Pagination from "../components/Pagination";
import ContainMovies from "../components/ContainMovies";
import MainCta from "../components/MainCta";
import HomeProvider from "../contexts/Home/ContextHome";

function Home() {
  return (
    <HomeProvider>
        <MainCta />
        <ContainMovies />
        <Pagination />
    </HomeProvider>
  );
}

export default Home;
