import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import Form from "./component/Form";
import ProductCard from "./component/ProductCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Box w="100%" h="100vh" position="relative">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/display" element={<ProductCard />} />
        </Routes>
      </Box>
    </Router>
  </ChakraProvider>
);
