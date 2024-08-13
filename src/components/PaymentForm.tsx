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
  Tbody,
  Td,
  Text,
  Th,
  Tr,
} from "@chakra-ui/react";
import { useContext } from "react";
import AppContext from "./AppContext";
import FormContext from "./FormContext";

const PaymentForm = () => {
  const { setActiveStep } = useContext(AppContext);
  const { sampleForm, setSampleForm } = useContext(FormContext);

  console.log("form onload", sampleForm);

  const handleNextPage = () => {
    setSampleForm({
      ...sampleForm,
      payment: {
        cardnumber: "12341231412341234",
        cardExp: "01/25",
        cardCsv: "123",
      },
    });

    setActiveStep(3);
  };

  return (
    <>
      <Box boxShadow="xl" borderRadius="10" mb="7">
        <Text fontWeight="bold" p="5" pt="0">
          Payment details
        </Text>
        <Table>
          <Tbody>
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
          </Tbody>
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
            <Input id="cardnumber" placeholder="1234 1234 1234 1234 1234" />
          </FormControl>
          <Flex>
            <FormControl mb="3" mr="3" isRequired>
              <FormLabel display="none">Expiry</FormLabel>
              <Input id="cardExpiry" placeholder="MM/YY" />
            </FormControl>
            <FormControl mb="3" isRequired>
              <FormLabel display="none">CSV</FormLabel>
              <Input id="cardCsv" placeholder="CSV" />
            </FormControl>
          </Flex>
          <Flex justifyContent="space-around">
            <Checkbox id="billingAddress" py="3">
              Billing address is the same as shipping
            </Checkbox>
          </Flex>
          <Text fontWeight="bold" textAlign="center" py="3" mb="2">
            You will not be charged until your sample request is approved
          </Text>
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
    </>
  );
};

export default PaymentForm;
