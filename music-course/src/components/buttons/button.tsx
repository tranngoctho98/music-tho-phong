import MuiButton, { ButtonProps } from "@mui/material/Button";
import styled from "styled-components";

const Button = (props: ButtonProps) => {
  return (
    <ButtonStyled>
      <MuiButton {...props}></MuiButton>
    </ButtonStyled>
  );
};

const ButtonStyled = styled.div`
  .MuiButton-root {
    color: #fff;
    background-color: #1e73be;
    text-transform: none;
  }
`;

export default Button;
