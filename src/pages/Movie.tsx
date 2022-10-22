import React from "react";
import MainBannerMovie from "../components/MainBannerMovie";
import DetailsProvider from "../contexts/ContextDetails/ContextDetails";

function Movie() {
  return (
    <DetailsProvider>
      <MainBannerMovie/>
    </DetailsProvider>
  );
}

export default Movie;
