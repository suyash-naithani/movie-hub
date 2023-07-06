import { Box, Divider, styled, Typography } from "@mui/material";
import Banner from "../components/Banner/Banner";
import { usePopularMoviesData } from "../fetchers/usePopularMoviesData";
import { useLocation } from "react-router-dom";
import { useTopRatedMoviesData } from "../fetchers/useTopRatedMoviesData";
import { useUpcomingMoviesData } from "../fetchers/useUpcomingMoviesData";
import MoviesList from "../components/MoviesList/MoviesList";

const Container = styled(Box)`
  width: 80%;
  margin: auto;
`;

const TextComponent = styled(Box)`
  background: #f5f5f5;
  padding: 10px;
  width: 75%;
`;

const MoviesCategory: React.FC = () => {
  const { data: popularMoviesData, isLoading: popularMoviesLoading } =
    usePopularMoviesData();
  const { data: upcomingMoviesData, isLoading: upcomingMoviesLoading } =
    useUpcomingMoviesData();
  const { data: topRatedMoviesData, isLoading: topRatedMoviesLoading } =
    useTopRatedMoviesData();

  const getMovieData = () => {
    if (search.includes("upcoming")) return upcomingMoviesData;
    if (search.includes("top-rated")) return topRatedMoviesData;
    if (search.includes("popular")) return popularMoviesData;
  };

  const isLoading = () => {
    if (search.includes("upcoming")) return upcomingMoviesLoading;
    if (search.includes("top-rated")) return topRatedMoviesLoading;
    if (search.includes("popular")) return popularMoviesLoading;
  };

  const categoryType = () => {
    const category = search.split("=")[1];
    return category;
  };

  const { search } = useLocation();
  return (
    <Container>
      {isLoading() ? (
        "Loading"
      ) : (
        <>
          <Banner movieData={getMovieData()} maxWidth={"80%"} />

          <TextComponent>
            <Typography variant="h6"> IMDb Charts </Typography>
            <Typography variant="h4" style={{ margin: 5 }}>
              {`IMDb ${categoryType()} movies`}
            </Typography>
            <Divider />
            <MoviesList movieData={getMovieData()} />
          </TextComponent>
        </>
      )}
    </Container>
  );
};

export default MoviesCategory;
