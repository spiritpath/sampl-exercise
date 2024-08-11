import { Box, Button, Checkbox, Flex, Text, VStack } from "@chakra-ui/react";
import styles from "./VitaminSelect.module.css";

const vitamins = [
  { name: "Multi-vitamin", id: 1 },
  { name: "Vitamin D", id: 2 },
  { name: "Collagen", id: 3 },
  { name: "Omega 3", id: 4 },
];

const VitaminSelect = () => {
  return (
    <Box boxShadow="xl" borderRadius="10" pt="5" mb="7">
      <Flex p="5" pb="0">
        <Box fontWeight="bold" w="50%">
          What vitamins do you currently buy?
        </Box>
        <Text flex="1" textAlign="right" fontSize="sm">
          Required
        </Text>
      </Flex>
      <VStack spacing="0" p="5" alignItems="stretch">
        {vitamins.map((vitamin) => (
          <Checkbox
            className={styles.customCheckbox}
            iconColor="blue.50"
            p="3"
            flexDirection="row-reverse"
            justifyContent="space-between"
            value={vitamin.id}
          >
            {vitamin.name}
          </Checkbox>
        ))}
      </VStack>
      <Button colorScheme="blue" w="100%" borderTopRadius="0">
        Get Started
      </Button>
    </Box>
  );
};

export default VitaminSelect;
