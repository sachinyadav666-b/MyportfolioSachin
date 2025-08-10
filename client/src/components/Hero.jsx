import React, { useState, useEffect } from "react";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  Sparkles,
  User,
} from "lucide-react";
import sachinBlack2 from ".././assets/sachinBlack2.jpg";
import sachinResume from "../.././public/sachinResume.pdf";

export default function AnimatedHeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  const handleAboutToggle = () => {
    setIsAboutVisible(!isAboutVisible);
  };

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const designations = [
    "Frontend developer",
    "MernStack Developer",
    "Backend developer",
    "React developer",
  ];
  const [currentDesignation, setCurrentDesignation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDesignation((prev) => (prev + 1) % designations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style jsx>{`
        .hero-bg {
          background: linear-gradient(
            135deg,
            #0f0f23 0%,
            #1a1a2e 25%,
            #16213e 50%,
            #0f3460 100%
          );
          position: relative;
          overflow: hidden;
        }

        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }

        .shape {
          position: absolute;
          opacity: 0.1;
          animation: float 20s infinite linear;
        }

        .shape-1 {
          top: 20%;
          left: 10%;
          width: 100px;
          height: 100px;
          background: linear-gradient(45deg, #6c63ff, #3b82f6);
          border-radius: 50%;
          animation-delay: 0s;
        }

        .shape-2 {
          top: 60%;
          right: 10%;
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, #8b5cf6, #06b6d4);
          border-radius: 20px;
          animation-delay: -5s;
        }

        .shape-3 {
          top: 40%;
          left: 80%;
          width: 60px;
          height: 60px;
          background: linear-gradient(45deg, #10b981, #3b82f6);
          transform: rotate(45deg);
          animation-delay: -10s;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(90deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
          75% {
            transform: translateY(-30px) rotate(270deg);
          }
        }

        .gradient-text {
          background: linear-gradient(
            135deg,
            #6c63ff 0%,
            #3b82f6 50%,
            #06b6d4 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glow-effect {
          box-shadow: 0 0 30px rgba(108, 99, 255, 0.4);
        }

        .profile-image {
          position: relative;
          background: linear-gradient(145deg, #6c63ff, #3b82f6);
          border-radius: 50%;
          padding: 8px;
          animation: profileFloat 6s ease-in-out infinite;
        }

        @keyframes profileFloat {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(2deg);
          }
        }

        .profile-inner {
          border-radius: 50%;
          overflow: hidden;
          background: #f8f9fa;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1),
            0 0 0 10px rgba(255, 255, 255, 0.1),
            0 0 0 20px rgba(255, 255, 255, 0.05);
        }

        .typing-animation {
          border-right: 3px solid #6c63ff;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%,
          50% {
            border-color: transparent;
          }
          51%,
          100% {
            border-color: #6c63ff;
          }
        }

        .btn-gradient {
          background: linear-gradient(135deg, #6c63ff 0%, #3b82f6 100%);
          transition: all 0.3s ease;
        }

        .btn-gradient:hover {
          background: linear-gradient(135deg, #5b52ff 0%, #2563eb 100%);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(108, 99, 255, 0.4);
        }

        .social-btn {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .social-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .fade-in-up {
          opacity: ${isVisible ? "1" : "0"};
          transform: translateY(${isVisible ? "0" : "30px"});
          transition: all 0.8s ease;
        }

        .fade-in-left {
          opacity: ${isVisible ? "1" : "0"};
          transform: translateX(${isVisible ? "0" : "-30px"});
          transition: all 1s ease;
        }

        .fade-in-right {
          opacity: ${isVisible ? "1" : "0"};
          transform: translateX(${isVisible ? "0" : "30px"});
          transition: all 1s ease;
        }

        .parallax-bg {
          background: radial-gradient(
            circle at ${mousePosition.x}% ${mousePosition.y}%,
            rgba(255, 255, 255, 0.1) 0%,
            transparent 50%
          );
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 2;
        }

        .sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
          animation: sparkle 2s infinite;
        }

        @keyframes sparkle {
          0%,
          100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .skill {
          color: gold;
        }
      `}</style>

      <section className="hero-bg min-h-screen flex items-center justify-center relative">
        {/* Floating Background Shapes */}
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          {/* Sparkles */}
          <div
            className="sparkle"
            style={{ top: "20%", left: "15%", animationDelay: "0s" }}
          ></div>
          <div
            className="sparkle"
            style={{ top: "40%", right: "20%", animationDelay: "1s" }}
          ></div>
          <div
            className="sparkle"
            style={{ bottom: "30%", left: "25%", animationDelay: "2s" }}
          ></div>
          <div
            className="sparkle"
            style={{ top: "70%", right: "15%", animationDelay: "1.5s" }}
          ></div>
        </div>

        {/* Interactive Background */}
        <div className="parallax-bg"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Greeting */}
              <div className="fade-in-up" style={{ transitionDelay: "0.2s" }}>
                <p className="text-white/80 text-lg mb-2 flex items-center justify-center lg:justify-start">
                  <Sparkles className="w-5 h-5 mr-2 text-yellow-300" />
                  Hello, I'm
                </p>
              </div>

              {/* Name */}
              <div className="fade-in-up" style={{ transitionDelay: "0.4s" }}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                  Sachin <span className="gradient-text bg-white">Yadav</span>
                </h1>
              </div>

              {/* Animated Designation */}
              <div className="fade-in-up" style={{ transitionDelay: "0.6s" }}>
                <div className="text-xl sm:text-2xl lg:text-3xl text-white/90 h-12 flex items-center justify-center lg:justify-start">
                  <span className="typing-animation pr-2">
                    {designations[currentDesignation]}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="fade-in-up" style={{ transitionDelay: "0.8s" }}>
                <p className="text-white/70 text-lg max-w-md mx-auto lg:mx-0 leading-relaxed"></p>
              </div>

              {/* Buttons */}
              <div
                className="fade-in-up flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                style={{ transitionDelay: "1s" }}
              >
                <button className="btn-gradient text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center hover:glow-effect">
                  <Download className="w-5 h-5 mr-2" />
                  <a href={sachinResume} download={sachinResume}>
                    Download CV
                  </a>
                </button>
                <button
                  onClick={handleAboutToggle}
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300"
                >
                  <User className="inline w-5 h-5 mr-2" />
                  About me
                </button>
              </div>

              {/* Social Links */}
              <div
                className="fade-in-up flex gap-4 justify-center lg:justify-start"
                style={{ transitionDelay: "1.2s" }}
              >
                <a
                  href="https://github.com/sachinyadav666-b"
                  className="social-btn w-12 h-12 rounded-full flex items-center justify-center text-white"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sachin-yadav-021816253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                  className="social-btn w-12 h-12 rounded-full flex items-center justify-center text-white"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="social-btn w-12 h-12 rounded-full flex items-center justify-center text-white"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div
              className="fade-in-right flex justify-center lg:justify-end"
              style={{ transitionDelay: "0.8s" }}
            >
              <div className="profile-image w-80 h-80 sm:w-96 sm:h-96">
                <div className="profile-inner w-full h-full">
                  <img
                    src={sachinBlack2}
                    alt="Profile"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            className="fade-in-up absolute bottom-8 left-1/2 transform -translate-x-1/2"
            style={{ transitionDelay: "1.4s" }}
          >
            <div className="flex flex-col items-center text-white/60">
              <span className="text-sm mb-2">
                <a href="#qualification">Scroll Down</a>
              </span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </div>
          </div>
        </div>
        {isAboutVisible && (
          <div className="absolute inset-0 z-50 flex items-center justify-center">
            {/* Semi-transparent blurred background */}
            <div
              className="absolute inset-0 bg-white/10 backdrop-blur-md"
              onClick={handleAboutToggle}
            ></div>

            {/* About Me Content Box */}
            <div className="relative z-10 bg-black backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-6 sm:p-10 w-11/12 max-w-2xl animate-fadeIn">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4 text-center">
                ABOUT ME
              </h2>
              <p className="text-white/90 text-cente text-sm sm:text-base leading-relaxed mb-6">
                Hi, I'm Sachin Yadav — a MERN Stack Developer passionate about
                building fast, responsive, and visually engaging web
                applications. I love working with javascript, React.js, Node.js,
                Mysql and transforming ideas into elegant digital experiences.
              </p>
              <ul className="text-white grid grid-cols-4 gap-2 ">
                <li className="skill">#javascript</li>
                <li className="skill">#reactjs</li>
                <li className="skill">#redux</li>
                <li className="skill">#nodejs</li>
                <li className="skill">#nextjs</li>
                <li className="skill">#expressjs</li>
                <li className="skill">#mysql</li>
                <li className="skill">#mongodb</li>
                <li className="skill">#ejs</li>
                <li className="skill">#html</li>
                <li className="skill">#css</li>
                <li className="skill">#Bootsrap</li>
                <li className="skill">#tailwind</li>
                <li className="skill">#git&github</li>
                {/* <li className="border-amber-50 border-2 border-solid"></li> */}
              </ul>
              <br />
              <div className="flex justify-center">
                <button
                  onClick={handleAboutToggle}
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-2 px-6 rounded-full transition-transform transform hover:scale-105"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
