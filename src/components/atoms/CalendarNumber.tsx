import { Flex, Box } from "@chakra-ui/react";

interface CalendarNumberProps {
  numberToDisplay: string | number;
}

const CalendarNumber = ({ numberToDisplay }: CalendarNumberProps) => {
  return (
    <Box position="relative">
      <Flex
        w={20}
        h={28}
        bg="linear-gradient(0deg, #383838 50%, white 50%, white 51%, #383838 51%)"
        justify="center"
        align="center"
        fontSize="7xl"
        fontFamily="digital"
        color="yellow.300"
        borderRadius="2px"
        _after={{
          content: "''",
          height: 6,
          width: 1,
          background: "gray.500",
          position: "absolute",
          right: "100%",
        }}
        _before={{
          content: "''",
          height: 6,
          width: 1,
          background: "gray.500",
          position: "absolute",
          left: "100%",
        }}
      >
        {numberToDisplay}
      </Flex>
    </Box>
  );
};

export default CalendarNumber;
