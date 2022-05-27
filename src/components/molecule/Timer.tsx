import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
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
        <Grid
          templateRows={{ base: "1fr 1fr", md: "1fr" }}
          templateColumns={{ base: "1fr 1fr", md: "1fr 1fr 1fr 1fr" }}
          gridGap={3}
        >
          <GridItem>
            <CalendarUnit time={days} unit="days" />
          </GridItem>
          <GridItem>
            <CalendarUnit time={hours} unit="hours" />
          </GridItem>
          <GridItem>
            <CalendarUnit time={minutes} unit="minutes" />
          </GridItem>
          <GridItem>
            <CalendarUnit time={seconds} unit="seconds" />
          </GridItem>
        </Grid>
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
