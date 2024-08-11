import { Box, Text } from "@chakra-ui/react";

const CopyBox = () => {
  return (
    <Box boxShadow="xl" borderRadius="10" p="5" mb="7">
      <Text fontWeight="bold" mb="2">
        The sample's on us, just cover the postage for only &pound;1.79
      </Text>
      <Text>
        This is some intro copy sub text. This is some intro copy sub text This
        is some intro copy sub text This is some intro copy sub text.
      </Text>
    </Box>
  );
};

export default CopyBox;
