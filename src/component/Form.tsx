import React, { useState, useEffect } from "react";
import {
  Box,
  Input,
  Select,
  RadioGroup,
  Radio,
  Stack,
  Button,
  Heading,
  Text,
  HStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { ValuesProps } from "../interface.model";
const Form = () => {
  const [formValue, setFormValue] = useState<ValuesProps | undefined>();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const arrayOfSize = [4, 6, 8, 10, 12, 14, 16, 18];
  const arrayOfPlusSize = [20, 22, 24, 26, 28, 30, 32];
  function onSubmit(values: any) {
    console.log(values);
    setFormValue(values);
  }
  const handleClick = () => {
    if (formValue) {
      //   navigate("/display");
    }
  };
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
              to enjoy accurate sizing across different brands.
            </Text>
          </Stack>
          <Box rounded={"lg"} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel> Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="name"
                    {...register("name", {
                      required: "This is required",
                      minLength: {
                        value: 4,
                        message: "Minimum length should be 4",
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.name && errors.name.message}
                  </FormErrorMessage>
                </FormControl>
              </Box>

              <Box p={5}>
                <Tabs
                  variant="soft-rounded"
                  colorScheme="purple"
                  align="end"
                  isLazy
                >
                  <FormLabel> Height </FormLabel>
                  <TabList>
                    <Tab>Meter </Tab>
                    <Tab>Feet </Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <Box>
                        <FormControl id="height">
                          <HStack>
                            <Input
                              type="text"
                              placeholder="180"
                              {...register("heightm")}
                            />
                            <Text fontSize="md"> m</Text>
                          </HStack>
                          <FormErrorMessage>
                            {errors.heightm && errors.heightm.message}
                          </FormErrorMessage>
                        </FormControl>
                      </Box>
                    </TabPanel>
                    <TabPanel>
                      <Box>
                        <FormControl id="height">
                          <HStack>
                            <Input
                              type="text"
                              placeholder="5 "
                              {...register("heightft")}
                            />
                            <Text fontSize="md"> ft</Text>
                            <Input
                              type="text"
                              placeholder="10"
                              {...register("heightinch")}
                            />
                          </HStack>
                          <FormErrorMessage>
                            {errors.heightft && errors.heightft.message}
                          </FormErrorMessage>
                        </FormControl>
                      </Box>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
              <Box p={5}>
                <Tabs
                  variant="soft-rounded"
                  colorScheme="purple"
                  align="end"
                  isLazy
                >
                  <FormLabel>Weight</FormLabel>
                  <TabList>
                    <Tab>Kilogram</Tab>
                    <Tab>Pounds</Tab>
                  </TabList>

                  <TabPanels>
                    <TabPanel>
                      <Box>
                        <FormControl id="weight">
                          <HStack>
                            <Input
                              type="text"
                              placeholder="75"
                              {...register("weightkg")}
                            />
                            <Text fontSize="md"> kg</Text>
                          </HStack>
                          <FormErrorMessage>
                            {errors.weightkg && errors.weightkg.message}
                          </FormErrorMessage>
                        </FormControl>
                      </Box>
                    </TabPanel>
                    <TabPanel>
                      <Box>
                        <FormControl id="weight">
                          <HStack>
                            <Input
                              type="text"
                              placeholder="120"
                              {...register("weightlbs")}
                            />
                            <Text fontSize="md"> lbs</Text>
                          </HStack>
                          <FormErrorMessage>
                            {errors.weightlbs && errors.weightlbs.message}
                          </FormErrorMessage>
                        </FormControl>
                      </Box>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
              <FormControl id="brand">
                <FormLabel>Brand</FormLabel>
                <Select placeholder="Select option" {...register("brand")}>
                  <option value="ASOS">ASOS</option>
                  <option value="PLT">PLT</option>
                  <option value="BOOHOO">BOOHOO</option>
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
                      arrayOfSize?.map((size, idx) => {
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
                      arrayOfPlusSize?.map((plussize, idx) => {
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
                  onClick={handleClick}
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
