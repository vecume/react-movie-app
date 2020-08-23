import { useState, useEffect, useCallback } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

function useMovieFetch(movieId) {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setError(false);
    setLoading(true);

    try {
      const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
      const result = await (await fetch(endpoint)).json();
      const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
      const creditsResults = await (await fetch(creditsEndpoint)).json();
      const directors = creditsResults.crew.filter(
        (member) => member.job === "Director"
      );
      const imagesEndpoint = `${API_URL}movie/${movieId}/images?api_key=${API_KEY}`;
      const imagesData = await (await fetch(imagesEndpoint)).json();
      const images = imagesData.backdrops.map(
        (image) => `${IMAGE_BASE_URL}${POSTER_SIZE}${image.file_path}`
      );
      const videoEndpoint = `${API_URL}movie/${movieId}/videos?api_key=${API_KEY}`;
      const videos = await (await fetch(videoEndpoint)).json();
      const similarEndpoint = `${API_URL}movie/${movieId}/similar?api_key=${API_KEY}`;
      const similarMovies = await (await fetch(similarEndpoint)).json();

      setState({
        ...result,
        actors: creditsResults.cast,
        directors,
        images,
        videos: videos.results,
        similarMovies:
          similarMovies.results.length > 0 ? similarMovies.results : null,
      });
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  }, [movieId]);

  useEffect(() => {
    if (localStorage[movieId]) {
      setState(JSON.parse(localStorage[movieId]));
      setLoading(false);
    } else {
      fetchData();
    }
  }, [fetchData, movieId]);

  useEffect(() => {
    localStorage.setItem(movieId, JSON.stringify(state));
  }, [movieId, state]);

  return [state, loading, error];
}

export default useMovieFetch;
