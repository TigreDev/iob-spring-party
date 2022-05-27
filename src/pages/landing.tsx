import { Flex, Heading } from "@chakra-ui/react";
import IobLogo from "../components/atoms/iobLogo";

function Landing() {
  return (
    <Flex
      w="full"
      minH="100vh"
      bgColor="#e1e9ec"
      align="center"
      direction="column"
    >
      <IobLogo w="25em" h="auto" mt={{ base: 10, md: 20 }} />
      <Heading color="#2c3e50" fontSize={{ base: "48px", md: "92px" }}>
        SPRING PARTY
      </Heading>
    </Flex>
  );
}

export default Landing;
