import { Box, Button, Checkbox, Flex, Text, VStack } from "@chakra-ui/react";
import styles from "./VitaminSelect.module.css";
import { useContext, useState } from "react";
import AppContext from "../state-management/AppContext";
import FormContext from "../state-management/FormContext";
import { useParams } from "react-router-dom";

const vitamins = [
  { name: "Multi-vitamin", id: "1" },
  { name: "Vitamin D", id: "2" },
  { name: "Collagen", id: "3" },
  { name: "Omega 3", id: "4" },
];

let vitaminBasket: string[] = [];

const VitaminSelect = () => {
  const { setActiveStep } = useContext(AppContext);
  const { setSampleForm } = useContext(FormContext);
  const [vitaminSelected, setVitaminSelected] = useState(false);

  const params = useParams();
  // WITH THE SAMPLE ID IN THE URL WE CAN GET PRODUCT SPECIFIC DATA

  const toggleButton = (selectedVitaminsExist: boolean) => {
    selectedVitaminsExist
      ? setVitaminSelected(true)
      : setVitaminSelected(false);
  };

  const handleVitaminSelect = (isChecked: boolean, vitaminId: string) => {
    if (isChecked) {
      vitaminBasket = [...vitaminBasket, vitaminId];
      toggleButton(vitaminBasket.length > 0);
    } else {
      const filteredVitamins = vitaminBasket.filter(
        (item) => item !== vitaminId
      );
      vitaminBasket = [...filteredVitamins];
      toggleButton(vitaminBasket.length > 0);
    }
  };

  const handleNextPage = (basket: string[]) => {
    setSampleForm({
      productId: params.sampleID,
      vitamins: [...basket],
    });
    setActiveStep(1);
  };

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
            key={vitamin.id}
            onChange={(e) => {
              handleVitaminSelect(e.target.checked, vitamin.id);
            }}
          >
            {vitamin.name}
          </Checkbox>
        ))}
      </VStack>
      <Button
        colorScheme="blue"
        w="100%"
        borderTopRadius="0"
        isDisabled={!vitaminSelected}
        onClick={() => {
          handleNextPage(vitaminBasket);
        }}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default VitaminSelect;
