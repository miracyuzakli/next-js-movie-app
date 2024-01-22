import React from 'react';


import Movies from '@/mocks/movies.json';
import Genres from '@/mocks/genres.json';

import FetatureMovie from '@/components/feature-movie'
import Categories from '@/components/categories';
import MoviesSection from '@/components/movies-section';

// console.log(Movies.results[0]);

function HomeContainer({ selectedCategory}) {
    return (
        <div>
            <FetatureMovie movie={Movies.results[0]} />
            <Categories categories={Genres.genres.slice(0, 5)}/>
         
        {
            selectedCategory.movies.length > 0 && (
                <MoviesSection title={Genres.genres.find( genre => genre.id.toString() === selectedCategory.id).name}  movies={selectedCategory.movies}/>
            )
        }


            <MoviesSection title={'Populer Films'}  movies={Movies.results.slice(1,7)}/>
            <MoviesSection title={'Latest Movies'}  movies={Movies.results.slice(8, 14)}/>
        </div>
    );
}

export default HomeContainer;