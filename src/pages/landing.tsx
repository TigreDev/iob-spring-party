import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import Drink from "../components/atoms/Drink/Drink";
import IobLogo from "../components/atoms/iobLogo";
import Timer from "../components/molecule/Timer";

function Landing() {
  return (
    <Center minH="100vh" bgColor="#e1e9ec" w="full">
      <Flex align="center" direction="column" alignSelf="start" zIndex="10">
        <IobLogo w={{ md: "25em" }} h="auto" mt={{ base: 10, md: 20 }} />
        <Heading
          color="#2c3e50"
          fontSize={{ base: "5rem", md: "10rem" }}
          fontFamily="handWritted"
          fontWeight="initial"
        >
          SPRING PARTY
        </Heading>
        <Box>
          <Timer />
        </Box>
        <Drink
          breverage="orange"
          containerStyle={{
            w: { base: 80, md: "30rem" },
            position: { base: "relative", md: "absolute" },
            bottom: { md: "0%" },
            left: { md: "0%" },
            zIndex: "1",
          }}
        />
        <Text
          fontWeight="thin"
          color="black"
          fontSize="xs"
          position={{ base: "relative", md: "absolute" }}
          bottom={{ md: 0 }}
          mt={{ base: 8, md: 0 }}
        >
          © 2022. All Rights reserved. ioB Party Timer made with 💖 by Ruben
          Tigre
        </Text>
      </Flex>
    </Center>
  );
}

export default Landing;
