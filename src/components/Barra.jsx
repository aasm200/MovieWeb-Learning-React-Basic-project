import React, {useState} from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import '../StyleS/Barra.css';

const Barra =({searchMovies})=>{

  const [searchTerm, setSearchTerm ] =useState('');
  return (
    <div className='barra-contenedor'>
      <input 
        className='barra-input'
        placeholder='Busca Tu pelicula Favorita'
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
      />
      
      <AiOutlineSearch 
      className='barra-icono' 
      onClick={()=>searchMovies(searchTerm)} 
      />
    </div>
  );
}

export default Barra; 