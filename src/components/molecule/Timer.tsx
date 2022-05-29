import { Box, Grid, GridItem } from "@chakra-ui/react";
import dayjs from "dayjs";
import Countdown, { CountdownRenderProps } from "react-countdown";
import CalendarUnit from "../atoms/CalendarUnit";
import partyConfig from "../../partyConfig";
import TimeOut from "./TimeOut";

const Timer = () => {
  const targetDate = dayjs(partyConfig.partyDate);
  const today = dayjs();
  const timeLeft = Number(targetDate.diff(today).toString());
  const initialTime = Date.now() + timeLeft;

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) {
      return <TimeOut />;
    } else {
      return (
        <Grid
          templateRows={{ base: "1fr 1fr", md: "1fr" }}
          templateColumns={{ base: "1fr 1fr", md: "1fr 1fr 1fr 1fr" }}
          gridGap={{ base: 4, md: 6 }}
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
    <Box mt={{ base: 4, md: 8 }}>
      <Countdown date={initialTime} renderer={renderer} />
    </Box>
  );
};

export default Timer;
