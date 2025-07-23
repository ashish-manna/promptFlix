import { CohereClient } from "cohere-ai";

export const TMDB_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`,
  },
};

export const cohere = new CohereClient({
  token: import.meta.env.VITE_COHERE_API_TOKEN,
});
