import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { BannerMovieData } from "../Banner/types";
import { imgURL } from "../../constants/constants";

const useStyles = makeStyles({
  root: {
    display: "flex",
    overflowX: "auto",
    padding: "16px",
    "&::-webkit-scrollbar": {
      height: "8px",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "4px",
      backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    "&::-webkit-scrollbar-track": {
      borderRadius: "4px",
      backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
  },
  card: {
    width: 240,
    margin: "0 8px",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  media: {
    height: 360,
  },
  cardContent: {
    backgroundColor: "black",
    color: "white",
    height: 70,
  },
});

interface MoviesSliderProps {
  movieData: BannerMovieData[];
}

const MoviesSlider: React.FC<MoviesSliderProps> = ({ movieData }) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const itemsToShow = isDesktop ? 5 : isTablet ? 3 : 1;

  return (
    <div className={classes.root}>
      {movieData.slice(0, itemsToShow).map((movie) => (
        <Card className={classes.card} key={movie.id}>
          <CardActionArea
            component="a"
            href={`${imgURL}${movie.poster}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CardMedia
              component="img"
              alt={movie.title}
              image={`${imgURL}${movie.poster}`}
              className={classes.media}
            />
            <CardContent className={classes.cardContent}>
              <Typography variant="h6" component="div">
                {movie.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default MoviesSlider;
