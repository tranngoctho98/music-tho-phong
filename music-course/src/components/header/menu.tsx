import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Tooltip, TooltipProps, tooltipClasses } from "@mui/material";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import styledComponent from "styled-components";

interface MenuCompnentProps {
  id: number;
  nameMenu: string;
  to: string;
  childMenu?: MenuCompnentProps[];
}

const MenuTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    // maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

const MenuComponent = (p: MenuCompnentProps) => {
  const navigate = useNavigate();

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
                  onClick={() => navigate(p.to + "/" + menu.to)}
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
        <Button className="button-name" onClick={() => navigate(p.to)}>
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
