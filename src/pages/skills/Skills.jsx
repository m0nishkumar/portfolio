import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Skills.css";
import Footer from "../../components/Footer";
import Marqueee from "./Marqueee";
import ScoreComponent from "./ProgressBar";
import { progressBar } from "./ProgressBar";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
  const [skills, setSkills] = useState(null);
  const [solvedCounts, setSolvedCounts] = useState({
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
  });
  const [images, setImages] = useState([]);
  const fullstack = {
    frontend: [
      ["React", 60, "#87CEEB", `${process.env.PUBLIC_URL}/projectImages/react.png`],
      ["HTML", 90, "#ff8c00", `${process.env.PUBLIC_URL}/projectImages/html.png`],
      ["CSS", 80, "blue", `${process.env.PUBLIC_URL}/projectImages/css.png`],
      ["JavaScript", 50, "#FDDA0D", `${process.env.PUBLIC_URL}/projectImages/javascript.png`],
      ["Vue", 50, "green", `${process.env.PUBLIC_URL}/projectImages/vue.png`],
      ["Tailwind", 80, "#87CEEB", `${process.env.PUBLIC_URL}/projectImages/tailwind.png`],
    ],
    backend: [
      ["Nodejs", 50, "green", `${process.env.PUBLIC_URL}/projectImages/nodejs.png`],
      ["Flask", 60, "black", `${process.env.PUBLIC_URL}/projectImages/flask.png`],
      ["Flask", 80, "#D22B2B", `${process.env.PUBLIC_URL}/projectImages/java.png`],
    ],
    database: [
      ["MongoDB", 60, "green", `${process.env.PUBLIC_URL}/projectImages/mongodb.png`],
      ["MySQL", 80, "#448EE2", `${process.env.PUBLIC_URL}/projectImages/mysql.png`],
    ],
  };
  
  
  useEffect(() => {
    // Fetching skills data from the first API
    axios
      .get("https://alfa-leetcode-api.onrender.com/skillStats/monishkumar4050")
      .then((response) => {
        setSkills(response.data.data.matchedUser.tagProblemCounts);
      })
      .catch((err) => {
        console.error("Error fetching skills:", err);
      });

    // Fetching solved problem counts from the second API
    axios
      .get("https://alfa-leetcode-api.onrender.com/monishkumar4050/solved")
      .then((response) => {
        const { easySolved, mediumSolved, hardSolved } = response.data;
        const submissions = response.data.totalSubmissionNum[0].submissions;
        setSolvedCounts({ easySolved, mediumSolved, hardSolved, submissions });
      })
      .catch((err) => {
        console.error("Error fetching solved counts:", err);
      });
  }, []);

  useEffect(() => {
    // Full list of images to cycle through
    const allImages = [
      `${process.env.PUBLIC_URL}/projectImages/python.png`,
      `${process.env.PUBLIC_URL}/projectImages/react.png`,
      `${process.env.PUBLIC_URL}/projectImages/git.png`,
      `${process.env.PUBLIC_URL}/projectImages/tailwind.png`,
      `${process.env.PUBLIC_URL}/projectImages/java.png`,
      `${process.env.PUBLIC_URL}/projectImages/nodejs.png`,
      `${process.env.PUBLIC_URL}/projectImages/mongodb.png`,
      `${process.env.PUBLIC_URL}/projectImages/mysql.png`,
      `${process.env.PUBLIC_URL}/projectImages/cprogram.png`,
      `${process.env.PUBLIC_URL}/projectImages/html.png`,
      `${process.env.PUBLIC_URL}/projectImages/javascript.png`,
      `${process.env.PUBLIC_URL}/projectImages/css.png`,
      `${process.env.PUBLIC_URL}/projectImages/python.png`,
      `${process.env.PUBLIC_URL}/projectImages/react.png`,
      `${process.env.PUBLIC_URL}/projectImages/git.png`,
      `${process.env.PUBLIC_URL}/projectImages/tailwind.png`,
      `${process.env.PUBLIC_URL}/projectImages/java.png`,
      `${process.env.PUBLIC_URL}/projectImages/nodejs.png`,
      `${process.env.PUBLIC_URL}/projectImages/mongodb.png`,
      `${process.env.PUBLIC_URL}/projectImages/mysql.png`,
      `${process.env.PUBLIC_URL}/projectImages/cprogram.png`,
      `${process.env.PUBLIC_URL}/projectImages/html.png`,
      `${process.env.PUBLIC_URL}/projectImages/javascript.png`,
      `${process.env.PUBLIC_URL}/projectImages/css.png`,
    ];

    setImages(allImages.slice(0, 21));

    // let currentIndex = 15;

    // const intervalId = setInterval(() => {
    //     setImages(prevImages => [
    //         ...prevImages,
    //         allImages[currentIndex % allImages.length]
    //     ]);
    //     currentIndex = (currentIndex + 1) % allImages.length;
    // }, 800);

    // return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="PageContainer w-[100vw]">

        <div>
          <div className="grid-container">
            <div className="item1">
              <div className="marquee">
                <div className="marquee-content z-10">
                  <Marqueee images={images} direction="left" />
                </div>
              </div>
            </div>
            <div className="item2 overflow-scroll p-2" style={{}}>
                <p className="text-2xl mb-3 font-semibold">Full Stack Skills</p>
                <div className="w-full">
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px"}}>
                    {Object.keys(fullstack).map((category) => (
  <div key={category} className=" w-full">
    <h1 className="text-left my-3">{category.charAt(0).toUpperCase() + category.slice(1)} Technologies:</h1>
    <div style={{ display: "flex", flexWrap: "wrap",justifyContent:"space-around" }} className="mobileCircle">
      {fullstack[category].map(([name, progress, color, imagePath], index) => (
        <div key={index} className="shadow-md rounded-full circularMobile" style={{ position: "relative" }}>
          <CircularProgressbar
            value={progress}
            text={" "}
            strokeWidth={7}
            background
            backgroundPadding={7}
            styles={buildStyles({
              pathColor: color,
              trailColor: "#F0EAD6",
              backgroundColor: "white",
            })}
          />
          <img
            src={imagePath}
            alt={`${name} Icon`}
            className="circularImg"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "50%",
              backgroundColor: "white",
              padding: "5px",
            }}
          />
        </div>
      ))}
    </div>
  </div>
))}
    </div>
                </div>
            </div>
           <div className="item3 overflow-scroll">
              {/* Main content */}
              {(skills)? <div className="">
                <div className="flex flex-row items-center justify-around p-2 h-full bg-white py-4">
                  <div className=" h-[100%] rounded-lg border-2 p-2">
                    <p className="text-[15px]">Leetcode Profile</p>
                    <div className="flex flex-col items-center relative ">
                      <SemiCircleProgressBar
                        percentage={
                          (solvedCounts.easySolved +
                            solvedCounts.mediumSolved +
                            solvedCounts.hardSolved) /
                          5
                        }
                        strokeWidth={16}
                        stroke="#131a22"
                        background="#F0EAD6"
                      />
                      <h1 className="w-fit p-2 absolute bottom-0">
                        <span className="font-semibold text-2xl">
                          {solvedCounts.easySolved +
                            solvedCounts.mediumSolved +
                            solvedCounts.hardSolved}
                        </span>
                        /500{" "}
                      </h1>
                    </div>
                    <h1 className="text-slate-500 text-sm mt-2">
                      Submissions {solvedCounts.submissions}
                    </h1>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="text-sm px-3 py-1 bgcolor text-white rounded-md">
                      <h1 className="text-green-600">Easy</h1>
                      <p className="">{solvedCounts.easySolved}/150</p>
                    </div>
                    <div className="text-sm px-3 py-1 bgcolor text-white rounded-md">
                      <h1 className="text-yellow-500">Medium</h1>
                      <p className="">{solvedCounts.mediumSolved}/300</p>
                    </div>
                    <div className="text-sm px-3 py-1 bgcolor text-white rounded-md">
                      <h1 className="text-red-600">Hard</h1>
                      <p className="">{solvedCounts.hardSolved}/50</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-around items-center bgcolor p-3">
                  <h1 className="text-white">Languages:</h1>
                  <img
                    src={`${process.env.PUBLIC_URL}/projectImages/python.png`}
                    className="w-12 h-12 bg-white p-1 rounded-full"
                  />
                  <img
                    src={`${process.env.PUBLIC_URL}/projectImages/java.png`}
                    className="w-12 h-12 bg-white p-1 rounded-full"
                  />
                  <img
                    src={`${process.env.PUBLIC_URL}/projectImages/cprogram.png`}
                    className="w-12 h-12 bg-white p-1 rounded-full"
                  />
                <img
                    src={`${process.env.PUBLIC_URL}/projectImages/javascript.png`}
                    className="w-12 h-12 bg-white p-1 rounded-full"
                  />
                </div>
                <div className="bg-white">
                  <div className="flex flex-col p-2">
                    <div className="w-fit">
                      <h3 className="my-3"> Fundamental</h3>
                      <ul className="flex flex-row flex-wrap gap-4 text-sm">
                        {skills.fundamental.map((skill, index) => (
                          <li key={index}>
                            <span className="bg-slate-200 px-2 rounded-md">
                              {skill.tagName}
                            </span>{" "}
                            x{skill.problemsSolved}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <h3 className="my-3">Intermediate</h3>
                    <ul className="flex flex-row flex-wrap text-sm gap-4">
                      {skills.intermediate.map((skill, index) => (
                        <li key={index}>
                          <span className="bg-slate-200 px-2 rounded-md">
                            {skill.tagName}
                          </span>{" "}
                          x{skill.problemsSolved}
                        </li>
                      ))}
                    </ul>
                    <h3 className="my-3">Advanced</h3>
                    <ul className="flex flex-row flex-wrap text-sm gap-4">
                      {skills.advanced.map((skill, index) => (
                        <li key={index}>
                          <span className="bg-slate-200 px-2 rounded-md">
                            {skill.tagName}
                          </span>{" "}
                          x{skill.problemsSolved}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>:<h1>Api timed out try again after some time</h1>}
            </div>
            <div className="item4 p-4 overflow-scroll">
                <h1 className="font-semibold text-2xl">Computer Science Skills</h1>
                <img src={`${process.env.PUBLIC_URL}/projectImages/computerSkills.png`}/>
                <p className="text-sm text-left">
                With a <b>Bachelor of Engineering in Computer Science</b>, I have a comprehensive understanding of essential computer science principles and hands-on experience in several technical areas. My skills include proficiency in <b>data structures, algorithms, and core programming languages like Python, Java, C, and JavaScript</b>. I am skilled in web development, working with frontend technologies such as<b>React, HTML, CSS, and Tailwind</b>, as well as backend tools like <b>Node.js and Flask</b>. Additionally, I have a strong grasp of databases, including <b>MySQL and MongoDB,</b> and foundational knowledge in <b>Database Management Systems (DBMS)</b>. My background also covers <b>networking fundamentals</b>, giving me a holistic view of software and hardware interactions, essential for optimizing and troubleshooting complex systems. This blend of theoretical knowledge and practical skills enables me to design efficient, reliable, and secure solutions across various platforms and technologies.</p>
            </div>
            <div className="item5">
              <div className="marquee">
                <div className="marquee-content ">
                  <Marqueee images={images} direction="right"/>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
    </div>
  );
};

export default Skills;
