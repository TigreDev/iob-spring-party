import { Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Text
      fontWeight="thin"
      color="black"
      fontSize="xs"
      textAlign="center"
      position={{ base: "relative", md: "absolute" }}
      bottom={{ md: 0 }}
      py={{ base: 8, md: 4 }}
      px={4}
    >
      © 2022. All Rights reserved.
      <Text
        as="span"
        fontWeight="thin"
        color="black"
        fontSize="xs"
        display={{ base: "block", md: "inline" }}
        w="full"
      >
        ioB Party Timer made with 💖 by Ruben Tigre and Irene Chinchilla
      </Text>
    </Text>
  );
};

export default Footer;
