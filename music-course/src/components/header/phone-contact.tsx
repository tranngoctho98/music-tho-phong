import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  MenuProps,
  Typography,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import contactData from "../../assets/data-jsons/contact.json";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 10,
    minWidth: 180,
    ".MuiList-root": {
      padding: 0,
      ".MuiMenuItem-root": {
        paddingBlock: 0,
        fontSize: "16px",
      },
    },
  },
}));

const ContactComponent = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ContactStyled>
      <Button
        className="button-hotline"
        variant="outlined"
        startIcon={<PhoneInTalkIcon />}
        endIcon={<ExpandMoreIcon />}
        onClick={handleClickListItem}
      >
        Hotline
      </Button>
      <StyledMenu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        <Typography
          sx={{
            padding: "13px 17px",
            textAlign: "center",
            fontWeight: 600,
            background: "#e0ebfa",
            fontSize: "12px",
          }}
        >
          Giảng Viên Trần Thị Ánh Nhi
        </Typography>
        <MenuItem>
          <Typography
            className="heading-title"
            component="a"
            sx={{
              textDecoration: "none",
              color: "#b9131a",
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              padding: "10px",
            }}
            href={"tel:" + contactData.numberPhone}
          >
            <PhoneInTalkIcon sx={{ padding: "2px", marginRight: "20px" }} />
            <span>{contactData.numberPhone}</span>
          </Typography>
        </MenuItem>
        <Typography
          sx={{
            padding: "13px 17px",
            textAlign: "center",
            fontWeight: 600,
            background: "#e0ebfa",
            fontSize: "12px",
          }}
        >
          Giảng Viên Phan Văn Thọ
        </Typography>
        <MenuItem>
          <Typography
            className="heading-title"
            component="a"
            sx={{
              textDecoration: "none",
              color: "#b9131a",
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              padding: "10px",
            }}
            href={"tel:" + contactData.numberPhoneOther}
          >
            <PhoneInTalkIcon sx={{ padding: "2px", marginRight: "20px" }} />
            <span>{contactData.numberPhoneOther}</span>
          </Typography>
        </MenuItem>
      </StyledMenu>
    </ContactStyled>
  );
};

const ContactStyled = styled(Box)`
  && {
    .MuiButton-root.button-hotline {
      background: aliceblue;
      border-radius: 20px !important;
      .MuiButton-startIcon {
        background: #4e80d9;
        border-radius: 50%;
        padding: 2px;
        color: #fff;
      }
    }
    .heading-title {
      color: #fff;
      font-size: 14px;
      box-shadow: none;
      text-decoration: none;
    }
  }
`;

export default ContactComponent;
