import { Stack } from "@chakra-ui/react";
import CalendarNumber from "./CalendarNumber";

const CalendarUnit = ({ timeUnit }: { timeUnit: string | number }) => {
  const timeGroup =
    `${timeUnit}`.length !== 2 ? [0, 0] : `${timeUnit}`.split("");
  const leftUnit = timeGroup[0];
  const rightUnit = timeGroup[1];

  return (
    <Stack direction="row" spacing={1}>
      <CalendarNumber numberToDisplay={leftUnit} />
      <CalendarNumber numberToDisplay={rightUnit} />
    </Stack>
  );
};

export default CalendarUnit;
