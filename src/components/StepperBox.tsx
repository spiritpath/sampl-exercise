import {
  Box,
  Progress,
  Step,
  StepIcon,
  StepIndicator,
  Stepper,
  StepStatus,
  useSteps,
} from "@chakra-ui/react";

const steps = [
  { title: "First", description: "Select vitamins" },
  { title: "Second", description: "About you" },
  { title: "Third", description: "Payment method" },
  { title: "Fourth", description: "Confirm order" },
  { title: "Fifth", description: "Order submitted" },
];

const StepperBox = () => {
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  const activeStepText = steps[activeStep].description;

  const max = steps.length - 1;
  const progressPercent = (activeStep / max) * 100;

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
      <Progress
        value={progressPercent}
        position="absolute"
        height="3px"
        width="full"
        top="10px"
        zIndex={-1}
      />
    </Box>
  );
};

export default StepperBox;
