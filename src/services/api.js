const API_KEY="75f6c8b2ba4f06d65a0d0368d8ba4604"
const BASE_URL="https://api.themoviedb.org/3";


//using this only for 
// searching the movie
// displaying todays poupular movie

export const getPopularMovies=async ()=>{
    const response= await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data= await response.json()
    return data.results
}

export const searchMovies=async (query)=>{
    const response= await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
            query
        )}`
    );
    const data= await response.json()
    return data.results
}

