import React from "react";
import { useFormikContext } from "formik";

import Button, { ButtonProps } from "../Button";

interface SubmitButtonProps extends Omit<ButtonProps, "onPress"> {
  onPress?: () => void;
}

const SubmitButton = ({ label, ...props }: SubmitButtonProps) => {
  const { handleSubmit } = useFormikContext();
  return <Button label={label} {...props} onPress={handleSubmit} />;
};

export default SubmitButton;
