import React from 'react';

import MovieContainer from '@/containers/home/movie';
import Movies from '@/mocks/movies.json'
import { notFound } from 'next/navigation';
import { resolve } from 'styled-jsx/css';


async function delay(ms) {

    return new Promise(resolve => setTimeout(resolve, ms))
}


async function MoviePage({params, searchParams}) {

    await delay(2000);


    const movieDetail = Movies.results.find(movie => movie.id.toString() === params.id)

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