import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

const DetailsForm = () => {
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
          <Input placeholder="Full name" />
        </FormControl>
        <FormControl mb="3" isRequired>
          <FormLabel display="none">Email address</FormLabel>
          <Input type="email" placeholder="Email address" />
        </FormControl>
        <FormControl mb="3" isRequired>
          <FormLabel display="none">Street address</FormLabel>
          <Input placeholder="Street address" />
        </FormControl>
        <FormControl mb="3" isRequired>
          <FormLabel display="none">Town / city</FormLabel>
          <Input placeholder="Town / city" />
        </FormControl>
        <FormControl mb="3" isRequired>
          <FormLabel display="none">Postcode</FormLabel>
          <Input placeholder="Postcode" />
        </FormControl>
      </Box>
      <Button isDisabled={true} colorScheme="blue" w="100%" borderTopRadius="0">
        Continue
      </Button>
    </Box>
  );
};

export default DetailsForm;
