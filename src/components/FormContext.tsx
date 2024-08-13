import React from "react";

interface FormContextType {
  sampleForm: {};
  setSampleForm: (sampleForm: {}) => void;
}

const FormContext = React.createContext<FormContextType>({} as FormContextType);

export default FormContext;
