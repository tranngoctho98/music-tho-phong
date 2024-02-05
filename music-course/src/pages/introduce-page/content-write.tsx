import { Grid } from "@mui/material";
import styled from "styled-components";

const ContentWrite = () => {
  return (
    <ContentWriteStyled
      item
      container
      direction="column"
      rowSpacing={1}
    ></ContentWriteStyled>
  );
};

const ContentWriteStyled = styled(Grid)`
  font-size: 18px;
  .MuiTypography-root {
    font-size: 18px;
  }
  .line1,
  .line2,
  .line15 {
    text-align: center;
    font-style: italic;
  }

  .item-bold {
    font-weight: bold;
  }
  ul {
    margin: 0px;
  }
`;

export default ContentWrite;
