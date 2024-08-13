import { Box, Button, Checkbox, Flex, Text, VStack } from "@chakra-ui/react";
import styles from "./TermsSelect.module.css";
import { useContext } from "react";
import AppContext from "./AppContext";
import FormContext from "./FormContext";

const terms = [
  {
    copy: "Terms terms terms terms terms terms Terms terms terms terms terms terms",
    id: 1,
  },
  {
    copy: "Terms terms terms terms terms terms Terms terms terms terms terms terms",
    id: 2,
  },
  {
    copy: "Terms terms terms terms terms terms Terms terms terms terms terms terms",
    id: 3,
  },
  {
    copy: "Terms terms terms terms terms terms Terms terms terms terms terms terms",
    id: 4,
  },
];

const VitaminSelect = () => {
  const { setActiveStep } = useContext(AppContext);
  const { sampleForm, setSampleForm } = useContext(FormContext);

  console.log("form onload", sampleForm);

  const handleNextPage = () => {
    setSampleForm({
      ...sampleForm,
      termsAccepted: true,
    });

    setActiveStep(4);
  };

  return (
    <Box boxShadow="xl" borderRadius="10" pt="5" mb="7">
      <Flex p="5" pb="0">
        <Box fontWeight="bold" w="50%">
          Terms and conditions
        </Box>
        <Text flex="1" textAlign="right" fontSize="sm">
          Required
        </Text>
      </Flex>
      <VStack spacing="0" p="5" alignItems="stretch">
        {terms.map((term) => (
          <Checkbox
            className={styles.customCheckbox}
            iconColor="blue.50"
            p="3"
            flexDirection="row-reverse"
            justifyContent="space-between"
            value={term.id}
            key={term.id}
          >
            {term.copy}
          </Checkbox>
        ))}
      </VStack>
      <Button
        onClick={() => handleNextPage()}
        colorScheme="blue"
        w="100%"
        borderTopRadius="0"
      >
        Confirm order
      </Button>
    </Box>
  );
};

export default VitaminSelect;
