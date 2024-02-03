import { Grid } from "@mui/material";
import dataNews from "../../assets/data-jsons/news/news.json";
import NewsCard from "./news-card";
import ViewScreen from "../../components/view-screen/view-screen";

const NewsPage = () => {
  return (
    <ViewScreen title="Tin tức" coverImage="/images/news/news-anh-bia.jpg">
      <Grid
        item
        container
        direction="row"
        rowSpacing={2}
        justifyContent="center"
        alignItems="flex-start"
      >
        {dataNews.map((value, index) => {
          return (
            <>
              <Grid item xs={6} sm={4} md={3}>
                <NewsCard key={index} {...value} />
              </Grid>
            </>
          );
        })}
      </Grid>
    </ViewScreen>
  );
};

export default NewsPage;
