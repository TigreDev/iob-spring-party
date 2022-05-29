import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Drink from "../components/atoms/Drink/Drink";
import IobLogo from "../components/atoms/iobLogo";
import Timer from "../components/molecule/Timer";
import partyConfig from "../partyConfig";

function Landing() {
  return (
    <Flex minH="100vh" bgColor="#e1e9ec" w="full" direction="column">
      <Flex align="center" direction="column" zIndex="10">
        <IobLogo w={{ md: "25em" }} h="auto" mt={{ base: 10, md: 20 }} />
        <Heading
          color="#2c3e50"
          fontSize={{ base: "5rem", md: "10rem" }}
          fontFamily="handWritted"
          fontWeight="initial"
          lineHeight="100%"
          textTransform="uppercase"
        >
          {partyConfig.partyName}
        </Heading>
        <Box>
          <Timer />
        </Box>
      </Flex>
      <Flex justify="center">
        <Drink
          breverage="pomerade"
          containerStyle={{
            w: { base: 80, md: "30rem" },
            position: { base: "relative", md: "absolute" },
            bottom: { md: "0%" },
            left: { md: "0%" },
            zIndex: "1",
          }}
        />
      </Flex>
      <Text
        fontWeight="thin"
        color="black"
        fontSize="xs"
        position={{ base: "relative", md: "absolute" }}
        textAlign="center"
        w="full"
        bottom={{ md: 0 }}
        mt={{ base: 8, md: 0 }}
      >
        © 2022. All Rights reserved. ioB Party Timer made with 💖 by Ruben Tigre
        and Irene Chinchilla
      </Text>
    </Flex>
  );
}

export default Landing;
