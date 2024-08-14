import { Box, Button, Checkbox, Flex, Text, VStack } from "@chakra-ui/react";
import styles from "./TermsSelect.module.css";
import { useContext, useState } from "react";
import AppContext from "../state-management/AppContext";
import FormContext from "../state-management/FormContext";

const terms = [
  {
    copy: "Terms terms terms terms terms terms Terms terms terms terms terms terms",
    id: "1",
  },
  {
    copy: "Terms terms terms terms terms terms Terms terms terms terms terms terms",
    id: "2",
  },
  {
    copy: "Terms terms terms terms terms terms Terms terms terms terms terms terms",
    id: "3",
  },
  {
    copy: "Terms terms terms terms terms terms Terms terms terms terms terms terms",
    id: "4",
  },
];

let termsSelected: string[] = [];

const TermsSelect = () => {
  const { setActiveStep } = useContext(AppContext);
  const { sampleForm, setSampleForm } = useContext(FormContext);
  const [allTermsAccepted, setAllTermsAccepted] = useState(false);

  const toggleButton = (termsAccepted: boolean) => {
    termsAccepted ? setAllTermsAccepted(true) : setAllTermsAccepted(false);
  };

  const handleTermSelect = (isChecked: boolean, termId: string) => {
    if (isChecked) {
      termsSelected = [...termsSelected, termId];
      toggleButton(termsSelected.length === terms.length);
    } else {
      const filteredTerms = termsSelected.filter((item) => item !== termId);
      termsSelected = [...filteredTerms];
      toggleButton(termsSelected.length === terms.length);
    }
  };

  // console.log("form onload", sampleForm);

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
            onChange={(e) => {
              handleTermSelect(e.target.checked, term.id);
            }}
          >
            {term.copy}
          </Checkbox>
        ))}
      </VStack>
      <Button
        onClick={() => handleNextPage()}
        isDisabled={!allTermsAccepted}
        colorScheme="blue"
        w="100%"
        borderTopRadius="0"
      >
        Confirm order
      </Button>
    </Box>
  );
};

export default TermsSelect;
