import React from "react";
import {
  ChakraProvider,
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/react";
import Toggle from "../components/Toggle";

const About = () => {
  // TODO https://www.pluralsight.com/guides/adding-dark-mode-to-a-react-app-with-chakra-ui

  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <Toggle />
        </ColorModeProvider>
      </ThemeProvider>
    </ChakraProvider>
  );
};

export default About;
