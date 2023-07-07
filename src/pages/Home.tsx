import { Box, CircularProgress, styled } from "@mui/material";
import { useState } from "react";
import Banner from "../components/Banner/Banner";
import MovieSliderHeader from "../components/MovieSliderHeader/MovieSliderHeader";
import MovieSlider from "../components/MoviesSlider/MoviesSlider";
import UpNext from "../components/UpNext/UpNext";
import { useNowPlayingMovieData } from "../fetchers/useNowPlayingMoviesData";
import { usePopularMoviesData } from "../fetchers/usePopularMoviesData";
import { useTopRatedMoviesData } from "../fetchers/useTopRatedMoviesData";
import { useUpcomingMoviesData } from "../fetchers/useUpcomingMoviesData";

const Wrapper = styled(Box)`
  display: flex;
  padding: 20px 0;
`;
const Component = styled(Box)`
  padding: 0 115px;
`;

const Home = () => {
  const [carouselIndex, setCarouselIndex] = useState<number>(0);

  const { isLoading, data } = useNowPlayingMovieData();
  const { data: popularMoviesData, isLoading: popularMoviesLoading } =
    usePopularMoviesData();
  const { data: upcomingMoviesData, isLoading: upcomingMoviesLoading } =
    useUpcomingMoviesData();
  const { data: topRatedMoviesData, isLoading: topRatedMoviesLoading } =
    useTopRatedMoviesData();

  return (
    <>
      {isLoading ||
      topRatedMoviesLoading ||
      upcomingMoviesLoading ||
      popularMoviesLoading ? (
        <CircularProgress />
      ) : (
        <Component>
          <Wrapper>
            <Banner
              movieData={data}
              onChangeCarousel={setCarouselIndex}
              maxWidth={"65%"}
            />
            <UpNext carouselIndex={carouselIndex} movieData={data} />
          </Wrapper>

          <MovieSliderHeader
            title={"Popular movies"}
            href={"/categories?category=popular"}
          />
          <MovieSlider movieData={popularMoviesData} />
          <MovieSliderHeader
            title={"Upcoming movies"}
            href={"/categories?category=upcoming"}
          />
          <MovieSlider movieData={upcomingMoviesData} />
          <MovieSliderHeader
            title={"Top rated"}
            href={"/categories?category=top-rated"}
          />
          <MovieSlider movieData={topRatedMoviesData} />
        </Component>
      )}
    </>
  );
};

export default Home;
