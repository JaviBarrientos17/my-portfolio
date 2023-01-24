import React, { Fragment } from "react";
import { Button, Stack } from "@chakra-ui/react";

const About = () => {
  return (
    <Fragment>
      <title>Javi Barrientos Peralta | Portfolio</title>
      <h2 className="center">About me</h2>
      <Stack spacing={4} direction="row" align="center">
        <Button colorScheme="teal" size="xs">
          Button
        </Button>
        <Button colorScheme="teal" size="sm">
          Button
        </Button>
        <Button colorScheme="teal" size="md">
          Button
        </Button>
        <Button colorScheme="teal" size="lg">
          Button
        </Button>
      </Stack>
    </Fragment>
  );
};

export default About;
