import { Box, Divider, Flex, Image, Link, Text } from "@chakra-ui/react";

const OrderSummary = () => {
  return (
    <Box boxShadow="xl" borderRadius="10" p="5" mb="7">
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
      <Text as="b">About you</Text>
      <Flex>
        <Text flex="1">
          John Smith <br />
          jonsmith@someemail.com
        </Text>
        <Link>Edit</Link>
      </Flex>
      <Divider my="5" />
      <Text as="b">Shipping address</Text>
      <Flex>
        <Text flex="1">
          1 Apple Way
          <br />
          Brighton
          <br />
          BN1 4NX
        </Text>
        <Link>Edit</Link>
      </Flex>
      <Divider my="5" />
      <Text as="b">Payment details</Text>
      <Flex>
        <Text flex="1">
          <strong>&pound;1.79</strong> - Visa ending ****1234
        </Text>
        <Link>Edit</Link>
      </Flex>
    </Box>
  );
};

export default OrderSummary;
