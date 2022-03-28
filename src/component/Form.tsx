import React, { useState, useEffect } from "react";
import {
  Box,
  Select,
  Stack,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { ValuesProps } from "../interface.model";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const [formValue, setFormValue] = useState<ValuesProps | undefined>();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
const navigate = useNavigate()
  const arrayOfSize: number[] = [4, 6, 8, 10, 12, 14, 16, 18];
  const arrayOfPlusSize: number[] = [20, 22, 24, 26, 28, 30, 32];
  function onSubmit(values: any) {
    setFormValue(values);
    navigate("/display",  { replace: true });
  }
  useEffect(() => {
    if (formValue) {
      localStorage.setItem("form", JSON.stringify(formValue));
    }
  }, [formValue]);



  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={8} mx={"auto"} maxW={"xl"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Find your size
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
             choosing your size from the brand that fit you the best. 
            </Text>
          </Stack>
          <Box rounded={"lg"} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <FormControl id="brand">
                <FormLabel>Brand</FormLabel>
                <Select placeholder="Select option" {...register("brand")}>
                  <option value="ASOS">ASOS</option>
                  <option value="PLT">PLT</option>
                  <option value="BOOHOO">BOOHOO</option>
                  <option value="Missguided">Missguided</option>
                </Select>
              </FormControl>
              <FormErrorMessage>
                {errors.brand && errors.brand.message}
              </FormErrorMessage>
              <FormControl>
                <FormLabel>Size</FormLabel>
                <RadioGroup>
                  <Stack direction={["column", "row"]} spacing="13px">
                    {arrayOfSize.length > 0 &&
                      arrayOfSize?.map((size:number, idx) => {
                        return (
                          <Radio
                            p={1}
                            key={idx}
                            value={size}
                            colorScheme="purple"
                            {...register("size")}
                          >
                            {size}
                          </Radio>
                        );
                      })}
                  </Stack>
                 <Stack direction={["column", "row"]} spacing="10px">
                    {arrayOfPlusSize.length > 0 &&
                      arrayOfPlusSize?.map((plussize:number, idx) => {
                        return (
                          <Radio
                            p={2}
                            key={idx}
                            value={plussize}
                            colorScheme="purple"
                            {...register("plussize")}
                          >
                            {plussize}
                          </Radio>
                        );
                      })}
                  </Stack> 
                </RadioGroup>
                <FormErrorMessage>
                  {errors.plussize && errors.plussize.message}
                </FormErrorMessage>
              </FormControl>

              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"purple.600"}
                  color={"white"}
                  _hover={{
                    bg: "purple.300",
                  }}
                  isLoading={isSubmitting}
                  type="submit"
                >
                  Find your one size
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack> 
       </form>
    </Box>
  );
};

export default Form;
