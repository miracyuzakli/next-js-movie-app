import React from "react"
import HomeContainer from "@/containers/home"
import Movies from "@/mocks/movies.json"

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.API_KEY;

const getTopRatedMovies = async () => {
  const res = await fetch(
    `${API_URL}/movie/popular?api_key=${API_KEY}&page=1`
  )

  return res.json();
}


const getPopulerMovies = async () => {
  const res = await fetch(
    `${API_URL}/movie/top_rated?api_key=${API_KEY}&page=1`
  )

  return res.json();
}



const getCategories = async () => {
  const res = await fetch(
    `${API_URL}/genre/movie/list?api_key=${API_KEY}&page=1`
  )

  return res.json();
}


const getSingleCategory = async (genreId) => {
  const res = await fetch(
    `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
  )

  return res.json();
}


async function HomePage({ params }) {

  const top_rated_promise = getTopRatedMovies();
  const populer_promise = getPopulerMovies();
  const category_promise = getCategories();


  const [{ results: top_rated_movies }, { results: populer_movies }, { genres: categories }] = await Promise.all([top_rated_promise, populer_promise, category_promise]);


  let selectedCategory;

  if (params.category?.length > 0) {

    const {results} = await getSingleCategory(params.category[0]);
    selectedCategory = results;
  }

  return <HomeContainer
    topRatedMovies={top_rated_movies}
    populerMovies={populer_movies}
    categories={categories}
    selectedCategory={{
      id: params.category?.[0] ?? "",
      movies: selectedCategory ? selectedCategory : [],
    }} />;
}


export default HomePage;