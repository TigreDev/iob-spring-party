import { Box, Flex, Heading } from "@chakra-ui/react";
import Drink from "../components/molecule/Drink/Drink";
import IobLogo from "../components/atoms/iobLogo";
import Timer from "../components/molecule/Timer";
import partyConfig from "../partyConfig";
import Footer from "../components/atoms/Footer";

function Landing() {
  return (
    <Flex minH="100vh" bgColor="#e1e9ec" w="full" direction="column">
      <Flex align="center" direction="column" h="full">
        <IobLogo w={{ md: "25em" }} h="auto" mt={{ base: 10, md: 20 }} />
        <Heading
          fontSize={{ base: "5rem", md: "10rem" }}
          fontFamily="handWritted"
          textTransform="uppercase"
          mt={{base: 2, md: 7}}
        >
          {partyConfig.partyName}
        </Heading>
        <Box>
          <Timer />
        </Box>
        <Drink
          breverage="pomerade"
          containerStyle={{
            w: { base: 80, md: "30rem" },
            alignSelf: {md: "flex-start"},
            mb: { base: 10, md: 0}
          }}
        />
        <Footer />
      </Flex>
    </Flex>
  );
}

export default Landing;
