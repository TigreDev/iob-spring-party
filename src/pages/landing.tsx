import { Box, Flex, Heading } from "@chakra-ui/react";
import Drink from "../components/molecule/Drink/Drink";
import IobLogo from "../components/atoms/iobLogo";
import Timer from "../components/molecule/Timer";
import partyConfig from "../partyConfig";
import Footer from "../components/atoms/Footer";

function Landing() {
  return (
    <Flex minH="100vh" bgColor="#e1e9ec" w="full" direction="column">
      <Flex align="center" direction="column" zIndex="10">
        <IobLogo w={{ md: "25em" }} h="auto" mt={{ base: 10, md: 20 }} />
        <Heading
          fontSize={{ base: "5rem", md: "10rem" }}
          fontFamily="handWritted"
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
      <Footer />
    </Flex>
  );
}

export default Landing;
