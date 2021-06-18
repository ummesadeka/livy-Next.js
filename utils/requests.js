const API_KEY = process.env.API_KEY;


export default{
    fetchTrending:{
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchNetflixOriginals: {
          title: 'Discover',
        url: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    },
  fetchTopRated: {
      title: 'Top rated',
      url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
      title: 'Action',
      url: `/discover/movie?api_key=${API_KEY}&with_genre=28`,
  },
  fetchComedyMovies: {
      title: 'Comedy',
      url:  `/discover/movie?api_key=${API_KEY}&with_genre=35`,
  },
  fetchHorrorMovies: {
      title: 'Horror',
      url: `/discover/movie?api_key=${API_KEY}&with_genre=27`,
  },
  fetchRomanceMovies: {
      title: 'Romance',
      url: `/discover/movie?api_key=${API_KEY}&with_genre=10749`,
  },
  fetchDocumentaries: {
      title:'Documentary',
      url: `/discover/movie?api_key=${API_KEY}&with_genre=99`,
  },
  fetchMystery: {
      title:'Mystery',
      url: `/discover/movie?api_key=${API_KEY}&with_genre=99`,
  },
  
};