import React, { useState, useEffect } from "react";
import { Box, Select, Stack, Button, Heading, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { ValuesProps } from "../interface.model";
import { useHistory } from "react-router-dom";
const Form = () => {
  const [formValue, setFormValue] = useState<ValuesProps | undefined>();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  let history = useHistory();
  const [displaySize, setDisplaySize] = useState<boolean>(false)
  function handleClick() {
    setDisplaySize(!displaySize);
    localStorage.clear()
  }
  const arrayOfSize: number[] = [4, 6, 8, 10, 12, 14, 16, 18];
  const arrayOfPlusSize: number[] = [20, 22, 24, 26, 28, 30, 32];
  function onSubmit(values: any) {
    setFormValue(values);
    history.push("/display"); 
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
                <Select placeholder="Select Brand" {...register("brand")}>
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
                <Stack direction="row" spacing={4} align="center">
                  <Button colorScheme="purple" variant="outline" onClick={handleClick}>
                    Regular Size
                  </Button>
                  <Button colorScheme="purple" variant="outline"  onClick={handleClick}>
                    Plus Size
                  </Button>
                </Stack>
              </FormControl>
              {
                displaySize ? 
                <FormControl>
                <FormLabel>Regular Size</FormLabel>
                <Stack direction={["column", "row"]} spacing="13px">
                  <Select placeholder="Select Size" {...register("size")}>
                    {arrayOfSize.length > 0 &&
                      arrayOfSize?.map((size: number, idx) => {
                        return (
                          <option value={size} key={idx}>
                            {size}
                          </option>
                        );
                      })}
                    /
                  </Select>
                </Stack>
                <FormErrorMessage>
                  {errors.plussize && errors.plussize.message}
                </FormErrorMessage>
              </FormControl> 
              :
              <FormControl>
              <FormLabel>Plus Size</FormLabel>
              <Stack direction={["column", "row"]} spacing="10px">
                <Select
                  placeholder="Select Plus Size"
                  {...register("plussize")}
                >
                  {arrayOfPlusSize.length > 0 &&
                    arrayOfPlusSize?.map((plussize: number, idx) => {
                      return (
                        <option value={plussize} key={idx}>
                          {plussize}
                        </option>
                      );
                    })}
                </Select>
              </Stack>
            </FormControl>
              }
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
