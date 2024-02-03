import { Box } from "@mui/material";
import BreadcrumbsComponent from "../breadcrumbs/breadcrumbs";
import { BreadCrumbsModel } from "../../models/bread-crumbs-model";
import { memo } from "react";

type ViewScreenProps = {
  title?: string;
  coverImage?: string;
  listBreadcrumb?: BreadCrumbsModel[];
  children: JSX.Element;
};

const ViewScreen = (props: ViewScreenProps) => {
  return (
    <Box marginBottom={8}>
      {props.title && (
        <BreadcrumbsComponent
          title={props.title}
          coverImage={props.coverImage}
          listBreadcrumb={props.listBreadcrumb}
        />
      )}
      <Box marginInline={{ xs: 1, md: 20 }} minHeight={500}>
        {props.children}
      </Box>
    </Box>
  );
};

export default memo(ViewScreen);
