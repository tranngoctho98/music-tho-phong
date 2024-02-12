import styled from "styled-components";
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material/TextField";
import React, { ChangeEvent, useCallback } from "react";
import { Any } from "../../constants/types";

export type TextFieldProps = MuiTextFieldProps;
export interface InputProps {
  maxLength?: number;
  typeInput?: string;
  minInput?: number;
  maxInput?: number;
  endAdornment?: React.ReactNode;
  inputLabelProps?: object;
  isNumber?: boolean;
}

const TextField = ({
  variant = "outlined",
  maxLength,
  typeInput = "text",
  endAdornment,
  inputLabelProps,
  onChange,
  isNumber,
  ...restProps
}: TextFieldProps & InputProps) => {
  const onChangeInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!isNumber || !event.target.value) {
        onChange?.(event);
        return;
      }
      const regNumber = /^\d+$/;
      if (!regNumber.test(event.target.value)) {
        event.preventDefault();
        return;
      }
      onChange?.(event);
    },
    [isNumber, onChange]
  );

  return (
    <StyledTextField
      inputProps={{
        maxLength,
        type: typeInput,
      }}
      InputProps={{
        endAdornment,
      }}
      onChange={onChangeInput}
      InputLabelProps={inputLabelProps}
      variant={variant}
      {...restProps}
    />
  );
};

const StyledTextField = styled<Any>(MuiTextField)`
  label {
    font-size: 13px;
    color: #aca8b7;
    &.MuiInputLabel-outlined {
      top: -10px;
    }
    &.MuiInputLabel-shrink {
      top: 0;
      color: #aca8b7;
    }
  }

  fieldset {
    border-width: 1px !important;
    border-radius: 5px;
  }

  .MuiOutlinedInput-input,
  .MuiInputBase-adornedEnd .MuiButtonBase-root.MuiIconButton-root {
    padding: 3px 5px;
  }
  .MuiOutlinedInput-root .MuiOutlinedInput-input {
    height: 34px;
    padding: 0 10px;
    border: 1px solid #eaeaea;
    background: #fff;
  }

  .MuiOutlinedInput-root.MuiInputBase-multiline {
    padding: 0px;
  }

  .MuiFormHelperText-root {
    margin-left: 0;
  }

  .Mui-disabled {
    background-color: rgb(220 220 220 / 20%) !important;
    cursor: text;
  }
`;

export default TextField;
