import React, {useState, useEffect} from 'react'
import "./Tickets.css";
function Tickets() {
    const [tickets, setTickets] = useState(null);
    useEffect(() => {
        let data = localStorage.getItem("tickets");
        let array = JSON.parse(data)
        setTickets(array);
    }, [])
    return (
        <div className="ticket-container">
            <h2>Your bookings</h2>
            {tickets?<div className="ticket-cards-container">
                {
                    tickets?.map((ticket) => {
                        return (
                            <div key = {ticket.booking_id} className = "ticket-card">
                            <p><b>Movie: </b>{ticket.movie}</p>
                            <p><b>Schedule: </b>{ticket.schedule}</p>
                            <p><b>Language: </b>{ticket.language}</p>
                            <p><b>Ticket Price: </b>Rs 300</p>
                            <p><b>Booking Id: </b>{ticket.booking_id}</p>
                            </div>
                        )
                    })
                }
            </div>:
            <p>No tickets booked</p>}
        </div>
    )
}

export default Tickets
