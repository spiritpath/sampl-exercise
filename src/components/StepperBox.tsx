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

const steps = [0, 1, 2, 3, 4];

const StepperBox = () => {
  const { activeStep } = useContext(AppContext);

  return (
    <Box position="relative" mb="7">
      <Stepper size="sm" index={activeStep} gap="0">
        {steps.map((index) => (
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
