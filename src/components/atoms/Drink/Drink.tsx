import { Box, BoxProps } from "@chakra-ui/react";
import Lottie from "lottie-react";
import lemonade from "./drink.json";
import orange from "./orangeDrink.json";

interface DrinkProps {
  containerStyle: BoxProps;
  breverage: "lemonade" | "orange";
}

const Drink = ({ containerStyle, breverage }: DrinkProps) => {
  const drinks = {
    lemonade,
    orange,
  };

  return (
    <Box {...containerStyle}>
      <Lottie animationData={drinks[breverage]} loop={false} />
    </Box>
  );
};

export default Drink;
