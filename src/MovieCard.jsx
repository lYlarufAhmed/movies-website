import {Link} from "react-router-dom";

export default function MovieCard(props) {

    return (
        // onClick={() => props.changeRequestType(props.movieId)}
        <Link to={`/movie/${props.movieId}`}
              style={{
                  'background': `url('http://image.tmdb.org/t/p/w200/${props.posterPath}') no-repeat`,
                  'backgroundSize': 'cover',
                  'backgroundPosition': 'center'
              }}>
            <div className="overlay">
                <div className="content">
                    <span className="title">{props.movieName}</span>
                    <div className="hr"></div>
                    <div className="overview-rating">
                        <div className="overview">{
                            props.overview
                        }</div>
                        <div className={'rating'}>{props.rating}</div>
                    </div>
                </div>

            </div>
        </Link>
    )
}