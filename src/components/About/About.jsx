import React from "react";
import Typewriter from "typewriter-effect";
import Tilt from 'react-parallax-tilt';
import { profileImg, workImg } from "../../assets";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/*  */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Ranvijay Singh
          </h2>
          {/*  */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a</span>
            <Typewriter
        options={{
          strings: [
            "Fullstack Developer",
            "App Developer",
            "UI/UX Designer",
            "Coder",
          ],
          autoStart: true,
          loop: true,
          delay: 75,
          deleteSpeed: 50,
          pauseFor: 2000,
        }}
      />
          </h3>
          {/* About me paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
          I'm Ranvijay Singh, a MERN Stack Developer at Radoms Digitals Pvt. Ltd., with an MCA from GL Bajaj, Greater Noida. I build responsive, scalable web apps using MongoDB, Express.js, React.js, and Node.js. Skilled in full-stack development, API integration, and modern tools like Tailwind CSS and Vite, I enjoy crafting efficient solutions and exploring new technologies.
          </p>
{/* Resume Button */}
<a href="https://drive.google.com/file/d/1wI2gUkhQFKFR6BRKQGNDpY_RokL9MbfK/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}>Download CV</a>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}>
          <img src={profileImg} alt='Ranvijay Singh' className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"/>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
