import { Box, Stack, Heading } from "@chakra-ui/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Countdown, { CountdownRenderProps } from "react-countdown";
import CalendarUnit from "../atoms/CalendarUnit";
dayjs.extend(relativeTime);

const Timer = () => {
  const targetDate = dayjs("06/17/2022");
  const today = dayjs();
  const timeLeft = today.to(targetDate, true);
  const msLeft = Number(timeLeft.split(" ")[0]) * 24 * 60 * 60 * 1000;
  const initialTime = Date.now() + msLeft;

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) {
      return <Heading>ITS THE DAY</Heading>;
    } else {
      return (
        <Stack direction="row" spacing={4}>
          <CalendarUnit timeUnit={days} />
          <CalendarUnit timeUnit={hours} />
          <CalendarUnit timeUnit={minutes} />
          <CalendarUnit timeUnit={seconds} />
        </Stack>
      );
    }
  };
  return (
    <Box>
      <Countdown date={initialTime} renderer={renderer} />
    </Box>
  );
};

export default Timer;
