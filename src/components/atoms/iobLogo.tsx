import { Box, Img } from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";

const IobLogo = (props: BoxProps) => {
  return (
    <Box {...props}>
      <Img
        alt="iobLogo"
        src={"/image/ioBuilders_original.png"}
        w="full"
        h="full"
      />
    </Box>
  );
};

export default IobLogo;
