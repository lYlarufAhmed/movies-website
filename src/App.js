import './App.css';
import {useEffect, useState} from "react";
import MovieCard from "./MovieCard";
import LoadingSpinner from "./StyledComponents";


function App(props) {

    const API_KEY = '?api_key=0f5220d5ca40d1346cf86a84c0d28de6'
    const baseURL = 'https://api.themoviedb.org/3/movie'
    let [movieData, setMovieData] = useState([])
    const genre = props.match.params.genre ? props.match.params.genre:'top_rated'
    console.log(genre)

    async function getData() {
        // let response = await fetch(`${baseURL}/genre${API_KEY}`)
        let response = await fetch(`${baseURL}/${genre}${API_KEY}`)
        let data = await response.json()
        console.log(data)
        setMovieData(data.results)

    }

    useEffect(() => {
        getData()
        // eslint-disable-next-line
    }, [])


    return (
        <div className="App">
            {movieData.length === 0 ? <LoadingSpinner/>:movieData.map((movie) => {
                return (<MovieCard key={movie.id} movieName={movie.title}
                                   movieId={movie.id} posterPath={movie.poster_path} overview={movie.overview}
                                   rating={movie.vote_average}
                />)
            })}
        </div>
    );
}

export default App;
