import { React, Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <title>Javi Barrientos Peralta | Portfolio</title>
      <div className="container">
        <div className="imageWrapper">
          <img
            src="https://bit.ly/3T1xyOx"
            alt="Profile Picture"
            className="image"
          />
        </div>
        <div className="textWrapper">
          <h2 className="heading">About Me</h2>
          <p className="text">
            Hi, I'm Javi Barrientos! I'm a [profession] based in Barcelona. I have
            [number] years of experience in [industry/specialization]. I'm
            passionate about [interests/hobbies] and love [activity/interest].
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
