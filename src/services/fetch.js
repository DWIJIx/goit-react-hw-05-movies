import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '4d2e80e66c2c2de6980779cd2eee193d';

async function getTrendingMovies() {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

async function getMovies(text, page) {
  try {
    const response = await axios.get(`${BASE_URL}search/movie`, {
      params: {
        api_key: `${KEY}`,
        query: `${text}`,
        page: `${page}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getMovieById(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${id}?api_key=${KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getCastById(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${id}/credits?api_key=${KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getReviewsById(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${id}/reviews?api_key=${KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export {
  getTrendingMovies,
  getMovies,
  getMovieById,
  getCastById,
  getReviewsById,
};
