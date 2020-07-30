import React, { ReactNode } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

interface FormProps {
  children: ReactNode;
  initialValues: object;
  validationSchema: Yup.ObjectSchema;
  onSubmit: (values: object) => void;
}

const Form = ({
  children,
  initialValues,
  validationSchema,
  onSubmit,
}: FormProps) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default Form;
