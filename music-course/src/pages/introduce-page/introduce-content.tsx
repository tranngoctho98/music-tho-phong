import { Grid, ImageList, ImageListItem } from "@mui/material";
import dataHome from "../../assets/data-jsons/home/home-image.json";
import ContentList from "../../components/content-renders/content-list";
import dataContent from "../../assets/data-jsons/home/home-content.json";

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
          cols={6}
          rowHeight={150}
        >
          {dataHome.listImageContent.map((item, index) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
              sx={{
                display: {
                  xs: index < 6 ? "none" : "block",
                  md: index < 6 ? "block" : "none",
                },
              }}
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
        <ContentList listContent={dataContent} />
      </Grid>
    </>
  );
};

export default IntroduceContent;
