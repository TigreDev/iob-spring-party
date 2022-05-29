import { useState } from "react";
import { Box, BoxProps, Flex } from "@chakra-ui/react";
import Lottie from "lottie-react";
import lemonade from "./drink.json";
import orange from "./orangeDrink.json";
import champagne from "./champagne.json";
import pomerade from "./pomerade.json";
import coke from "./coke.json";
import ClickMe from "../ClickMe";

type breverageType = "lemonade" | "orange" | "champagne" | "pomerade" | "coke";

interface DrinkProps {
  containerStyle: BoxProps;
  breverage: breverageType;
}

const Drink = ({ containerStyle, breverage }: DrinkProps) => {
  const drinks = {
    lemonade,
    orange,
    champagne,
    pomerade,
    coke,
  };
  const drinkArray = Object.keys(drinks);

  const [currentDrink, setDrink] = useState<breverageType>(breverage);
  const [drinksLeft, setDrinksLeft] = useState(
    Object.keys(drinks).filter((drink) => drink !== breverage)
  );

  const getRandomDrink = (drinksLeft: string[]) => {
    const lengthOfDrinks = drinksLeft.length;
    let randomDrink;
    let nextDrink: string;
    let newLeftDrinks;

    if (lengthOfDrinks === 1) {
      randomDrink = Math.floor(Math.random() * 5);
      nextDrink = drinkArray[randomDrink];
      newLeftDrinks = drinkArray.filter((drink) => drink !== nextDrink);
    } else {
      randomDrink = Math.floor(Math.random() * lengthOfDrinks);
      nextDrink = drinksLeft[randomDrink];
      newLeftDrinks = drinksLeft.filter((drink) => drink !== nextDrink);
    }
    return { nextDrink, newLeftDrinks };
  };

  const nextDrink = () => {
    const { nextDrink, newLeftDrinks } = getRandomDrink(drinksLeft);
    setDrink(nextDrink as breverageType);
    setDrinksLeft(newLeftDrinks);
  };

  return (
    <Box {...containerStyle}>
      <Flex direction="column" alignItems={"center"} cursor="pointer">
        <Lottie
          animationData={drinks[currentDrink]}
          loop={false}
          onClick={() => nextDrink()}
        />
        <ClickMe />
      </Flex>
    </Box>
  );
};

export default Drink;
