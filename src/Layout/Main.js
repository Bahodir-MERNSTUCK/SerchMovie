import React, { useEffect, useState } from 'react';
import Loader from '../Component/Loader';
import Movies from '../Component/Movies';
import Search from '../Component/Search';
export default function Main (){
    
    const [movies,setMovies] = useState([]);
    const [loading,setLoading] = useState(false)

 

   const searchMovies=(str, type='all')=>{
        setLoading(true)
        fetch(`http://www.omdbapi.com/?apikey=88584fd2&s=${str}${type!=='all' ?`&type=${type}`:''}`)
            .then(response=>response.json())
            .then(data=>{
                setMovies(data.Search)
                setLoading(false)
            })
    }

    useEffect(()=>{
        fetch(`http://www.omdbapi.com/?apikey=88584fd2&s=panda`)
        .then(response=>response.json())
        .then(data=>{
            setMovies(data.Search)
            setLoading(false)
        })
    },[])
    
        return(
            <div className="container content">
                <Search searchMovies={searchMovies} />
                {loading ?<Loader /> :  (<Movies movies={movies} />) }
            </div>
        )
    
    
}