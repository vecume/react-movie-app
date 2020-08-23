import { useState, useEffect, useCallback } from "react";
import { API_URL, API_KEY } from "../../config";

function useActorFetch(actorId) {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setError(false);
    setLoading(true);

    try {
      const actorEndpoint = `${API_URL}person/${actorId}?api_key=${API_KEY}`;
      const result = await (await fetch(actorEndpoint)).json();
      const imagesEndpoint = `${API_URL}person/${actorId}/images?api_key=${API_KEY}`;
      const images = await (await fetch(imagesEndpoint)).json();
      const movieCreditsEndpoint = `${API_URL}person/${actorId}/movie_credits?api_key=${API_KEY}`;
      const movieCredits = await (await fetch(movieCreditsEndpoint)).json();

      setState({
        ...result,
        images: images.profiles.map((img) => img.file_path),
        movieCasts: movieCredits.cast,
      });
    } catch (err) {
      setError(true);
      console.log(err);
    }

    setLoading(false);
  }, [actorId]);

  useEffect(() => {
    fetchData();
  }, [actorId, fetchData]);

  return [state, loading, error];
}

export default useActorFetch;
