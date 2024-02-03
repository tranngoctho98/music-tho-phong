import { Checkbox, CheckboxProps, FormControlLabel } from "@mui/material";

interface CheckBoxFormProps {
  label?: string;
  propsCheckbox?: CheckboxProps;
}

const CheckBox = (props: CheckBoxFormProps) => {
  return (
    <>
      <FormControlLabel
        label={props.label}
        control={<Checkbox {...props.propsCheckbox} />}
      />
    </>
  );
};

export default CheckBox;
