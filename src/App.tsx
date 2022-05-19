import  React, {useState, useEffect} from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import Form from "./component/Form";
import ProductCard from "./component/ProductCard";
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";

export const App = () => {
  const [url, setUrl] = useState<string>('')
  useEffect(() => {
    const queryInfo = {active: true, lastFocusedWindow: true};

    chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
        const url1 = tabs[0].url;
        if (url1) {
        setUrl(url1);
        }
    });
}, []);
console.log(url)
  return (
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
}

