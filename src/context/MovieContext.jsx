import { createContext, useContext, useReducer } from "react";
const MovieContext = createContext();

export const movieReducer = (state, action) => {
    switch (action.type) {
      case 'SET_MOVIES':
        return {
          ...state,
          movies: action.payload
        }
      default:
        return state
    }
}

export const MovieContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(movieReducer, {
      movies: null,
    })
    return (
      <MovieContext.Provider value={{...state, dispatch}}>
        { children }
      </MovieContext.Provider>
    )
  }
export const useMovieContext = () => useContext(MovieContext);
