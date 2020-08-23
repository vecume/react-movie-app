import { useState, useEffect } from "react";
import { POPULAR_BASE_URL } from "../../config";

function useHomeFetch(searchTerm) {
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchMovies(endpoint) {
    setError(false);
    setLoading(true);
    const isLoadMore = endpoint.search("page") !== -1 ? true : false;

    try {
      const result = await (await fetch(endpoint)).json();
      setState((prev) => ({
        ...prev,
        movies: isLoadMore
          ? [...prev.movies, ...result.results]
          : [...result.results],
        heroImage: prev.heroImage || result.results[0],
        currentPage: result.page,
        totalPages: result.total_pages,
      }));
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (
      sessionStorage.homeState &&
      JSON.parse(sessionStorage.homeState).length
    ) {
      setState(JSON.parse(sessionStorage.homeState));
      setLoading(false);
    } else {
      fetchMovies(POPULAR_BASE_URL);
    }
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      sessionStorage.setItem("homeState", JSON.stringify(state));
    }
  }, [searchTerm, state]);

  return [
    {
      state,
      loading,
      error,
    },
    fetchMovies,
  ];
}

export default useHomeFetch;
