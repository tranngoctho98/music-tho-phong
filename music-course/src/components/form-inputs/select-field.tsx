import { Controller, UseControllerProps } from "react-hook-form";
import styled from "styled-components";

// COMPONENTS
import NoControlSelectField, {
  SelectFieldProps as NoControlSelectFieldProps,
} from "../inputs/select-field";

export type SelectFieldProps = Omit<
  NoControlSelectFieldProps,
  "onBlur" | "onFocus"
> & {
  name: string;
  control?: UseControllerProps["control"];
  defaultValue?: string | number | boolean;
  messageErr?: string;
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
  control,
  required,
  defaultValue,
  name,
  inputProps,
  ...rest
}: SelectFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value = "" }, fieldState: { error } }) => {
        return (
          <StyledSelectField
            value={value || ""}
            onChange={onChange}
            error={!!error}
            helperText={error?.message}
            required={required}
            MenuProps={MenuProps}
            inputProps={{
              ...inputProps,
              "data-testid": name,
            }}
            {...rest}
          />
        );
      }}
      rules={{ required }}
    />
  );
};

const StyledSelectField = styled(NoControlSelectField)`
  .MuiOutlinedInput-input {
    &::placeholder {
      font-size: 13px;
    }
  }
`;

export default SelectField;
