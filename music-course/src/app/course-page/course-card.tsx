import { CardMedia, Grid } from "@mui/material";
import styled from "styled-components";
import Button from "../../components/buttons/button";

export interface CourseCardProps {
  image: string;
  title: string;
  content: string;
}

const CourseCard = (props: CourseCardProps) => {
  return (
    <CourseCardStyled item container direction="row" className="card-tu-van">
      <Grid item xs={3} className="image-card">
        <CardMedia
          component="img"
          image={`${props.image}`}
          alt="Live from space album cover"
        />
      </Grid>
      <Grid item container direction="column" xs={9} className="content-tu-van">
        <Grid item className="title">
          {props.title}
        </Grid>
        <Grid item className="content">
          {props.content}
        </Grid>
        <Grid item paddingTop={3}>
          <Button>Read more</Button>
        </Grid>
      </Grid>
    </CourseCardStyled>
  );
};

const CourseCardStyled = styled(Grid)`
  &&.card-tu-van {
    margin-bottom: 20px;
    min-height: 135px;
    // max-height: 150px;
    background: #fff;
    .image-card {
      padding: 5px;
      border: 1px solid #eaeaea;
    }
    .content-tu-van {
      padding-inline: 20px;
      padding-top: 10px;
      border: 1px solid #eaeaea;

      .title {
        font-size: 18px;
        font-weight: 600;
      }

      .content {
        text-overflow: " [..]";
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
      }
    }
  }
`;

export default CourseCard;
