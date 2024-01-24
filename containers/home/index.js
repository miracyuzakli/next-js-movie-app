import React from 'react';


import FetatureMovie from '@/components/feature-movie'
import Categories from '@/components/categories';
import MoviesSection from '@/components/movies-section';

// console.log(Movies.results[0]);

function HomeContainer({ topRatedMovies = [], populerMovies = [], categories = [], selectedCategory }) {

    console.log(categories);
    return (
        <div>
            <FetatureMovie movie={topRatedMovies?.[0]} />
            <Categories categories={categories.slice(0, 5)} />

            {!!selectedCategory.movies.length && (
                <MoviesSection
                    title={categories.find(({ id }) => id === +selectedCategory.id)?.name}
                    movies={selectedCategory.movies.slice(1, 7)}
                />
            )}

            <MoviesSection title={'Populer Movies'} movies={topRatedMovies.slice(0, 6)} />

            <MoviesSection title={'Top Rated'} movies={populerMovies.slice(0, 6)} />
        </div>
    );
}

export default HomeContainer;