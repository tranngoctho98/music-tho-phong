import FormControl, { FormControlProps } from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent, SelectProps } from "@mui/material/Select";
import { useCallback, useState, useLayoutEffect } from "react";
import styled from "styled-components";
// ICONS
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { Any, SelectOption } from "../../constants/types";
// CONSTANTS

export type SelectFieldProps = Omit<SelectProps, "onBlur" | "onFocus"> & {
  options?: SelectOption[];
  fullWidth?: FormControlProps["fullWidth"];
  helperText?: string;
  noneLabel?: string;
  noneValue?: 0 | string;
  displayNoneValue?: boolean;
  required?: boolean;
  iconClear?: boolean;
  placeholder?: string;
  onBlur?: (value?: string) => void;
  onFocus?: (value?: string) => void;
};

const ITEM_HEIGHT = 36;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 8 + ITEM_PADDING_TOP * 2,
    },
  },
};

const SelectField = ({
  id,
  label,
  options,
  fullWidth,
  helperText,
  noneLabel,
  noneValue = "",
  displayNoneValue = false,
  displayEmpty,
  error,
  disabled,
  required,
  iconClear = false,
  placeholder,
  onChange,
  onBlur,
  onFocus,
  value: valueProp,
  ...restProps
}: SelectFieldProps) => {
  const [score, setScore] = useState<string>("");

  useLayoutEffect(() => {
    if (valueProp === undefined) {
      setScore("");
      return;
    }
    if (typeof valueProp === "string" || typeof valueProp === "number") {
      setScore(valueProp + "");
    }
  }, [valueProp]);

  const handleChange = (
    event: SelectChangeEvent<Any>,
    child: React.ReactNode
  ) => {
    setScore(event.target.value);
    onBlur?.(event.target.value);
    onChange?.(event, child);
  };

  const handleOpen = useCallback(() => {
    onFocus?.(score);
  }, [onFocus, score]);

  return (
    <FormControlStyled
      fullWidth={fullWidth}
      focused={displayEmpty ? true : undefined}
      score={score}
    >
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        className="test"
        id={id}
        label={label}
        disabled={disabled}
        IconComponent={ExpandMoreOutlinedIcon}
        error={error}
        value={score}
        displayEmpty={displayEmpty}
        onChange={handleChange}
        onOpen={handleOpen}
        MenuProps={MenuProps}
        {...restProps}
      >
        {displayNoneValue && (
          <MenuItem value={noneValue}>
            {/* <em>{noneLabel}</em> */}
            <span>&nbsp;</span>
          </MenuItem>
        )}
        {placeholder && (
          <MenuItem value={noneValue} disabled>
            <span>{placeholder}</span>
          </MenuItem>
        )}
        {options
          ? options.map(
              ({ value, label: optionLabel, disabled: itemDisabled }) => (
                <MenuItem key={value} value={value} disabled={itemDisabled}>
                  {optionLabel ?? value}
                </MenuItem>
              )
            )
          : null}
      </Select>
      {helperText && (
        <FormHelperText error={error}>{helperText}</FormHelperText>
      )}
    </FormControlStyled>
  );
};

const FormControlStyled = styled<Any>(FormControl)`
  && {
    .MuiOutlinedInput-root .MuiOutlinedInput-input {
      height: 34px;
      padding: 0 10px;
      border: 1px solid #eaeaea;
      background: #fff;
    }
    .MuiOutlinedInput-input {
      min-width: 94%;
      width: 10px;
      display: flex;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      align-items: center;
    }

    fieldset {
      border-width: 1px !important;
    }

    .Mui-disabled {
      background-color: rgb(220 220 220 / 20%) !important;
    }

    .MuiFormHelperText-root {
      margin-left: 0;
    }
  }
`;

export default SelectField;
