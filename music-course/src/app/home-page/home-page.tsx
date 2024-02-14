import { Box, Grid } from "@mui/material";
import styled from "styled-components";
import SliderBarComponent from "../../components/slide-show/slider-show";
import ViewScreen from "../../components/view-screen/view-screen";
import ContentIntroduction from "./content-introduction";
import ListCourse from "./list-course";
import ContactFormRegister from "../contact-page/contact-form-register";

const HomePage = () => {
  return (
    <HomePageStyled>
      <Box>
        <SliderBarComponent />
      </Box>
      <ViewScreen>
        <Grid container direction="column" id="home-page" rowGap={4}>
          <ListCourse />
          <ContentIntroduction />
          <ContactFormRegister />
        </Grid>
      </ViewScreen>
    </HomePageStyled>
  );
};

const HomePageStyled = styled.div`
  min-height: 500px;
`;

export default HomePage;
