import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Tooltip, TooltipProps, tooltipClasses } from "@mui/material";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styledComponent from "styled-components";

export interface MenuCompnentProps {
  id: number;
  nameMenu: string;
  to: string;
  link?: string;
  childMenu?: MenuCompnentProps[];
}

const MenuTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#fff",
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
    minWidth: "350px",
    borderRadius: "30px",
    padding: "10px 20px",
    boxShadow: "0px 20px 60px -20px rgba(135, 135, 135, 0.25)",
    ".MuiMenuItem-root": {
      position: "relative",
      lineHeight: "1.3rem",
      borderBottom: "1px solid #ddd",
      paddingBottom: "15px",
      paddingTop: "18px",
      display: "block",
      width: "100%",
      fontWeight: "600",
      fontSize: "16px",
    },
    ".MuiMenuItem-root:hover": { background: "none", color: "rgb(27 127 204)" },
  },
}));

const MenuComponent = (p: MenuCompnentProps) => {
  const navigate = useNavigate();

  const handleOnClickTo = useCallback(
    (to1: string, to2?: string) => {
      if (to2) {
        navigate(to1 + "/" + to2);
      } else {
        navigate(to1);
      }
    },
    [navigate]
  );
  const handleOnClickLink = useCallback((link: string) => {
    window.open(link, "_blank");
  }, []);

  return (
    <MenuComponentStyled>
      {p.childMenu && (
        <MenuTooltip
          title={
            <>
              {p.childMenu?.map((menu) => (
                <MenuItem
                  key={menu.id}
                  disableRipple
                  onClick={() => handleOnClickTo(p.to, menu.to)}
                >
                  {menu.nameMenu}
                </MenuItem>
              ))}
            </>
          }
        >
          <Button
            className="button-name"
            onClick={() => navigate(p.to)}
            endIcon={<KeyboardArrowDownIcon />}
          >
            {p.nameMenu}
          </Button>
        </MenuTooltip>
      )}
      {!p.childMenu && (
        <Button
          className="button-name"
          onClick={() =>
            p.link ? handleOnClickLink(p.link) : handleOnClickTo(p.to)
          }
        >
          {p.nameMenu}
        </Button>
      )}
    </MenuComponentStyled>
  );
};

const MenuComponentStyled = styledComponent.div`
  .button-name { 
    color: #ffffff;   
    padding: 13px 20px;
    font-weight: 600;
  }
  .button-name:hover {
    color: #f2c189;
    fill: #f2c189;
    transform: scale(1.2);
    transition: .4s;
  }
`;

export default MenuComponent;
