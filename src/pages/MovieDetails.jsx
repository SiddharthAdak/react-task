import React from 'react';
import { useParams } from 'react-router-dom';
import { useMovieContext } from '../context/MovieContext';
import Parser from 'html-react-parser';
import { useNavigate } from 'react-router-dom';
import "./MovieDetails.css";
function MovieDetails() {
    const {movies} = useMovieContext();
    const {id} = useParams();
    const navigate = useNavigate();
    const movie = movies?.find((movie) => movie.show.id == id);
    const {show} = {...movie};
    const { image, rating, name, genres, summary, schedule, language, status, runtime } = {...show};
    const navigateToForm = () => {
        navigate(`/form/${id}`);
    }
    return (
        movie && 
        <div className = "movie-container">  
            <div className = "image">
                <img src={ image ? image.original : "default_image.png" } />
            </div>


            <div className = "movie-details">
                <h1> {name} </h1>
                {Parser(summary)}
                <div className = "details">
                    <h2>Show Details</h2>
                    <p><b>Schedule: </b>{ schedule.time?`${schedule.days.join(", ")} at ${schedule.time}`: "NA"}</p>
                    <p><b>Runtime: </b>{ runtime ? `${runtime} mins` : "NA" }</p>
                    <p><b>Status: </b>{ status }</p>
                    <p><b>Language: </b>{ language }</p>
                    <p><b>Rating: </b>{ rating.average ? rating.average : "--"} / 10</p>
                    <p><b>Genre: </b>{ genres.join(" | ") }</p>
                </div>
                <button onClick = {navigateToForm}>Book tickets</button>
            </div>
        </div> 
    )
}

export default MovieDetails
