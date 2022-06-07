import React,{useEffect , useState} from 'react';
import './App.css';
import Header from './components/Header';
import '../src/StyleS/Normalize.css';
import Barra from './components/Barra';
import MovieCard from './components/MovieCard';


const API_URL ='http://www.omdbapi.com?apikey=c8ee7e69';

function App() {
  const [movies, SetMovies] = useState(['']);

  const  searchMovies = async (title) => {

    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    SetMovies(data.Search);
  }
  useEffect(()=>{
    searchMovies('batman');
  },[]);

  return (
    <div className="App">
      <Header />

      <Barra searchMovies={searchMovies} />

      { movies?.length > 0
        ? (
          <div className='container'>

            {movies.map((movie)=>(
              
              <MovieCard
               movie={movie} />
            ))}
     
           
          </div>
        ) : (
          <div className='empty'>
          <h2>No se encontraron Peliculas</h2>
          </div>
        )}

    </div>
  );
}

export default App;
