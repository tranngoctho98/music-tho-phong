import ViewScreen from "../../components/view-screen/view-screen";
import dataCourse from "../../assets/data-jsons/course/course.json";
import CourseCard, { CourseCardProps } from "./course-card";
import { Pagination, Stack } from "@mui/material";
import React, { useCallback, useState } from "react";

const itemsPerPage = 10; // Số lượng mục hiển thị trên mỗi trang
const totalItems = dataCourse.length; // Tổng số mục
const totalPages = Math.ceil(totalItems / itemsPerPage);

const getCurrentItem = (page: number): CourseCardProps[] => {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return dataCourse.slice(startIndex, endIndex);
};

const CoursePage = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<CourseCardProps[]>(getCurrentItem(1));

  const handleChange = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
      setData(getCurrentItem(value));
    },
    []
  );

  return (
    <ViewScreen title="Các khóa học">
      <>
        {data.map((value) => (
          <CourseCard {...value} />
        ))}
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChange}
            variant="outlined"
            shape="rounded"
            color="primary"
          />
        </Stack>
      </>
    </ViewScreen>
  );
};

export default CoursePage;
