import { Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { routePath } from "../../constants/route";
interface HeaderMenuProps {
  anchorEl: null | HTMLElement;
  handleClose: () => void;
}
const HeaderMenu: React.FC<HeaderMenuProps> = ({ anchorEl, handleClose }) => {
  const isOpen = Boolean(anchorEl);

  return (
    <Menu
      id="header-menu"
      anchorEl={anchorEl}
      open={isOpen}
      onClose={handleClose}
    >
      <Link
        style={{ textDecoration: "none", color: "inherit" }}
        to={`${routePath.categories}?category=popular`}
      >
        <MenuItem onClick={handleClose}> Popular</MenuItem>
      </Link>
      <Link
        style={{ textDecoration: "none", color: "inherit" }}
        to={`${routePath.categories}?category=top-rated`}
      >
        <MenuItem onClick={handleClose}> Top Rated</MenuItem>
      </Link>

      <Link
        style={{ textDecoration: "none", color: "inherit" }}
        to={`${routePath.categories}?category=upcoming`}
      >
        <MenuItem onClick={handleClose}> Upcoming</MenuItem>
      </Link>
    </Menu>
  );
};

export default HeaderMenu;
