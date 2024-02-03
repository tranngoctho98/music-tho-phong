import styled from "styled-components";
import SliderBarComponent from "../../components/slide-show/slider-show";
import { Box, Grid } from "@mui/material";
import ViewScreen from "../../components/view-screen/view-screen";
import ListCourse from "./list-course";
import ContentIntroduction from "./content-introduction";
import dataContact from "../../assets/data-jsons/contact.json";

const HomePage = () => {
  return (
    <HomePageStyled>
      <Box display={{ xs: "none", md: "block" }}>
        <SliderBarComponent />
      </Box>
      <ViewScreen>
        <Grid container direction="column" id="home-page" rowGap={4}>
          <Grid item container direction="row">
            <Grid item lg={3} display={{ xs: "none", lg: "block" }}>
              <ListCourse />
            </Grid>
            <Grid item sm={12} lg={9}>
              <ContentIntroduction />
            </Grid>
          </Grid>
          <Grid item container direction="row" className="contact">
            <Box py={2}>
              LIÊN HỆ VỚI CHÚNG TÔI QUA SỐ
              <span style={{ color: "#ff0000" }}>
                {" HOTLINE " + dataContact.numberPhone + " "}
              </span>
              ĐỂ ĐƯỢC TƯ VẤN MIỄN PHÍ
            </Box>
          </Grid>
        </Grid>
      </ViewScreen>
    </HomePageStyled>
  );
};

const HomePageStyled = styled.div`
  min-height: 500px;
  #home-page {
    .contact {
      justify-content: center;
      font-size: 16pt;
      font-weight: 700;
      line-height: 24px;
      border-top-width: 2px !important;
      border-right-width: 2px !important;
      border-bottom-width: 2px !important;
      border-left-width: 2px !important;
      border-left-color: #dd0000 !important;
      border-left-style: dashed !important;
      border-right-color: #dd0000 !important;
      border-right-style: dashed !important;
      border-top-color: #dd0000 !important;
      border-top-style: dashed !important;
      border-bottom-color: #dd0000 !important;
      border-bottom-style: dashed !important;
      border-radius: 5px !important;
    }
  }
`;

export default HomePage;
