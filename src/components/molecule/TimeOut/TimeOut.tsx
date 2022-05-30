import { Heading, Stack, Box, Center, keyframes } from "@chakra-ui/react";
import Lottie from "lottie-react";
import fireworks from "./fireworks.json";
import { useState } from "react";

const TimeOut = () => {
  const spin = keyframes`
  0% {
    -webkit-transform: rotate(-3deg);
    -ms-transform: rotate(-3deg);
    transform: rotate(-3deg);
  }

  2% {
    -webkit-transform: rotate(3deg);
    -ms-transform: rotate(3deg);
    transform: rotate(3deg);
  }

  4% {
    -webkit-transform: rotate(-4deg);
    -ms-transform: rotate(-4deg);
    transform: rotate(-4deg);
  }

  6% {
    -webkit-transform: rotate(4deg);
    -ms-transform: rotate(4deg);
    transform: rotate(4deg);
  }

  8% {
    -webkit-transform: rotate(-5deg);
    -ms-transform: rotate(-5deg);
    transform: rotate(-5deg);
  }

  10% {
    -webkit-transform: rotate(5deg);
    -ms-transform: rotate(5deg);
    transform: rotate(5deg);
  }

  12% {
    -webkit-transform: rotate(-4deg);
    -ms-transform: rotate(-4deg);
    transform: rotate(-4deg);
  }

  14% {
    -webkit-transform: rotate(4deg);
    -ms-transform: rotate(4deg);
    transform: rotate(4deg);
  }

  16% {
    -webkit-transform: rotate(-3deg);
    -ms-transform: rotate(-3deg);
    transform: rotate(-3deg);
  }

  18% {
    -webkit-transform: rotate(3deg);
    -ms-transform: rotate(3deg);
    transform: rotate(3deg);
  }

  20% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }`;
  const spinAnimation = `${spin} 6s linear`;
  const [display, setDisplay] = useState<"none" | "block">("block");

  return (
    <Center>
      <Box
        w={{ base: "70%", md: "50%" }}
        position="absolute"
        zIndex={11}
        display={display}
      >
        <Lottie
          animationData={fireworks}
          loop={false}
          onComplete={() => setDisplay("none")}
        />
      </Box>
      <Stack zIndex={20} align="center" mx={4}>
        <Heading fontSize="6xl" fontFamily="handWritted" letterSpacing="0.04em">
          Today is the day!
        </Heading>
        <Heading
          fontSize="8xl"
          fontFamily="handWritted"
          textAlign="center"
          animation={spinAnimation}
        >
          Let the party start!
        </Heading>
      </Stack>
    </Center>
  );
};

export default TimeOut;
