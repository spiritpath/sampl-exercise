import { useState } from "react";
import { Box, Container } from "@chakra-ui/react";
import "./App.css";
import StepperBox from "./components/StepperBox";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Header from "./components/Header";
import VitaminSelect from "./components/VitaminSelect";
import CopyBox from "./components/CopyBox";
import DetailsForm from "./components/DetailsForm";
import OrderSummary from "./components/OrderSummary";
import TermsSelect from "./components/TermsSelect";
import AppContext from "./components/AppContext";

function App() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <AppContext.Provider value={{ activeStep, setActiveStep }}>
      <Container maxW="md">
        <Header />
        <Hero />
        <StepperBox />
        <CopyBox />
        <VitaminSelect />
        <DetailsForm />
        <OrderSummary />
        <TermsSelect />
        <Footer />
      </Container>
    </AppContext.Provider>
  );
}

export default App;
