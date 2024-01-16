import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import MovieDetails from "../pages/MovieDetails";

const MyRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default MyRoutes;
