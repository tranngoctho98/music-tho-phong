import { FormControl, OutlinedInput, OutlinedInputProps } from "@mui/material";
import styled from "styled-components";

const TextField = (props: OutlinedInputProps) => {
  return (
    <TextFieldStyled fullWidth>
      <OutlinedInput fullWidth size="small" {...props} />
    </TextFieldStyled>
  );
};

const TextFieldStyled = styled(FormControl)`
  .MuiOutlinedInput-root .MuiOutlinedInput-input {
    height: 34px;
    padding: 0 10px;
    border: 1px solid #eaeaea;
    background: #fff;
  }
  .MuiOutlinedInput-root.MuiInputBase-multiline {
    padding: 0;
  }
`;

export default TextField;
