import { Grid, ImageList, ImageListItem } from "@mui/material";
import listData from "../../assets/data-jsons/picture-student/picture-student.json";

const PictureContent = () => {
  return (
    <Grid item container direction="column">
      <ImageList className="home-group-image" variant="woven" cols={3} gap={12}>
        {listData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Grid>
  );
};

export default PictureContent;
