import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import AppContext from "./AppContext";
import FormContext from "./FormContext";
import { useForm } from "react-hook-form";

const DetailsForm = () => {
  const {
    register,
    formState: { errors, isValid },
    getValues,
  } = useForm({ mode: "all" });

  const [validPostcode, setValidPostcode] = useState(false);

  const validatePostcode = async (thisPostCode: string) => {
    let encodedValue = encodeURI(thisPostCode);
    try {
      const data = await (
        await fetch(
          `https://api.postcodes.io/postcodes/${encodedValue}/validate`,
          {
            method: "GET",
          }
        )
      ).json();
      setValidPostcode(data.result);
    } catch (err) {
      console.log("error");
    }
  };

  const { setActiveStep } = useContext(AppContext);
  const { sampleForm, setSampleForm } = useContext(FormContext);

  // console.log("does data already exist", sampleForm);

  const handleNextPage = () => {
    const formValues = getValues();
    setSampleForm({
      ...sampleForm,
      details: {
        name: formValues.fullname,
        email: formValues.email,
      },
      shipping: {
        streetaddress: formValues.streetaddress,
        town: formValues.town,
        postcode: formValues.postcode,
      },
    });

    setActiveStep(2);
  };

  return (
    <Box boxShadow="xl" borderRadius="10" mb="7">
      <Text p="5">
        This is some intro copy sub text. This is some intro copy sub text This
        is some intro copy sub text This is some intro copy sub text.
      </Text>
      <Text fontWeight="bold" p="5" pt="0">
        About you
      </Text>
      <Box mx="5">
        <form>
          <FormControl mb="3" isRequired>
            <FormLabel display="none">Full name</FormLabel>
            <Input
              {...register("fullname", {
                required: true,
              })}
              id="fullname"
              placeholder="Full name"
              type="text"
            />
            {errors.fullname?.type === "required" && <p>Required</p>}
            {errors.fullname?.type === "pattern" && <p>Letters only</p>}
          </FormControl>
          <FormControl mb="3" isRequired>
            <FormLabel display="none">Email address</FormLabel>
            <Input
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              id="email"
              type="email"
              placeholder="Email address"
            />
            {errors.email?.type === "required" && <p>Required</p>}
            {errors.email?.type === "pattern" && <p>Invalid email</p>}
          </FormControl>
          <FormControl mb="3" isRequired>
            <FormLabel display="none">Street address</FormLabel>
            <Input
              {...register("streetaddress", { required: true })}
              id="streetaddress"
              placeholder="Street address"
            />
            {errors.streetaddress?.type === "required" && <p>Required</p>}
          </FormControl>
          <FormControl mb="3" isRequired>
            <FormLabel display="none">Town / city</FormLabel>
            <Input
              {...register("town", { required: true })}
              id="town"
              placeholder="Town / city"
            />
            {errors.town?.type === "required" && <p>Required</p>}
          </FormControl>
          <FormControl mb="3" isRequired>
            <FormLabel display="none">Postcode</FormLabel>
            <Input
              {...register("postcode", {
                required: true,
                validate: () => validPostcode,
              })}
              id="postcode"
              placeholder="Postcode"
              onChange={(e) => validatePostcode(e.target.value)}
            />
            {errors.postcode?.type === "required" && <p>Required</p>}
          </FormControl>
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
  );
};

export default DetailsForm;
