import { Grid } from "@mui/material";
import styled from "styled-components";
import IntroduceContent from "../introduce-page/introduce-content";

const ContentIntroduction = () => {
  return (
    <ContentIntroductionStyled container direction="column">
      <Grid item className="title-content">
        Sun Music – Mặt trời âm nhạc!
      </Grid>
      <IntroduceContent />
    </ContentIntroductionStyled>
  );
};

const ContentIntroductionStyled = styled(Grid)`
  position: relative;
  min-height: 1px;
  .title-content {
    color: #1e73be;
    text-align: left;
    font-family: Roboto Slab;
    font-weight: 700;
    font-style: normal;
    font-size: 30px;
    margin-bottom: 10px;
  }
  .home-group-image {
    height: auto;
    max-width: 100%;
  }
`;

export default ContentIntroduction;
