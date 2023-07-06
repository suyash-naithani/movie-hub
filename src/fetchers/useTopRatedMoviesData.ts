import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TOPRATED_API_URL } from "../constants/constants";

const fetchTopRatedMovies = () => {
  return axios.get(TOPRATED_API_URL);
};
export const useTopRatedMoviesData = () => {
  return useQuery(["top-movies"], fetchTopRatedMovies, {
    select: (data) => {
      const movieData = data?.data.results.map(
        (value: {
          original_title: string;
          overview: string;
          backdrop_path: string;
          id: number;
          poster_path: string;
          release_date: string;
          vote_average: number;
        }) => {
          const {
            backdrop_path,
            overview,
            original_title,
            id,
            poster_path,
            release_date,
            vote_average,
          } = value;
          return {
            title: original_title,
            overview,
            backdrop: backdrop_path,
            id,
            poster: poster_path,
            releaseDate: release_date,
            rating: vote_average,
          };
        }
      );
      return movieData;
    },
  });
};
