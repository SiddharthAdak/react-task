import { useState ,useEffect } from 'react';
import { useMovieContext } from './context/MovieContext';
import axios from 'axios';
import { Routes ,Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Form from './pages/Form';
import Tickets from './pages/Tickets';
import './App.css';
function App() {
  const { dispatch } = useMovieContext();
  const [error,  setError] = useState(null);
  
  useEffect(() => {
    const getMovies = async() => {
      try{
        let response = await axios.get("https://api.tvmaze.com/search/shows?q=all");
        dispatch({type: 'SET_MOVIES', payload: response.data});
        setError(null);
      }
      catch(error){
        setError("Something went wrong")
      }
    }
    getMovies();
  }, [])

  return (
    <div className = "app">
      <Navbar />
      <div className = "app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<MovieDetails />} />
        <Route path="/form/:id" element={<Form />} />
        <Route path="/tickets" element={<Tickets />} />
      </Routes>
      </div>
    </div>
  )
}

export default App
