import { Box, BoxProps } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const ClickMe = (props: BoxProps) => {
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
  const spinAnimation = `${spin} infinite 2s linear`;

  return (
    <Box
      w="fit-content"
      position="relative"
      bottom="10"
      animation={spinAnimation}
      {...props}
    >
      <Box
        as="span"
        bg="#2c3e50"
        color="white"
        px={3}
        py={2}
        borderRadius="2xl"
        lineHeight="100%"
        fontWeight="semibold"
      >
        Get another!
      </Box>
    </Box>
  );
};

export default ClickMe;
