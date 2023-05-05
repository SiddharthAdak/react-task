import React from 'react'
import "./home.css"
import { useMovieContext } from '../context/MovieContext';
import Card from '../components/Card';
function Home() {
    const {movies} = useMovieContext();
    console.log(movies);
    return (
        
        
            <div className = "home-container">
                <h2>Movies</h2>
                {<div className = "movie-cards-container">
                    {
                        movies?.map((movie) => {
                            return <Card key = {movie.show.id} movie = {movie} />
                        })
                    }
                </div>}
            </div>
        
    )
}

export default Home
