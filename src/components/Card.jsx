import React from 'react'
import Star from '../assets/Svg';
import { useNavigate } from 'react-router-dom';
import "./Card.css"
function Card({movie}) {
    const navigate = useNavigate();
    const { show } = movie;
    const { id, image, rating, name, genres } = show;
    const navigateToMovie = () => {
        navigate(`/${id}`);
        
    }
    return (
        <div onClick = {navigateToMovie} className="card">
            <img src={ image ? image.medium : "default_image.png" } />
            <div className="rating">
                <Star />
                <p>{ rating.average ? rating.average : "--"} / 10</p>
            </div>
            <p className="name">{ name }</p>
            <p className="genre">{ genres.join(" | ") }</p>
        </div>
    )
}

export default Card
