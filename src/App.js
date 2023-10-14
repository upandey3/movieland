import { useEffect, useState} from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";


const API_URL = "http://www.omdbapi.com/?apikey=<insert_api_key>"

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setsearchTerm] = useState("");


    const searchMovies = async (title) => {
        // try {
            const response = await fetch(`${API_URL}&s=${title}`);
            const data = await response.json();
            setMovies(data.Search)

        // } catch (error) {
        //     console.error(error);
        // }
    }

    useEffect(() => {
       searchMovies('')
    }, []);

    return (
    <div className="app">
        <h1>Movie Land</h1>
        <div className="search">
            <input
                placeholder="Search for movies"
                value={searchTerm}
                onChange={(e)=>{setsearchTerm(e.target.value)}} 
               />
            <img 
                src={SearchIcon}
                alt="search"
                onClick={()=>{searchMovies(searchTerm)}}
            />
        </div>

        {
            movies?.length > 0
            ? ( 
                <div className="container">
                    {movies.map((movie)=>{
                        return (<MovieCard 
                            title={movie.Title}
                            year={movie.year}
                            imdbID={movie.imdbID}
                            type={movie.Type}
                            poster={movie.Poster}
                        />)
                    })}
                </div>
            ) : (
                <div className="empty">
                    <h2>No Movies Found</h2>
                </div>
            )
        }
       
    </div>
    );
}

export default App;