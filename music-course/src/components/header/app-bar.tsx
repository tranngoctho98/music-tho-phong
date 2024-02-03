import {
  AppBar,
  Box,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import logoMusic from "../../assets/images/logo-not-background.png";
import styled from "styled-components";
import menus from "../../assets/data-jsons/menu.json";
import MenuComponent from "./menu";
import PhoneContactComponent from "./phone-contact";
import React from "react";
import theme from "../../theme/theme";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router-dom";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
type Anchor = "top" | "left" | "bottom" | "right";
const AppBarWeb = () => {
  const navigate = useNavigate();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menus.map((menu, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => navigate(menu.to)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={menu.nameMenu} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <ElevationScroll>
        <AppBarStyled sx={{ height: 75 }}>
          <Box display={{ xs: "block", md: "none" }}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2, display: { xs: "block", md: "none" } }}
                onClick={toggleDrawer("left", true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "block", md: "none" } }}
              >
                SUN MUSIC
              </Typography>
            </Toolbar>
            <SwipeableDrawer
              anchor={"left"}
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
              onOpen={toggleDrawer("left", true)}
              sx={{ xs: "flex", md: "none" }}
            >
              {list("left")}
            </SwipeableDrawer>
          </Box>

          <Container
            maxWidth="xl"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Toolbar disableGutters>
              <Typography
                component="a"
                href="/"
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              >
                <img
                  className="logo-music"
                  src={logoMusic}
                  alt="logo-music"
                  loading="lazy"
                />
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {menus.map((menu) => (
                  <MenuComponent key={menu.id} {...menu} />
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }} display={{ xs: "none", lg: "block" }}>
                <PhoneContactComponent />
              </Box>
            </Toolbar>
          </Container>
        </AppBarStyled>
      </ElevationScroll>
      <Toolbar
        style={{ background: theme.palette.primary.main, height: "75px" }}
      />
    </>
  );
};

const AppBarStyled = styled(AppBar)`
  padding-inline: 10px;
  img.logo-music {
    width: 100%;
    max-width: 100%;
    height: 75px;
    object-fit: contain;
    color: #cd222d;
  }
`;

export default AppBarWeb;
