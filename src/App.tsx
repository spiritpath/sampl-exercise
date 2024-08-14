import { useState } from "react";
import { Container } from "@chakra-ui/react";
import "./App.css";
import StepperBox from "./components/StepperBox";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Header from "./components/Header";
import AppContext from "./components/AppContext";
import FormContext from "./components/FormContext";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [sampleForm, setSampleForm] = useState({});

  const productId = 1345;

  const renderSwitch = (param: number) => {
    switch (param) {
      case 0:
        return <Step1 />;
      case 1:
        return <Step2 />;
      case 2:
        return <Step3 />;
      case 3:
        return <Step4 />;
      case 4:
        return <Step5 />;
      default:
        return <Step1 />;
    }
  };

  return (
    <AppContext.Provider value={{ activeStep, setActiveStep }}>
      <FormContext.Provider value={{ sampleForm, setSampleForm }}>
        <Container maxW="md">
          <Header />
          <Hero />
          <StepperBox />
          {renderSwitch(activeStep)}
          <Footer />
        </Container>
      </FormContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
