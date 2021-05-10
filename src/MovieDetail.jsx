import {useEffect, useState} from "react";
import './MovieDetail.css'
import DetailWrapper from "./DetailWrapper";
import LoadingSpinner from "./StyledComponents";




export default function MovieDetail(props) {
    const API_KEY = '?api_key=0f5220d5ca40d1346cf86a84c0d28de6'
    const baseURL = 'https://api.themoviedb.org/3/movie'
    const movieId = props.match.params.id
    let [loading, setLoading] = useState(true)
    let [movieData, setMovieData] = useState({})

    async function getData() {
        let response = await fetch(`${baseURL}/${movieId}${API_KEY}&append_to_response=videos`)
        let data = await response.json()
        setMovieData(data)
        setLoading(false)
    }

    useEffect(() => {
        getData()
        // eslint-disable-next-line
    }, [])
    return (
        <div className={'MovieDetail'} style={{
            'background-image': `url('http://image.tmdb.org/t/p/w500/${movieData.backdrop_path}')`,
            'background-position': 'center',
            'background-size': 'cover',
            'background-repeat': 'no-repeat'

        }}>
            {loading ? <LoadingSpinner/>: <DetailWrapper detail={movieData}/>}
        </div>
    )
}



