import React from 'react';


import Genres from '@/mocks/genres.json';

import FetatureMovie from '@/components/feature-movie'
import Categories from '@/components/categories';
import MoviesSection from '@/components/movies-section';

// console.log(Movies.results[0]);

function HomeContainer({ topRatedMovies = [], populerMovies = [], categories = [], selectedCategory }) {
    return (
        <div>
            <FetatureMovie movie={topRatedMovies[0]} />
            <Categories categories={categories.slice(0, 5)} />

            {
                selectedCategory.movies.length > 0 && (
                    <MoviesSection title={Genres.genres.find(genre => genre.id.toString() === selectedCategory.id).name} movies={selectedCategory.movies} />
                )
            }

            <MoviesSection title={'Populer Movies'} movies={topRatedMovies.slice(0, 6)} />

            <MoviesSection title={'Top Rated'} movies={populerMovies.slice(0, 6)} />
        </div>
    );
}

export default HomeContainer;