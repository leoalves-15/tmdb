import React from "react";
import MainBannerMovie from "../components/MainBannerMovie";
import DetailsProvider from "../contexts/ContextDetails/ContextDetails";
import CharacterSlide from "../components/CharacterSlide";
import TraillerBanner from "../components/Trailler";
import RecommendedMovies from "../components/RecommendedMovies";

function Movie() {
  return (
    <DetailsProvider>
      <MainBannerMovie />
      <CharacterSlide />
      <TraillerBanner />
      <RecommendedMovies />
    </DetailsProvider>
  );
}

export default Movie;
