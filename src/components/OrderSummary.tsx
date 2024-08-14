import { Box, Divider, Flex, Image, Link, Text } from "@chakra-ui/react";
import { useContext } from "react";
import AppContext from "./AppContext";
import FormContext from "./FormContext";

const OrderSummary = () => {
  const { activeStep, setActiveStep } = useContext(AppContext);
  const { sampleForm } = useContext(FormContext);

  const hiddenCardNum = sampleForm?.payment?.cardnumber?.slice(12);

  return (
    <Box boxShadow="xl" borderRadius="10" p="5" mb="7">
      {(activeStep === 3 || activeStep === 4) && (
        <>
          <Text as="b">Your order</Text>
          <Flex>
            <Box mr="5">
              <Image
                src="https://static.selfnamed.com/gallery-photos/JgMU3jlFCslk2NAzlOXXXGR1KbYdeAlEm6M.jpgX"
                fallbackSrc="https://via.placeholder.com/50"
              />
            </Box>
            <Text flex="1">
              <strong>1 X GEM OIL</strong> <br />
              Organic edition
            </Text>
          </Flex>
          <Divider my="5" />
        </>
      )}
      {(activeStep === 2 || activeStep === 3) && (
        <>
          <Text as="b">About you</Text>
          <Flex>
            <Text flex="1">
              {sampleForm?.details?.name} <br />
              {sampleForm?.details?.email}
            </Text>
            <Link onClick={() => setActiveStep(1)}>Edit</Link>
          </Flex>
          <Divider my="5" />
          <Text as="b">Shipping</Text>
          <Flex>
            <Text flex="1">
              {sampleForm?.shipping?.streetaddress}
              <br />
              {sampleForm?.shipping?.town}
              <br />
              {sampleForm?.shipping?.postcode}
            </Text>
            <Link onClick={() => setActiveStep(1)}>Edit</Link>
          </Flex>
        </>
      )}
      {activeStep === 3 && (
        <>
          <Divider my="5" />
          <Text as="b">Payment details</Text>
          <Flex>
            <Text flex="1">
              <strong>&pound;1.79</strong> - Visa ending ****{hiddenCardNum}
            </Text>
            <Link onClick={() => setActiveStep(2)}>Edit</Link>
          </Flex>
        </>
      )}
    </Box>
  );
};

export default OrderSummary;
