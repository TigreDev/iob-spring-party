import { useState } from "react";
import { Box, BoxProps, Flex } from "@chakra-ui/react";
import Lottie from "lottie-react";
import lemonade from "./animations/drink.json";
import orange from "./animations/orangeDrink.json";
import pomerade from "./animations/pomerade.json";
import coke from "./animations/coke.json";
import ClickMe from "../../atoms/ClickMe";

type breverageType = "lemonade" | "orange" | "pomerade" | "coke";

interface DrinkProps {
  containerStyle: BoxProps;
  breverage: breverageType;
}

const Drink = ({ containerStyle, breverage }: DrinkProps) => {
  const drinks = {
    lemonade,
    orange,
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
        <ClickMe onClick={() => nextDrink()} />
      </Flex>
    </Box>
  );
};

export default Drink;
