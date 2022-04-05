import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import Form from "./component/Form";
import ProductCard from "./component/ProductCard";
import {  MemoryRouter as Router, Route, Switch } from "react-router-dom";
export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Box w="500px" h="500px" position="relative">
        <Switch>
          <Route exact path="/">
            <Form />
          </Route>
          <Route exact path="/display">
            <ProductCard />
          </Route>
        </Switch>
      </Box>
    </Router>
  </ChakraProvider>
);
