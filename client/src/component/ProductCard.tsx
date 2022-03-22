import { Box, Center, Divider } from "@chakra-ui/react";
import React from "react";
import HeadingInfo from "./HeadingInfo";
import SizingCard from "./SizingCard";
import MeasurementMsg from "./MeasurementMsg";
import { ValuesProps, UserFormDataProp } from "../interface.model";
const ProductCard = () => {
  const retrivedUserData: ValuesProps = JSON.parse(
    localStorage.getItem("form") || "{}"
  );

  return (
    <Box>
      <HeadingInfo />
      <Center height="50px">
        <Divider orientation="horizontal" size="100px" />
      </Center>
      {
        retrivedUserData ? 
      <SizingCard userFormData={retrivedUserData} />
      : <Box display="flex" justifyContent="center">
        <MeasurementMsg />
      </Box> 
      }
    </Box>
  );
};

export default ProductCard;
