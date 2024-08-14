import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import FormContext from "../state-management/FormContext";
import { useContext } from "react";

const ThankYou = () => {
  const { sampleForm } = useContext(FormContext);

  console.log("form payload", sampleForm);

  return (
    <Box boxShadow="xl" borderRadius="10" p="5" mb="7">
      <Heading size="md" my="3">
        Thank you!
      </Heading>
      <Text fontWeight="bold">
        Thanks for your request, it's being reviewed
      </Text>
      <Text>Keep an eye on your inbox for further updates</Text>
      <Divider my="5" />
      <Text>You will not be charged until your sample request is approved</Text>
    </Box>
  );
};

export default ThankYou;
