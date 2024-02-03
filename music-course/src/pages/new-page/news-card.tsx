import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Button from "../../components/buttons/button";
import styled from "styled-components";

interface NewsCardProps {
  id: number;
  image: string;
  title: string;
  content: string;
}

const NewsCard = (props: NewsCardProps) => {
  return (
    <NewsCardStyled>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={`${props.image}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Đọc tiếp »
        </Button>
      </CardActions>
    </NewsCardStyled>
  );
};

const NewsCardStyled = styled(Card)`
  margin-inline: 10px;
  padding: 10px;
  min-height: 100%;
  box-shadow: #ccc 0px 2px 5px 0px;
  .MuiCardMedia-root {
    margin-bottom: 20px;
    position: relative;
    display: block;
    width: 100%;
  }
  .MuiCardContent-root {
    margin-top: 20px;
    padding: 0 30px;
    margin-bottom: 0;
    div.MuiTypography-root {
      color: var(--e-global-color-b72e3f3);
      font-size: 18px;
      line-height: 1.4;
      font-weight: 600;
      height: 45px;
      text-overflow: ellipsis;
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
    p.MuiTypography-root {
      margin: 10px 0;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      font-size: 16px;
      font-weight: 400;
      height: 92px;
    }
  }
  .MuiCardActions-root {
    justify-content: flex-end;
  }
`;

export default NewsCard;
