import React, { useEffect, useState } from "react";
import './App.css';
import Search_Icon from './search.svg';
import MovieCard from "./MovieCard";

export const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=a2775cc';

const App = () => {
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API}&s=${title}`);
        const data = await response.json();
        if(data.Response && data.Search){
            setMovies(data.Search)
        } else {
            setMovies([]);
        }
    }

    useEffect(() => {
            searchMovies()
    }, [search])

    return (
        <div className="app">
            <h1>Movie Land</h1>
            <div className="search">
                <input
                    placeholder="search for movies"
                    value={search}
                    name="searchTerm"
                    onChange={(e) => setSearch(e.target.value)} />
                <img
                    src={Search_Icon}
                    alt="search"
                    onClick={() => searchMovies(search)}
                />
            </div>

            {
                movies.length > 0 ? (
                    <div className="container">
                        {movies.map((movie, index) => (
                            <MovieCard movie={movie} key={index} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No Movies Found!</h2>
                    </div>
                )
            }

        </div>
    )
}

export default App;