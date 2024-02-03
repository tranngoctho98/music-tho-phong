import { Box, Grid, Pagination, Stack } from "@mui/material";
import { memo, useCallback, useState } from "react";
import CardProduct, { CardProductProps } from "./card-product";

const itemsPerPage = 8; // Số lượng mục hiển thị trên mỗi trang

const totalPages = (totalItems: number): number => {
  return Math.ceil(totalItems / itemsPerPage);
};

const getCurrentItem = (
  listData: CardProductProps[],
  page: number
): CardProductProps[] => {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return listData.slice(startIndex, endIndex);
};

interface ListProductProps {
  listData: CardProductProps[];
}

const ListProduct = ({ listData }: ListProductProps) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<CardProductProps[]>(
    getCurrentItem(listData, 1)
  );

  const handleChange = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
      setData(getCurrentItem(listData, value));
    },
    [listData]
  );

  return (
    <Box px={1}>
      <Stack direction="row" justifyContent="end" alignItems="end">
        <Pagination
          count={totalPages(listData.length)}
          page={page}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
          color="primary"
        />
      </Stack>
      <Grid
        py={2}
        container
        direction="row"
        spacing={3}
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {data.map((item, index) => (
          <Grid key={index} item xs={6} sm={4} md={3}>
            <CardProduct {...item} />
          </Grid>
        ))}
      </Grid>
      <Stack direction="row" justifyContent="end" alignItems="end">
        <Pagination
          count={totalPages(listData.length)}
          page={page}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
          color="primary"
        />
      </Stack>
    </Box>
  );
};

export default memo(ListProduct);
