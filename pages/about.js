import { React, Fragment } from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

// const About = () => {
//   return (
//     <div className="flex flex-col md:flex-row md:items-center md:space-x-8 max-w-5xl mx-auto p-8">
//       <div className="flex-none">
//         <Image
//           src="/profile-photo.png"
//           alt="Your Name"
//           width={200}
//           height={200}
//           priority
//         />
//       </div>
//       <div className="flex-auto mt-4 md:mt-0">
//         <h2 className="text-3xl font-bold">Your Name</h2>
//         <p className="text-gray-500 text-lg mt-2">
//           A short bio about yourself goes here...
//         </p>
//         <div className="flex space-x-4 mt-4">
//           <a
//             href="https://www.linkedin.com/in/your-linkedin-profile"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaLinkedin size={32} />
//           </a>
//           <a
//             href="https://github.com/your-github-profile"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaGithub size={32} />
//           </a>
//           <a
//             href="https://twitter.com/your-twitter-handle"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaTwitter size={32} />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

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
