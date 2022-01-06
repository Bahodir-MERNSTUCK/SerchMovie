import Movie from "./Movie";

export default function Movies(props){
    const {movies=[]} = props;
    return(
        <div className="Movies">
            {movies.length ? movies.map(movie=>(
                <Movie key={movie.imdbID} {...movie}/>
            )):(
                <h3 className="text-center">Nothing Found</h3>
            )}
        </div>
    )
}