import React, { Fragment } from "react";
import { Button, ButtonGroup, HStack } from '@chakra-ui/react'

const About = () => {
  return (
    <Fragment>
      <title>Javi Barrientos Peralta | Portfolio</title>
      <div className="center">
        <h2></h2>
        <a
          name="downloadCVBtn"
          id="downloadCVBtn"
          class="btn btn-primary"
          href="#"
          role="button"
        >
          Download CV
        </a>
        {/* <HStack>
          <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
            Facebook
          </Button>
          <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
            Twitter
          </Button>
        </HStack> */}
      </div>
    </Fragment>
  );
};

export default About;
