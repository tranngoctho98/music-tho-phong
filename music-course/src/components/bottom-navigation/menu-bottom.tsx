import { Menu, MenuItem, MenuProps, Typography } from "@mui/material";
import React, { useCallback } from "react";
import styled from "styled-components";
import { MenuCompnentProps } from "../header/menu";
import { useNavigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const MenuBottomStyled = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 10,
    width: "100%",
    bottom: "60px",
    top: "auto !important",
    border: "1px solid #7aa6c8",
    ".MuiList-root": {
      padding: 0,
      ".MuiMenuItem-root": {
        padding: "0 20px",
        fontSize: "16px",
        borderBottom: "1px solid #dcd6d6",
        justifyContent: "space-between",
      },
    },
    ".top-title": {
      backgroundColor: "#187ae3",
      color: "#fff",
      textAlign: "center",
      padding: "18px 0px",
      fontSize: "14px",
      fontWeight: "600",
      lineHeight: "120%",
      letterSpacing: "-0.28px",
      textTransform: "uppercase",
    },
    ".item-menu": {
      padding: "12px 0",
      fontWeight: 600,
      textDecoration: "none",
      color: "#000",
    },
  },
}));

interface MenuBottomProps {
  dataMenu: MenuCompnentProps;
  anchorEl: Element | null;
  handleClose: () => void;
}

const MenuBottom = ({ dataMenu, anchorEl, handleClose }: MenuBottomProps) => {
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleOnClickTo = useCallback(
    (to1: string, to2?: string) => {
      handleClose();
      navigate(to1 + "/" + to2);
    },
    [handleClose, navigate]
  );

  const handleOnClickLink = useCallback(
    (link: string) => {
      handleClose();
      window.open(link, "_blank");
    },
    [handleClose]
  );

  return (
    <MenuBottomStyled
      id="lock-menu-bottom"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "lock-button",
        role: "listbox",
      }}
    >
      <Typography className="top-title">{dataMenu.nameMenu}</Typography>
      {dataMenu.childMenu?.map((value, index) => {
        return (
          <MenuItem
            key={index}
            onClick={() =>
              value.link
                ? handleOnClickLink(value.link)
                : handleOnClickTo(dataMenu.to, value.to)
            }
          >
            <span className="item-menu"> {value.nameMenu}</span>
            <ArrowRightAltIcon sx={{ color: "#878b8f" }} />
          </MenuItem>
        );
      })}
    </MenuBottomStyled>
  );
};

export default MenuBottom;
