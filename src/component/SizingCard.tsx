import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { UserFormDataProp } from "../interface.model";
import { SampleSize } from "../SampleSize";
import { convertSizetoMeasurement, matchingSize } from "../Helper";
const BrandAvatar = [
  {
    Brand: "BOOHOO",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  },
  {
    Brand: "PLT",
    avatar:
      "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  },
  {
    Brand: "ASOS",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
  },
];
const SizingCard = ({ userFormData }: UserFormDataProp) => {
  let convertSize: any;
  function convertSizetoMeasurement(brand: string, size: number) {
    if (size % 2 === 0) {
      convertSize = SampleSize.filter((sample) => {
        console.log("sample", sample.Brand);
        if (brand === sample.Brand && size === sample.UKSize) {
          // return sample;
    
          w
        }
      });
      return convertSize;
    } else {
      console.log("Error wrong size");
    }
  }
  convertSizetoMeasurement(userFormData.brand, userFormData.size);
  console.log("brand", userFormData.size);
  console.log("C", convertSize);

  let filterSize: any;
  function matchingSize(user: any) {
    const { Brand, Bust, Waist, Hips } = user[0];
    console.log("User", user[0]);
    filterSize = SampleSize.filter((sample) => {
      const isDifferentBrand = sample.Brand !== Brand;
      const isSameBust = sample.Bust >= Bust && sample.Bust < Bust + 10;
      const isSameWaist = sample.Waist >= Waist && sample.Waist < Waist + 10;
      const isSameHip = sample.Hips >= Hips && sample.Hips < Hips + 10;
      if (isSameBust && isSameWaist && isSameHip && isDifferentBrand) {
        console.log("sample", sample);
        return sample;
      }
    });
    return filterSize;
  }
  matchingSize(convertSize);
  console.log(filterSize);

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bgColor="red"
    >
      <Text>6</Text>
    </Box>
  );
};

export default SizingCard;
