import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  InputBase,
} from "@mui/material";
import { useState } from "react";
import { logoURL } from "../../constants/constants";
import { BookmarkAdd, ExpandMore, Menu } from "@mui/icons-material";
import HeaderMenu from "./HeaderMenu";
import * as React from "react";
import { useNavigate } from "react-router";
import { routePath } from "../../constants/route";
const StyledToolbar = styled(Toolbar)`
  background: #000000;
  min-height: 56px !important;
  padding: 0 115px !important;
  justify-content: space-between;
  & > * {
    padding: 0 16px;
  }
  & > div {
    display: flex;
    align-items:center & > p {
      font-size: 14px;
      font-weight: 600;
    }
  }
  & > p {
    font-size: 14px;
    font-weight: 600;
  }
`;

const InputSearchField = styled(InputBase)`
  background: #ffffff;
  height: 30px;
  width: 55%;
  border-radius: 5px;
`;

const Logo = styled("img")({
  width: 64,
});

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState<null | HTMLElement>(null);

  const onMenuClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMenuOpen(event.currentTarget);
  };

  const handleClose = () => {
    setMenuOpen(null);
  };
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Logo
          src={logoURL}
          alt="logo"
          onClick={() => navigate(routePath.home)}
        />
        <Box onClick={(event) => onMenuClick(event)}>
          <Menu />
          <Typography>Menu</Typography>
        </Box>
        <HeaderMenu anchorEl={menuOpen} handleClose={handleClose} />
        <InputSearchField />
        <Typography>
          IMDb <Box component="span">Pro</Box>
        </Typography>
        <Box>
          <BookmarkAdd />
          <Typography>WatchList</Typography>
        </Box>
        <Typography>Sign In</Typography>
        <Box>
          <Typography>EN</Typography>
          <ExpandMore />
        </Box>{" "}
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
