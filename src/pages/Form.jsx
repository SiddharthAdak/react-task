import React, {useState} from 'react'
import { useMovieContext } from '../context/MovieContext';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid'
import "./Form.css"
function Form() {
    const { id } = useParams();
    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);
    const { movies } = useMovieContext();
    const movie = movies?.find((movie) => movie.show.id == id);
    const { show } = { ...movie };
    const {name, schedule, language, status, runtime } = { ...show };
    const bookTicket = (e) => {
        e.preventDefault();
        if(!username.trim() || !email.trim())
        {
            setError("All fields are required");
        }
        else{
            let tickets = localStorage.getItem('tickets');
            let obj = {
                    movie: name, 
                    schedule:schedule.time ? `${schedule.days.join(", ")} at ${schedule.time}` : "NA", 
                    language,
                    price: "Rs 300",
                    booking_id: nanoid(),
                    name: username, 
                    email
                }
            if (!tickets) {
                tickets = [obj];
            }
            else{
                tickets = JSON.parse(tickets);
                tickets.push(obj);
                console.log(tickets);
            }
            setError(null);
            localStorage.setItem('tickets', JSON.stringify(tickets));
            
            setEmail("");
            setName("");
            
            alert("Ticket booked successfully!");

        }
    }
    return (
        movie &&
        
            <div className = "form-container">
                <h2>Movie Details</h2>
                <p><b>Name: </b>{name}</p>
                <p><b>Schedule: </b>{schedule.time ? `${schedule.days.join(", ")} at ${schedule.time}` : "NA"}</p>
                <p><b>Runtime: </b>{runtime ? `${runtime} mins` : "NA"}</p>
                <p><b>Status: </b>{status}</p>
                <p><b>Language: </b>{language}</p>
                <p><b>Ticket Price: </b>Rs 300</p>
                <form>
                    <h2>Enter Details</h2>
                    <div>
                        <label htmlFor = "name">Name:</label>
                        <input type="text" onChange = {(e) => setName(e.target.value)} value = {username}  id = "name" placeholder="Enter name" />
                    </div>
                    <div>
                        <label htmlFor = "email">Email:</label>
                        <input type="text" onChange = {(e) => setEmail(e.target.value)} value = {email} id = "email" placeholder="Enter email address" />
                    </div>
                    {error && <p className = "error">{error}</p>}
                    <button onClick = {bookTicket} >Book Ticket</button>
                </form>

                
            </div>
        
    )
}

export default Form
