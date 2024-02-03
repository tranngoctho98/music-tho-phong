import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import styled from "styled-components";
import dataHome from "../../assets/data-jsons/home/home-image.json";
import { useNavigate } from "react-router-dom";

const ListCourse = () => {
  const navigate = useNavigate();
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
                <ListItemButton
                  onClick={() =>
                    navigate("cac-khoa-hoc/" + (index + 1).toString())
                  }
                >
                  <ListItemText primary={value} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Grid>
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
