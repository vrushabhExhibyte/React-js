import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App1() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function fetchMoviesHandler(event) {
    event.preventDefault();
    fetch("https://swapi.dev/api/films/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transformedMovies);
        setIsLoading(false);
      });
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {<MoviesList movies={movies} />}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App1;
