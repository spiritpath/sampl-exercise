import {
  AbsoluteCenter,
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Table,
  Td,
  Text,
  Th,
  Tr,
} from "@chakra-ui/react";
import { useContext } from "react";
import AppContext from "./AppContext";

const PaymentForm = () => {
  const { activeStep, setActiveStep } = useContext(AppContext);

  return (
    <>
      <Box boxShadow="xl" borderRadius="10" mb="7">
        <Text fontWeight="bold" p="5" pt="0">
          Payment details
        </Text>
        <Table>
          <Tr>
            <Th>Subtotal</Th>
            <Td color="teal.300">Free</Td>
          </Tr>
          <Tr>
            <Th>Tax</Th>
            <Td>-</Td>
          </Tr>
          <Tr>
            <Th>Shipping</Th>
            <Td>&pound;1.79</Td>
          </Tr>
          <Tr>
            <Th>Total</Th>
            <Td color="teal.300">&pound;1.79</Td>
          </Tr>
        </Table>
        <Box position="relative" padding="10">
          <Divider my="3" />
          <AbsoluteCenter bg="white" px="4">
            Pay using card
          </AbsoluteCenter>
        </Box>
        <Box mx="5">
          <FormControl mb="3" isRequired>
            <FormLabel display="none">Card number</FormLabel>
            <Input placeholder="1234 1234 1234 1234 1234" />
          </FormControl>
          <Flex>
            <FormControl mb="3" mr="3" isRequired>
              <FormLabel display="none">Expiry</FormLabel>
              <Input placeholder="MM/YY" />
            </FormControl>
            <FormControl mb="3" isRequired>
              <FormLabel display="none">CSV</FormLabel>
              <Input placeholder="CSV" />
            </FormControl>
          </Flex>
          <Flex justifyContent="space-around">
            <Checkbox py="3">Billing address is the same as shipping</Checkbox>
          </Flex>
          <Text fontWeight="bold" textAlign="center" py="3" mb="2">
            You will not be charged until your sample request is approved
          </Text>
        </Box>
        <Button
          onClick={() => setActiveStep(3)}
          // isDisabled={true}
          colorScheme="blue"
          w="100%"
          borderTopRadius="0"
        >
          Continue
        </Button>
      </Box>
    </>
  );
};

export default PaymentForm;
