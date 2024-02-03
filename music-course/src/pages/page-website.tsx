import { Outlet } from "react-router-dom";
import FooterComponent from "../components/footer/footer";
import AppBarWeb from "../components/header/app-bar";

const PageWebsite = () => {
  return (
    <>
      <AppBarWeb />
      <Outlet />
      <FooterComponent />
    </>
  );
};

export default PageWebsite;
