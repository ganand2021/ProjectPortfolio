import React from "react";

import BallCanvas from "./Ball";

// import python from '../../assets/Python-logo-notext.svg.png'
// import c_lang from '../../assets/'
// import cpp_lang from '../../assets/'
// import javascript from '../../assets/'
// import bash from '../../assets/'
import {
    python,
    c,
    cplusplus,
    javascript,
    bash,
    embeddedc,
    tensorflow,
    pytorch,
    html5,
    css3,
    tailwindcss,
    nodejs,
    react,
    fastapi,
    git,
    github
} from '../../assets/asset_index'


const technologies = [
    {
        name: "Python",
        icon: python,
    },
    {
        name: "C",
        icon: c,
    },
    {
        name: "C++",
        icon: cplusplus,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: 'Embedded C',
        icon: embeddedc,
    },
    {
        name: "Bash",
        icon: bash,
    },
    {
        name: "Tensorflow",
        icon: tensorflow,
    },
    {
        name: "PyTorch",
        icon: pytorch,
    },
    {
        name: "HTML 5",
        icon: html5,
    },
    {
        name: "CSS 3",
        icon: css3,
    },
    {
        name: "Tailwind CSS",
        icon: tailwindcss,
    },
    {
        name: "Node.js",
        icon: nodejs,
    },
    {
        name: "React.js",
        icon: react,
    },
    {
        name: "FastAPI",
        icon: fastapi,
    },
    {
        name: "Git",
        icon: git,
    },
    {
        name: "GitHub",
        icon: github,
    },
  ];


const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default Tech;