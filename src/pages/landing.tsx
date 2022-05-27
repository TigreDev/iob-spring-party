import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import Drink from "../components/atoms/Drink/Drink";
import IobLogo from "../components/atoms/iobLogo";
import Timer from "../components/molecule/Timer";

function Landing() {
  return (
    <Center minH="100vh" bgColor="#e1e9ec" w="full">
      <Flex align="center" direction="column" alignSelf="start" zIndex="10">
        <IobLogo w={{ md: "25em" }} h="auto" mt={{ base: 10, md: 20 }} />
        <Heading color="#2c3e50" fontSize={{ base: "48px", md: "92px" }}>
          SPRING PARTY
        </Heading>
        <Box>
          <Timer />
        </Box>
      </Flex>
      <Drink
        breverage="orange"
        containerStyle={{
          w: { base: 80, md: "35rem" },
          position: "absolute",
          bottom: "0%",
          left: { md: "0%" },
          zIndex: "1",
        }}
      />
    </Center>
  );
}

export default Landing;
