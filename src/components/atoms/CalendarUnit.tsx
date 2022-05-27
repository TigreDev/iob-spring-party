import { Heading, Stack } from "@chakra-ui/react";
import CalendarNumber from "./CalendarNumber";

interface CalendarUnitProps {
  time: string | number;
  unit: string;
}

const CalendarUnit = ({ time, unit }: CalendarUnitProps) => {
  const timeGroup = `${time}`.length !== 2 ? [0, 0] : `${time}`.split("");
  const leftUnit = timeGroup[0];
  const rightUnit = timeGroup[1];

  return (
    <Stack align="center" spacing={3}>
      <Stack direction="row" spacing={1}>
        <CalendarNumber numberToDisplay={leftUnit} />
        <CalendarNumber numberToDisplay={rightUnit} />
      </Stack>
      <Heading
        textTransform="uppercase"
        color="#2c3e50"
        fontSize={{ base: "md", md: "2xl" }}
      >
        {unit}
      </Heading>
    </Stack>
  );
};

export default CalendarUnit;
