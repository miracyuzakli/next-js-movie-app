import React from 'react';

import MovieContainer from '@/containers/movie';
import Movies from '@/mocks/movies.json'
import { notFound } from 'next/navigation';
import { resolve } from 'styled-jsx/css';

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.API_KEY;

const getMovie = async (movieId) => {
    const res = await fetch(
      `${API_URL}/movie/${movieId}?api_key=${API_KEY}`
    )
  
    return res.json();
  }
  



async function MoviePage({params, searchParams}) {



    const movieDetail = await getMovie(params.id);

    if (!movieDetail) {

        notFound();
        return;
    }

    if (searchParams.error === 'true') {

        throw new Error('Error happened');
    }

    return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;