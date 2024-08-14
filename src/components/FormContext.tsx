import React from "react";

interface FormContextType {
  sampleForm: {
    productId?: string;
    vitamins?: [string];
    details?: {
      name?: string;
      email?: string;
    };
    shipping?: {
      streetaddress?: string;
      town?: string;
      postcode?: string;
    };
    payment?: {
      cardnumber?: string;
      cardExp?: string;
      cardCsv?: string;
    };
    termsAccepted?: boolean;
  };
  setSampleForm: (sampleForm: {}) => void;
}

const FormContext = React.createContext<FormContextType>({} as FormContextType);

export default FormContext;
