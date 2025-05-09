import React, { useState } from "react";

const MovieList = () => {
  // Array of movie objects
  const movies = [
    { title: "Inception", genre: "Sci-Fi", releaseYear: 2010 },
    { title: "Titanic", genre: "Romance", releaseYear: 1997 },
    { title: "The Godfather", genre: "Crime", releaseYear: 1972 },
    { title: "Toy Story", genre: "Animation", releaseYear: 1995 },
    { title: "The Dark Knight", genre: "Action", releaseYear: 2008 },
  ];

  // State for selected genre
  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  // Filter movies based on the selected genre
  const filteredMovies =
    selectedGenre === "All Genres"
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  // Generate unique genres for the dropdown
  const genres = ["All Genres", ...new Set(movies.map((movie) => movie.genre))];

  return (
    <div className="movie-list-container">
      <h1>Movie List</h1>
      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
        className="genre-select"
      >
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      <ul className="movie-list">
        {filteredMovies.map((movie) => (
          <li
            key={movie.title}
            className="movie-item"
            onClick={() => alert(movie.title)}
          >
            <strong>{movie.title}</strong> - {movie.genre} ({movie.releaseYear})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
