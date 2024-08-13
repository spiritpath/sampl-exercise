import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import AppContext from "./AppContext";
import FormContext from "./FormContext";

const DetailsForm = () => {
  const { setActiveStep } = useContext(AppContext);
  const { sampleForm, setSampleForm } = useContext(FormContext);

  console.log("form onload", sampleForm);

  const handleNextPage = () => {
    setSampleForm({
      ...sampleForm,
      details: {
        name: "John Smith",
        email: "john@gmail.com",
      },
      shipping: {
        streetaddress: "1 Letsbe Avenue",
        town: "London",
        postcode: "NW3 2JJ",
      },
    });

    setActiveStep(2);
  };

  return (
    <Box boxShadow="xl" borderRadius="10" mb="7">
      <Text p="5">
        This is some intro copy sub text. This is some intro copy sub text This
        is some intro copy sub text This is some intro copy sub text.
      </Text>
      <Text fontWeight="bold" p="5" pt="0">
        About you
      </Text>
      <Box mx="5">
        <FormControl mb="3" isRequired>
          <FormLabel display="none">Full name</FormLabel>
          <Input id="fullname" placeholder="Full name" />
        </FormControl>
        <FormControl mb="3" isRequired>
          <FormLabel display="none">Email address</FormLabel>
          <Input id="email" type="email" placeholder="Email address" />
        </FormControl>
        <FormControl mb="3" isRequired>
          <FormLabel display="none">Street address</FormLabel>
          <Input id="streetaddress" placeholder="Street address" />
        </FormControl>
        <FormControl mb="3" isRequired>
          <FormLabel display="none">Town / city</FormLabel>
          <Input id="town" placeholder="Town / city" />
        </FormControl>
        <FormControl mb="3" isRequired>
          <FormLabel display="none">Postcode</FormLabel>
          <Input id="postcode" placeholder="Postcode" />
        </FormControl>
      </Box>
      <Button
        onClick={() => handleNextPage()}
        // isDisabled={true}
        colorScheme="blue"
        w="100%"
        borderTopRadius="0"
      >
        Continue
      </Button>
    </Box>
  );
};

export default DetailsForm;
