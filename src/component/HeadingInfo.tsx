import { Box, Heading, Text, Stack, VStack } from "@chakra-ui/react";
import React from "react";

const HeadingInfo = () => {
  return (
    <>
      <Box textAlign="center" display="flex">
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 10, md: 14 }}
          direction={{ base: "column", md: "row" }}
        >
          <VStack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: "30%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "orange.200",
                  zIndex: -1,
                }}
              >
                Find your size once,
              </Text>
              <br />
              <Text as={"span"} color={"orange.400"}>
                use it everywhere!
              </Text>
            </Heading>
            <Box w="70%">
              <Text
                color={"gray.500"}
                fontWeight={300}
                fontSize={{ base: "sm", sm: "md", lg: "xl" }}
              >
                One Size is a fit assistant of your dream, allows to create,
                compare and find your size everytime no matter the brand. Even
                let you sync size and providing your accurate size. So no more
                return. Saving the hassle of ill-fitting clothes.
              </Text>
            </Box>
          </VStack>
        </Stack>
      </Box>
    </>
  );
};

export default HeadingInfo;
