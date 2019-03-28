// import fetch from "node-fetch";
import axios from "axios";
const MOVIE_DETAIL_URL = "https://yts.am/api/v2/movie_details.json";
const LIST_MOVIE_URL = "https://yts.am/api/v2/list_movies.json";

export const getMovie = async(_, {id}) => {
    const { data : {data: {movie}}} = await axios(MOVIE_DETAIL_URL, 
        {
            params: {
                movie_id: id
            }
        }
    );
    return movie;
};

// REST API를 GraphQL로 감싸았다.
export const getMovies = async (_, {limit, rating: minimum_rating}) => {
    
    const {data: {data: { movies }}} = await axios(LIST_MOVIE_URL, 
        {
            params: {
                limit,
                minimum_rating
            }
        }
    );
    // const movies = await fetch(url).then(req => req.json()).then(json => json.data.movies).catch(err => console.log(err));
    return movies;
};