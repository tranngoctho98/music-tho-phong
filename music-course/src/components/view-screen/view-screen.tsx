import { Box } from "@mui/material";
import BreadcrumbsComponent from "../breadcrumbs/breadcrumbs";
import { BreadCrumbsModel } from "../../models/bread-crumbs-model";
import { memo, useEffect } from "react";

type ViewScreenProps = {
  title?: string;
  coverImage?: string;
  listBreadcrumb?: BreadCrumbsModel[];
  children: JSX.Element;
};

const ViewScreen = (props: ViewScreenProps) => {
  useEffect(() => {
    const handleLocationChange = () => {
      // Load lại trang
      window.location.reload();
      // Cuộn lên đầu trang
      window.scrollTo(0, 0);
    };
    // Đăng ký sự kiện khi đường dẫn URL thay đổi
    window.addEventListener("popstate", handleLocationChange);
    return () => {
      // Hủy đăng ký sự kiện khi component unmount
      window.removeEventListener("popstate", handleLocationChange);
    };
  }); // [] đảm bảo useEffect chỉ chạy một lần sau khi component mount

  return (
    <Box marginBottom={{ xs: 1, lg: 8 }}>
      {props.title && (
        <BreadcrumbsComponent
          title={props.title}
          coverImage={props.coverImage}
          listBreadcrumb={props.listBreadcrumb}
        />
      )}
      <Box marginInline={{ xs: 1, md: 1, lg: 15, xl: 20 }} minHeight={500}>
        {props.children}
      </Box>
    </Box>
  );
};

export default memo(ViewScreen);
