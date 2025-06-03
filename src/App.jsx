import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movies from "./components/Movies";
import TvShows from "./components/TvShows";
import People from "./components/People";
import MovieDetails from "./components/MovieDetails";
import TvDetails from "./components/TvDetails";
import PersonDetails from "./components/PersonDetails";

const App = () => {
  return (
    <div className="bg-[#020617] w-screen h-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvShows" element={<TvShows />} />
        <Route path="/people" element={<People />} />
        <Route path="/movie/details/:id" element={<MovieDetails />} />
        <Route path="/tv/details/:id" element={<TvDetails />} />
        <Route path="/person/details/:id" element={<PersonDetails />} />
      </Routes>
    </div>
  );
};

export default App;
