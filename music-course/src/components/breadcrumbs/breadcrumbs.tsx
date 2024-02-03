import CircleIcon from "@mui/icons-material/Circle";
import HomeIcon from "@mui/icons-material/Home";
import { Box, Breadcrumbs, Link } from "@mui/material";
import styled from "styled-components";
import { BreadCrumbsModel } from "../../models/bread-crumbs-model";
import { memo } from "react";

type BreadcrumbsProps = {
  title: string;
  coverImage?: string;
  listBreadcrumb?: BreadCrumbsModel[];
};

const BreadcrumbsComponent = (props: BreadcrumbsProps) => {
  return (
    <BreadcrumbsStyled $imageCover={props.coverImage}>
      {props.coverImage ? (
        <Box className="bread-crumbs-image e-con">
          <div className="bread-crumbs-content">
            <Box className="name-page">{props.title}</Box>
            <Breadcrumbs
              className="bread-crumbs"
              separator={<CircleIcon style={{ fontSize: "12px" }} />}
            >
              <Link className="bread-home" href="/">
                <HomeIcon sx={{ mr: 0.5 }} fontSize="small" />
                <span>Sun Music</span>
              </Link>
              <Link>
                <span> {props.title}</span>
              </Link>
            </Breadcrumbs>
          </div>
        </Box>
      ) : (
        <>
          <div className="bread-crumbs-not-image">
            <Breadcrumbs className="bread-crumbs">
              <Link className="bread-home" href="/">
                <HomeIcon sx={{ mr: 0.5 }} fontSize="small" />
                <span>Sun Music</span>
              </Link>
              {props.listBreadcrumb?.map((value, index) => {
                return (
                  <Link key={index} href={value.url}>
                    <span> {value.name}</span>
                  </Link>
                );
              })}
              <Link>
                <span> {props.title}</span>
              </Link>
            </Breadcrumbs>
            <Box className="name-page">{props.title}</Box>
          </div>
        </>
      )}
    </BreadcrumbsStyled>
  );
};

const BreadcrumbsStyled = styled.div<{ $imageCover?: string }>`
  div.bread-crumbs-image {
    margin-bottom: 20px;
    display: flex;
    min-height: 400px;
    flex-direction: column;
    justify-content: center;
    background-transition: 0.3s;
    overlay-opacity: 1;
    padding: 0px;
    width: 100%;
    height: auto;
    background-image: url(${(props) => props.$imageCover});
    background-position: center center;
    background-size: cover;
    .bread-crumbs-content {
      --container-max-width: 1140px;
      --widgets-spacing: 20px 20px;
      flex-direction: column;
      padding-block: 10px;
      margin: 0 auto;
      width: 100%;
      max-width: min(100%, var(--container-max-width, 1140px));
      height: 100%;
      gap: var(--widgets-spacing, 20px);
      align-items: initial;
      justify-content: initial;
      .name-page {
        color: #ffffff;
        font-size: 60px;
        font-weight: 900;
        text-transform: uppercase;
      }
      .bread-crumbs {
        color: #ffffff;
        a.MuiLink-root {
          display: flex;
          align-items: center;
          background: rgb(245, 245, 245);
          justify-content: center;
          border-radius: 16px;
          border: 0px;
          font-size: 0.8125rem;
          color: rgba(0, 0, 0, 0.87);
          text-decoration: none;
          transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
            box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          &:hover {
            background-color: rgb(230, 230, 230);
          }
          span {
            overflow: hidden;
            text-overflow: ellipsis;
            padding-left: 12px;
            padding-right: 12px;
            white-space: nowrap;
          }
          svg {
            margin-left: 5px;
            margin-right: -6px;
            color: rgb(97, 97, 97);
          }
        }
      }
    }
  }

  div.bread-crumbs-not-image {
    padding: 10px;
    margin-inline: 160px;
    margin-top: 20px;
    .name-page {
      margin-block: 20px;
      padding: 10px;
      background: rgb(245, 245, 245);
      font-size: 24px;
      font-weight: 600;
    }
    .bread-crumbs {
      a.MuiLink-root {
        display: flex;
        align-items: center;
        background: rgb(245, 245, 245);
        justify-content: center;
        border-radius: 16px;
        border: 0px;
        font-size: 0.8125rem;
        color: rgba(0, 0, 0, 0.87);
        text-decoration: none;
        transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        &:hover {
          background-color: rgb(230, 230, 230);
        }
        span {
          overflow: hidden;
          text-overflow: ellipsis;
          padding-left: 12px;
          padding-right: 12px;
          white-space: nowrap;
        }
        svg {
          margin-left: 5px;
          margin-right: -6px;
          color: rgb(97, 97, 97);
        }
      }
    }
  }
`;

export default memo(BreadcrumbsComponent);
