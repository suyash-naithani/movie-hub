import { Typography, Box, styled } from "@mui/material";
import React from "react";
import { imgURL } from "../../constants/constants";
import { BannerMovieData } from "../Banner/types";

interface UpNextProps {
  movieData: BannerMovieData[];
  carouselIndex: number;
}

const Component = styled(Box)`
width:40%
display:flex
flex-direction:column;
align-items:baseline;
padding-left:20px;
&>p{
  color:#F5C518;
  font-weight:600;
   font-size:18px;
   margin-bottom:10px;
}
`;
const Poster = styled("img")({ width: 88, marginTop: 10 });

const Wrapper = styled(Box)`
  color: #ffffff;
  display: flex;
  & > p {
    margin-left: 20px;
  }
`;

const UpNext: React.FC<UpNextProps> = ({ movieData, carouselIndex }) => {
  const displayNowPlayingPoster = () => {
    //const normalizedIndex = (startIndex - 1) % movieData.length; // Normalize the start index to handle wrapping around the array
    const displayedMovies = [];

    for (let i = carouselIndex + 1; i <= carouselIndex + 3; i++) {
      const index = i % movieData.length; // Handle wrapping around the array

      displayedMovies.push(movieData[index]);
    }

    return displayedMovies.map((movie) => (
      <Wrapper>
        <Poster src={`${imgURL}${movie.poster}`} alt="movie-poster" />
        <Typography>{movie.title}</Typography>
      </Wrapper>
    ));
  };

  return (
    <Component>
      <Typography>Watch trailers of now playing movies</Typography>
      {displayNowPlayingPoster()}
    </Component>
  );
};

export default UpNext;
