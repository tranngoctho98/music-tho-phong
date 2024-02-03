import { Box, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import dataContent from "../../assets/data-jsons/home/home-content.json";

const ContentWrite = () => {
  return (
    <ContentWriteStyled item container direction="column" rowSpacing={1}>
      <Grid item className="line1">
        {dataContent.line1}
      </Grid>
      <Grid item className="line2">
        {dataContent.line2}
      </Grid>
      <Grid item className="line3">
        {dataContent.line3}
      </Grid>
      <Grid item className="line4">
        {dataContent.line4}
      </Grid>
      <Grid item className="line5">
        <Typography className="item-bold" component="span">
          {dataContent.line5.item1}
        </Typography>
        <Typography component="span">{dataContent.line5.item2}</Typography>
      </Grid>
      <Grid item className="line6">
        <Box className="item-bold"> {dataContent.line6.item1}</Box>
        <Box> {dataContent.line6.item2}</Box>
      </Grid>
      <Grid item className="line7">
        <Box className="item-bold">{dataContent.line7.item1}</Box>
        <Box>
          <ul>
            {dataContent.line7.listItem.map((item, index) => {
              return (
                <Typography key={index} className="item-line" component="li">
                  {item}
                </Typography>
              );
            })}
          </ul>
        </Box>
      </Grid>
      <Grid item className="line8">
        <Box className="item-bold">{dataContent.line8.item1}</Box>
        <Box>
          <ul>
            {dataContent.line8.listItem.map((item, index) => {
              return (
                <Typography key={index} className="item-line" component="li">
                  {item}
                </Typography>
              );
            })}
          </ul>
        </Box>
      </Grid>
      <Grid item className="line9">
        <Box className="item-bold">{dataContent.line9.item1}</Box>
        <Box>
          <ul>
            {dataContent.line9.listItem.map((item, index) => {
              return (
                <Typography key={index} className="item-line" component="li">
                  {item}
                </Typography>
              );
            })}
          </ul>
        </Box>
      </Grid>
      <Grid item className="line10">
        <Typography className="item-bold" component="span">
          {dataContent.line10.item1}
        </Typography>
        <Typography component="span">{dataContent.line10.item2}</Typography>
      </Grid>
      <Grid item className="line11">
        {dataContent.line11}
      </Grid>
      <Grid item className="line12">
        {dataContent.line12}
      </Grid>
      <Grid item className="line13">
        {dataContent.line13}
      </Grid>
      <Grid item className="line14">
        <Typography className="item-bold" component="span">
          {dataContent.line14.item1}
        </Typography>
        <Typography component="span">{dataContent.line14.item2}</Typography>
      </Grid>
      <Grid item className="line15">
        <Typography component="span">{dataContent.line15.item1}</Typography>
        <br />
        <Typography component="span">{dataContent.line15.item2}</Typography>
        <br />
        <Typography component="span">{dataContent.line15.item3}</Typography>
        <br />
        <Typography component="span">{dataContent.line15.item4}</Typography>
      </Grid>
    </ContentWriteStyled>
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
