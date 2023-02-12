import React from "react";
import { Button, Flex, useColorMode } from "@chakra-ui/react";

const Toggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  {/* // TODO https://www.pluralsight.com/guides/adding-dark-mode-to-a-react-app-with-chakra-ui */}
  return (
    <section className="toggleThemeSection">
      <Flex align="center" justify="center" direction="column">
        <Button size="sm" onClick={() => toggleColorMode()}>
          Toggle Mode {colorMode}
          {/* // TODO https://react-icons.github.io/react-icons/search?q=moon */}
        </Button>
      </Flex>
    </section>
  );
};

export default Toggle;
