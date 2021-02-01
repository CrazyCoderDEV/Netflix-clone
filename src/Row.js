import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";


function Row({ title, fetchUrl, islargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
  height: "490",
  width: "100%",
  playerVars: {
  autoplay: 1,
    },
  };

  const handleClick = async (movie) => {
    if (trailerURL) {
      setTrailerURL("");
    } 
    else {
      movieTrailer(movie?.name || "")
      .then(url => {
        const urlParams = new URLSearchParams( new URL('www.youtube.com').search);
        setTrailerURL(urlParams.get());
      }).catch(error => console.table(error))
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}

            className={`row_poster ${islargeRow && "row_posterLarge"}`}
            src={`${base_url}${islargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailerURL && <Youtube videoId={trailerURL} opt={opts}/>}
    </div>
  );
}

export default Row;
