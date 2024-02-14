import { useLoaderData } from "react-router-dom";
import ContentList from "../../components/content-renders/content-list";
import { LineTextModel } from "../../components/content-renders/content-renders";
import ViewScreen from "../../components/view-screen/view-screen";
import FormComment from "../form-comment/form-comment";
import { Box } from "@mui/material";
import styled from "styled-components";
import PersonIcon from "@mui/icons-material/Person";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

interface CourseDetailModel {
  tenKhoaHoc: string;
  giangVien: string;
  urlGiangVien: string;
  comment: string;
  ngayKhoaHoc: string;
  noiDungKhoaHoc: LineTextModel[];
}

const CourseDetailPage = () => {
  const dataCourse = useLoaderData() as CourseDetailModel;

  if (!dataCourse) {
    return <></>;
  }
  return (
    <ViewScreen>
      <CourseDetailPageStyled>
        <Box className="title-course" sx={{}}>
          {dataCourse.tenKhoaHoc}
        </Box>
        <Box>
          <div className="item-child">
            <PersonIcon sx={{ color: "#1e73be;", fontSize: "16px" }} />
            <span>
              {" by: "}
              <a href={dataCourse.urlGiangVien}>{dataCourse.giangVien}</a>
            </span>
          </div>
          <div className="item-child">
            <FolderOpenIcon sx={{ fontSize: "16px" }} />
            <span>
              <a href="/cac-khoa-hoc">CÁC KHÓA HỌC</a>
            </span>
          </div>
          <div className="item-child">
            <ChatBubbleOutlineIcon sx={{ fontSize: "16px" }} />
            <span>{dataCourse.comment}</span>
          </div>
          <div className="item-child">
            <CalendarMonthIcon sx={{ fontSize: "16px" }} />
            <span>{dataCourse.ngayKhoaHoc}</span>
          </div>
        </Box>
        <ContentList listContent={dataCourse.noiDungKhoaHoc} />
        <FormComment />
      </CourseDetailPageStyled>
    </ViewScreen>
  );
};

const CourseDetailPageStyled = styled.div`
  margin-top: 35px;
  .title-course {
    margi-top: 30px;
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
  }
  div.item-child {
    color: #666;
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    span {
      padding-left: 2px;
      padding-right: 8px;
    }
  }

  a {
    color: #999;
    outline: none !important;
    text-decoration: none;
    &:hover {
      color: #337ab7;
    }
  }
`;

export default CourseDetailPage;
