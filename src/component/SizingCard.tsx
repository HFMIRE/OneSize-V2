import { Badge, Box, HStack, SimpleGrid, Avatar } from "@chakra-ui/react";
import React from "react";
import { UserFormDataProp } from "../interface.model";
import { SampleSize } from "../SampleSize";

const brandAvatar = [
  {
    Brand: "BOOHOO",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8-GLLw4pF1ZvVTkXvNz0kNrgicmeExxbtHA&usqp=CAU&auto=format&fit=crop&w=334&q=80",
  },
  {
    Brand: "PLT",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCTVy2TsQSPRvT16dx8IWpl5waoGkGiLSoZA&usqp=CAU&auto=format&fit=crop&w=334&q=80",
  },
  {
    Brand: "ASOS",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxlGJ60C5pRjLCxPsMV3L-4eUnEhOu7L78iw&usqp=CAU&auto=format&fit=crop&w=334&q=80",
  },
  {
    Brand: "Missguided", 
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThFzAzoUuJ_7DnJhDpeq0sF7QX4cT0A4A4NA&usqp=CAU&fit=crop&w=334&q=80"
  }
];
const SizingCard = ({ userFormData }: UserFormDataProp) => {
  let convertSize: any;

  let SizeNum: number = 0;

  if (userFormData.size) {
    //@ts-ignore
    SizeNum = parseInt(userFormData.size);
  } else {
    //@ts-ignore
    SizeNum = parseInt(userFormData.plussize);
  }

  function convertSizetoMeasurement(brand: string, size: number) {
    if (size % 2 === 0) {
      convertSize = SampleSize.filter(
        (sample) => sample.Brand === brand && sample.Size === size
      );
    } else {
      console.log("Error wrong size");
    }
  }
  convertSizetoMeasurement(userFormData.brand, SizeNum);

  let filterSize: any;

  function matchingSize(user: any) {
    const { Brand, Bust, Waist, Hips } = user[0];
    filterSize = SampleSize.filter((sample) => {
      const isDifferentBrand = sample.Brand !== Brand;
      const isSameBust = sample.Bust >= Bust && sample.Bust < Bust + 5;
      const isSameWaist = sample.Waist >= Waist && sample.Waist < Waist + 5;
      const isSameHip = sample.Hips >= Hips && sample.Hips < Hips + 5;
      return isSameBust && isSameWaist && isSameHip && isDifferentBrand;
    });
    return filterSize;
  }
  matchingSize(convertSize);
  console.log(filterSize);
  return (
    <Box>
      <SimpleGrid
        columns={{ base: 2, sm: 1, lg: 3, xl: 3 }}
        mx={50}
        spacing={10}
      >
        {filterSize &&
          filterSize?.map((sizingInfo: any) => {
            return (
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Box p="6">
                  <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="orange">
                      Sizing
                    </Badge>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                      ml="2"
                    >
                      {sizingInfo.Version}
                    </Box>
                  </Box>
                  <Box
                    mt="4"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    Size {sizingInfo.Size}
                  </Box>
                  <HStack spacing="50%">
                    <Box marginBottom={10}>{sizingInfo.Brand}</Box>
                    <Box
                      display="flex"
                      justifyContent="flex-end"
                      alignItems="flex-end"
                    >
                      {brandAvatar &&
                        brandAvatar
                          ?.filter(
                            (avatarInfo) =>
                              avatarInfo.Brand === sizingInfo.Brand
                          )
                          ?.map((info) => (
                            <Avatar size="xl" name="PLT" src={info.avatar} />
                          ))}
                    </Box>
                  </HStack>
                </Box>
              </Box>
            );
          })}
      </SimpleGrid>
    </Box>
  );
};

export default SizingCard;
