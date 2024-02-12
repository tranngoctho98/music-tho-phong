import AddCircleIcon from "@mui/icons-material/AddCircle";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React, { useState } from "react";
import dataMenu from "../../assets/data-jsons/menu.json";
import { MenuCompnentProps } from "../header/menu";
import MenuBottom from "./menu-bottom";

const BottomNavigationComponent = () => {
  const [value, setValue] = useState(0);
  const [data, setData] = useState<MenuCompnentProps | undefined>();
  const [anchorEl, setAnchorEl] = React.useState<null | Element>(null);

  const handleClickListItem = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: number
  ) => {
    setValue(newValue);
    if (newValue === 0) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
      if (newValue === 1) {
        setData(dataMenu.find((item) => item.id === 2));
      }
      if (newValue === 2) {
        setData(dataMenu.find((item) => item.id === 3));
      }
      if (newValue === 3) {
        const listMenu = dataMenu.filter((item) =>
          [4, 5, 6, 7].includes(item.id)
        );
        setData({
          id: 10,
          nameMenu: "THÔNG TIN KHÁC",
          to: "",
          childMenu: listMenu,
        });
      }
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={handleClickListItem}
        >
          <BottomNavigationAction
            label="Trang chủ"
            icon={<HomeIcon />}
            href="/"
          />
          <BottomNavigationAction label="Khóa học" icon={<SchoolIcon />} />
          <BottomNavigationAction label="Nhạc cụ" icon={<ShoppingCartIcon />} />
          <BottomNavigationAction label="Khác" icon={<AddCircleIcon />} />
        </BottomNavigation>
      </Paper>
      {data && (
        <MenuBottom
          dataMenu={data}
          anchorEl={anchorEl}
          handleClose={handleClose}
        />
      )}
    </>
  );
};

export default BottomNavigationComponent;
