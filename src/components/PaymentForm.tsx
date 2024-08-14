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
import { useForm } from "react-hook-form";

const PaymentForm = () => {
  const { setActiveStep } = useContext(AppContext);
  const { sampleForm, setSampleForm } = useContext(FormContext);

  const {
    register,
    formState: { errors, isValid },
    getValues,
  } = useForm({ mode: "all" });

  // console.log("form onload", sampleForm);
  // console.log("form values", getValues());
  // console.log("form isvalid", isValid);

  const handleNextPage = () => {
    const formValues = getValues();
    setSampleForm({
      ...sampleForm,
      payment: {
        cardnumber: formValues.cardNumber,
        cardExp: formValues.cardExpiry,
        cardCsv: formValues.cardCsv,
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
          <form>
            <FormControl mb="3" isRequired>
              <FormLabel display="none">Card number</FormLabel>
              <Input
                {...register("cardNumber", {
                  required: true,
                  pattern: {
                    value: /^(?:\d[ -]*?){13,16}$/,
                    message: "Invalid card number",
                  },
                })}
                id="cardNumber"
                placeholder="1234 1234 1234 1234 1234"
              />
              {errors.cardNumber?.type === "required" && <p>Required</p>}
              {errors.cardNumber?.type === "pattern" && (
                <p>Invalid number format</p>
              )}
            </FormControl>
            <Flex>
              <FormControl mb="3" mr="3" isRequired>
                <FormLabel display="none">Expiry</FormLabel>
                <Input
                  {...register("cardExpiry", {
                    required: true,
                    pattern: {
                      value: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
                      message: "Invalid date format",
                    },
                  })}
                  id="cardExpiry"
                  placeholder="MM/YY"
                />
                {errors.cardExpiry?.type === "required" && <p>Required</p>}
                {errors.cardExpiry?.type === "pattern" && (
                  <p>Invalid date format</p>
                )}
              </FormControl>
              <FormControl mb="3" isRequired>
                <FormLabel display="none">CSV</FormLabel>
                <Input
                  {...register("cardCsv", {
                    required: true,
                    maxLength: 3,
                    minLength: 3,
                  })}
                  id="cardCsv"
                  placeholder="CSV"
                />
                {errors.cardCsv?.type === "required" && <p>Required</p>}
                {errors.cardCsv?.type === "maxLength" && <p>3 chars max</p>}
                {errors.cardCsv?.type === "minLength" && <p>3 chars min</p>}
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
          </form>
        </Box>
        <Button
          onClick={() => handleNextPage()}
          isDisabled={!isValid}
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
