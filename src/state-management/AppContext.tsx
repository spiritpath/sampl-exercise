import React from "react";

interface AppContextType {
  activeStep: number;
  setActiveStep: (activeStep: number) => void;
}

const AppContext = React.createContext<AppContextType>({} as AppContextType);

export default AppContext;
