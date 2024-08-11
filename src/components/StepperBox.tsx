import {
  Box,
  Step,
  StepIcon,
  StepIndicator,
  Stepper,
  StepStatus,
} from "@chakra-ui/react";
import { useContext } from "react";
import AppContext from "./AppContext";

const steps = [
  { title: "First", description: "Select vitamins" },
  { title: "Second", description: "About you" },
  { title: "Third", description: "Payment method" },
  { title: "Fourth", description: "Confirm order" },
  { title: "Fifth", description: "Order submitted" },
];

const StepperBox = () => {
  const { activeStep } = useContext(AppContext);

  return (
    <Box position="relative" mb="7">
      <Stepper size="sm" index={activeStep} gap="0">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator bg="white">
              <StepStatus complete={<StepIcon />} />
            </StepIndicator>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default StepperBox;
