import { Grid } from "@mui/material";
import styled from "styled-components";
import dataHome from "../../assets/data-jsons/home/home-image.json";
import IntroduceContent from "../introduce-page/introduce-content";

const ContentIntroduction = () => {
  return (
    <ContentIntroductionStyled container direction="column">
      <Grid item className="title-content">
        Trung tâm Âm nhạc Sun Music
      </Grid>
      <Grid item className="image-1">
        <img
          className="image-contact"
          src={`${dataHome.imageTop}`}
          alt="logo-music"
          loading="lazy"
        />
      </Grid>
      <IntroduceContent />
    </ContentIntroductionStyled>
  );
};

const ContentIntroductionStyled = styled(Grid)`
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 30px;
  .title-content {
    color: #1e73be;
    text-align: left;
    font-family: Roboto Slab;
    font-weight: 700;
    font-style: normal;
    font-size: 30px;
    margin-bottom: 10px;
  }
  .image-1 {
    margin-bottom: 35px;
  }
  .home-group-image {
    height: auto;
    max-width: 100%;
  }
`;

export default ContentIntroduction;
