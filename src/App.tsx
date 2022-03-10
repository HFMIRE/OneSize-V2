import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import Form from "./component/Form";
import ProductCard from "./component/ProductCard";
export const App = () => (
  <ChakraProvider theme={theme}>
    <Box
      // textAlign="center"
      // fontSize="xl"
      w="100%"
      h="100vh"
      position="relative"
      // bgColor="#F1F1F1"
    >
      <Form />
      <ProductCard />
    </Box>
  </ChakraProvider>
);
