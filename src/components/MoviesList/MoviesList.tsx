import { Star } from "@mui/icons-material";
import { List, ListItem, styled, Typography } from "@mui/material";
import { imgURL } from "../../constants/constants";
import { BannerMovieData } from "../Banner/types";

interface MoviesListProps {
  movieData: BannerMovieData[];
}

const Banner = styled("img")({
  width: 50,
  height: 100,
});

const Container = styled(List)`
  display: flex;
`;
const MoviesList: React.FC<MoviesListProps> = ({ movieData }) => {
  return (
    <>
      <Container>
        <ListItem>
          <Typography>Cover</Typography>
        </ListItem>
        <ListItem>
          <Typography>Name</Typography>
        </ListItem>
        <ListItem>
          <Typography>Rating</Typography>
        </ListItem>
        <ListItem>
          <Typography>Release date</Typography>
        </ListItem>
      </Container>
      {movieData.map((movie) => (
        <Container>
          <ListItem>
            <Banner src={`${imgURL}${movie.poster}`} alt="movie-poster" />
          </ListItem>
          <ListItem>
            <Typography>{movie.title}</Typography>
          </ListItem>
          <ListItem>
            <Star color="warning" />
            <Typography>{movie.rating}</Typography>
          </ListItem>
          <ListItem>
            <Typography>{movie.releaseDate}</Typography>
          </ListItem>
        </Container>
      ))}
    </>
  );
};

export default MoviesList;
