import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';
import Youtube from 'react-youtube';

const base_url = "https://image.tmdb.org/t/p/original/";


function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            console.log(request.data.results);
            return request;
        }
        fetchData();

    }, [fetchUrl]);

    console.table(movies);


    return (
        <div className="row">
            <h2> {title} </h2>

            <div className="row__posters">
                { }
                
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`}
                        alt={movie.name} />
                ))}


            </div>
            <Youtube videoId={trailerUrl} />
        </div>
    )
}


export default Row;