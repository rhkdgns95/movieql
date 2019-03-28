import { getMovies, getMovie } from "./db";

const resolvers = { 
    Query: {
        getMovies,
        getMovie
    }
};

export default resolvers;