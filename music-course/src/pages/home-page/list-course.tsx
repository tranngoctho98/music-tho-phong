import {
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import styled from "styled-components";
import dataHome from "../../assets/data-jsons/home/home-image.json";

const ListCourse = () => {
  return (
    <ListCourseStyled item container direction="column">
      <Grid item className="title-list-course">
        DANH SÁCH CÁC KHÓA HỌC NỔI BẬT
      </Grid>
      <Grid item className="list-course">
        <List>
          {dataHome.listCourse.map((value, index) => {
            return (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemText primary={value} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Grid>

      <Grid item className="danh-cho-phu-huynh">
        DÀNH CHO PHỤ HUYNH
      </Grid>

      <Grid item className="fanpage">
        FANPAGE
      </Grid>
      <Grid item className="show-fanpage">
        FANPAGE
      </Grid>
      <Grid item className="goc-tu-van">
        GÓC TƯ VẤN
      </Grid>
      {dataHome.listTuVan.map((value, index) => {
        return (
          <Grid
            key={index}
            item
            container
            direction="row"
            className="card-tu-van"
          >
            <Grid item xs={6}>
              <CardMedia
                component="img"
                image={`${value.image}`}
                alt="Live from space album cover"
              />
            </Grid>
            <Grid item xs={6} className="content-tu-van">
              {value.content}
            </Grid>
          </Grid>
        );
      })}
    </ListCourseStyled>
  );
};

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
