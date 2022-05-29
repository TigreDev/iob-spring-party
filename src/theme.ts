import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    digital: `'dseg7', sans-serif`,
    handWritted: `'just another hand', sans-serif`,
  },
  components: {
    Heading: {
      baseStyle: {
        color: "#2c3e50",
        fontWeight: "initial",
        "line-height": "100% !important",
      },
    },
  },
});

export default theme;
