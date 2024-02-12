import { Grid, Typography } from "@mui/material";
import styled from "styled-components";
import dataHome from "../../assets/data-jsons/home/home-image.json";

const ListCourse = () => {
  return (
    <ListCourseStyled item container direction="column">
      <Grid item className="title" textAlign="center">
        <img src={dataHome.imageTitleCourse} alt="title" loading="lazy" />
      </Grid>
      <Grid item container direction="row" justifyContent="center" gap={3}>
        {dataHome.listCourse.map((value, index) => {
          return (
            <Grid key={index} item xs={5.5} md={3.25}>
              <ItemCourse text={value} index={index} />
            </Grid>
          );
        })}
      </Grid>
    </ListCourseStyled>
  );
};

interface ItemCourseProps {
  index: number;
  text: string;
}

const ItemCourse = (props: ItemCourseProps) => {
  return (
    <ItemCourseStyled href={"cac-khoa-hoc/" + (props.index + 1).toString()}>
      <Typography
        className="item1"
        sx={{ display: { xs: "none", md: "block" } }}
      >
        Khóa học
      </Typography>
      <div className="item2"> {props.text}</div>
    </ItemCourseStyled>
  );
};

const ItemCourseStyled = styled.a`
  && {
    flex-direction: column;
    background-color: transparent;
    background-image: linear-gradient(125deg, #6b3d97 15%, #d1228a 85%);
    padding: 10px;
    min-height: 195px;
    border-radius: 15px;
    width: 100%;
    display: flex;
    color: #fff;
    overflow: visible;
    text-decoration: none;

    font-weight: 700;
    text-transform: uppercase;
    font-family: "Nunito", Sans-serif;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    text-align: center;
    justify-content: center;

    .item1 {
      font-size: 24px;
    }

    .item2 {
      font-size: 28px;
    }
  }
  &&:hover {
    background-image: linear-gradient(125deg, #009be6 0%, #7500ca 70%);
  }
`;

const ListCourseStyled = styled(Grid)`
  .title-list-course,
  .danh-cho-phu-huynh,
  .fanpage,
  .goc-tu-van {
    font-size: 22px;
    color: #ffffff;
    line-height: 1.5;
    text-align: center;
    font-family: Roboto Slab;
    font-weight: 700;
    font-style: normal;
    margin-bottom: 0px;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: #1e73be;
  }

  .list-course {
    margin-bottom: 0px !important;
    padding-bottom: 15px !important;
    background-color: #c1dcf4 !important;
    .MuiButtonBase-root.MuiListItemButton-root.MuiListItemButton-gutters.MuiListItemButton-root {
      padding-block: 5px;
    }
    li::before {
      content: "●";
      margin-left: 15px;
    }
  }

  .danh-cho-phu-huynh {
    margin-block: 10px;
  }
  .show-fanpage,
  .goc-tu-van {
    margin-bottom: 10px;
  }
  .card-tu-van {
    margin-bottom: 10px;
    min-height: 135px;
    background: #fff;
    .content-tu-van {
      box-sizing: border-box;
      padding: 10px;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: cover;
      color: #1e73be;
      line-height: 1.5;
      text-align: left;
      font-family: Roboto Slab;
      font-weight: 400;
      font-style: normal;
      margin-block: auto;
    }
  }
`;

export default ListCourse;
