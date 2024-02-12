import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import BottomNavigationComponent from "../components/bottom-navigation/bottom-navigation";
import FooterComponent from "../components/footer/footer";
import AppBarWeb from "../components/header/app-bar";

const PageWebsite = () => {
  return (
    <>
      <AppBarWeb />
      <Outlet />
      <FooterComponent />
      <Box display={{ xs: "block", md: "none" }}>
        <BottomNavigationComponent />
      </Box>
    </>
  );
};

export default PageWebsite;
