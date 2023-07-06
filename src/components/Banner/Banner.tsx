import { Box, styled, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { imgURL } from "../../constants/constants";
import { BannerMovieData } from "./types";

interface BannerProps {
  movieData: BannerMovieData[];
  onChangeCarousel?: (index: number) => void;
  maxWidth: string;
}

const ImageContainer = styled(Box)({
  position: "relative",
  cursor: "pointer",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const ImageOverlay = styled(Box)({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "30%",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  padding: "10px",
  boxSizing: "border-box",
  flexDirection: "column",
  transform: "scale(1)",
  transition: "transform 0.3s ease",
  [`${ImageContainer}:hover &`]: {
    transform: "scale(1.05)",
  },
});

const Caption = styled(Typography)({
  color: "#fff",
  margin: "16px",
  marginBottom: "0px",
  fontSize: "16px",
  transition: "font-size 0.3s ease",
  [`${ImageContainer}:hover &`]: {
    fontSize: "8px",
  },
});

const StyledBanner = styled("img")({
  width: "100%",
});

const Banner: React.FC<BannerProps> = ({
  movieData,
  onChangeCarousel,
  maxWidth,
}) => {
  const handleImageClick = (link: string) => {
    window.open(link, "_blank"); // Open link in a new tab
  };

  return (
    <Box maxWidth={maxWidth}>
      <Carousel
        showIndicators={true}
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        onChange={(index: number) =>
          onChangeCarousel && onChangeCarousel(index)
        }
      >
        {movieData.map((data) => (
          <ImageContainer
            key={data.title}
            onClick={() => handleImageClick("as")}
          >
            <StyledBanner
              src={`${imgURL}${data.backdrop}`}
              alt="banner-images"
              style={{ maxHeight: 500 }}
            />
            <ImageOverlay>
              <Caption variant="h1" fontSize={"18px"}>
                {data.title}
              </Caption>
              <Caption>{data.overview}</Caption>
            </ImageOverlay>
          </ImageContainer>
        ))}
      </Carousel>
    </Box>
  );
};

export default Banner;
