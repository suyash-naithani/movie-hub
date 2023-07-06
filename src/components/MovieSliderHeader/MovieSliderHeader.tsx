import { Typography, Link } from "@mui/material";
import { Box } from "@mui/system";

interface MovieSliderHeaderProps {
  title: string;
  href: string;
}

const MovieSliderHeader: React.FC<MovieSliderHeaderProps> = ({
  title,
  href,
}) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridAutoColumns: "1fr",
        gap: 1,
      }}
    >
      <Typography
        sx={{
          gridRow: "1",
          gridColumn: "span 2",
          color: "yellow",
          fontSize: "18px",
        }}
      >
        {title}
      </Typography>
      {/* The second non-visible column has width of 1/4 */}
      <Link
        color="inherit"
        href={href}
        underline="none"
        sx={{ paddingLeft: "150px", gridRow: "1", color: "yellow" }}
      >
        View all
      </Link>
    </Box>
  );
};

export default MovieSliderHeader;
