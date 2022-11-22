import RoofingOutlinedIcon from "@mui/icons-material/RoofingOutlined";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";

export default function AppBarHome({ title }) {
  return (
    <AppBar position="relative">
      <Toolbar>
        <RoofingOutlinedIcon sx={{ mr: 2 }} />
        <Link href="/" color="inherit">
          {title}
        </Link>
      </Toolbar>
    </AppBar>
  );
}
