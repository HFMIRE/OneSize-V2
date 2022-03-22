import React from "react";
import { Box, Text, VStack, Button } from "@chakra-ui/react";
const MeasurementMsg = () => {
  return (
    <Box>
      <Box textAlign="center">
        <VStack>
          <Text
            color={"gray.800"}
            fontSize={{ base: "xs", sm: "sm", lg: "md" }}
          >
            Sorry, We unable to match your Size. Try and add your measurement
            manually.
          </Text>
          <br />
          <Button colorScheme="orange" size="md">
            Add your Measurement
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default MeasurementMsg;
