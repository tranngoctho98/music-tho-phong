import { Controller, UseControllerProps } from "react-hook-form";
import styled from "styled-components";
import UncontrolledTextField, {
  TextFieldProps as UncontrolledTextFieldProps,
  InputProps,
} from "../inputs/text-field";
import { Any } from "../../constants/types";

// CONSTANT

export type TextFieldProps = UncontrolledTextFieldProps & {
  name: string;
  control?: UseControllerProps["control"]; //Control<Record<string, any>>;
  defaultValue?: string | number | boolean;
  messageErr?: string;
  height?: string;
  isNumber?: boolean;
} & InputProps;

export default function TextField({
  control,
  required,
  defaultValue,
  name,
  height,
  inputProps,
  ...rest
}: TextFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value = "" }, fieldState: { error } }) => (
        <UncontrolledTextFieldStyled
          value={value ?? ""}
          onChange={onChange}
          error={!!error}
          height={height}
          helperText={!!error ? error.message : null}
          inputProps={{
            ...inputProps,
            "data-testid": name,
          }}
          {...rest}
        />
      )}
      rules={{ required }}
    />
  );
}

const UncontrolledTextFieldStyled = styled<Any>(UncontrolledTextField)`
  .MuiOutlinedInput-input {
    height: ${(props) => (props.height ? props.height : "")};
    &::placeholder {
      font-size: 13px;
    }
  }
`;
