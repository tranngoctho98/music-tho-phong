import { Grid, ImageList, ImageListItem } from "@mui/material";
import ContentWrite from "./content-write";
import dataHome from "../../assets/data-jsons/home/home-image.json";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const IntroduceContent = () => {
  return (
    <>
      <Grid item container direction="column">
        <ImageList
          variant="quilted"
          className="home-group-image"
          cols={4}
          rowHeight={121}
        >
          {dataHome.listImageContent.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(`${item.img}`, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
      <Grid item>
        <ContentWrite />
      </Grid>
    </>
  );
};

export default IntroduceContent;
