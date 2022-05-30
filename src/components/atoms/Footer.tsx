import { Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Text
      fontWeight="thin"
      color="black"
      fontSize="xs"
      textAlign="center"
      position={{ base: "relative", md: "absolute" }}
      w="full"
      bottom={{ md: 0 }}
      pt={{ base: 8, md: 4 }}
    >
      © 2022. All Rights reserved. ioB Party Timer made with 💖 by Ruben Tigre
      and Irene Chinchilla
    </Text>
  );
};

export default Footer;
