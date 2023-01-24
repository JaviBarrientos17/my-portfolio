import React from "react";
import { Button, Flex, useColorMode } from "@chakra-ui/react";

const Toggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    // TODO https://www.pluralsight.com/guides/adding-dark-mode-to-a-react-app-with-chakra-ui

    <div>
      <Flex align="center" justify="center" height="100vh" direction="column">
        <Button size="md" onClick={() => toggleColorMode()}>
          Toggle Mode {colorMode}
        </Button>
      </Flex>
    </div>
  );
};

export default Toggle;
