'use client';
import './globals.css';
import Image from 'next/image'
import hacker from '../../public/hacker.png'
import main_img from '../../public/PXL_20220307_215457916.PORTRAIT.jpg'
import upenn_logo from '../../public/UniversityofPennsylvania_Shield_RGB-2.png'
import nitt_logo from '../../public/National_Institute_of_Technology_Trichy_Logo.png'
import iisc_logo from '../../public/Indian_Institute_of_Science_2019_logo.svg.png'
import vis_logo from '../../public/1616486202955.jpg'
import Head from 'next/head'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { motion } from "framer-motion"
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import Tech from './components/Tech'
import 'react-vertical-timeline-component/style.min.css';
import PopupContainer from './components/PopupContainer.jsx';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true }); // Optional: This hook triggers the animation once the component is in view.

  const textPathVariants = {
    hidden: { pathLength: 0, opacity: 0, fill:'#fff' },
    visible: (i) => {
      const delay = i+1;
      return {
        pathLength: 1,
        opacity: 1,
        fill: "#319795",
        transition: {
          pathLength: { delay,
            duration: 5,
            ease: "easeInOut",
            type: "spring"
          },
          opacity: { delay,
            duration: 0.01
          },
          fill: { delay,
            duration: 3,
          },
        },
      };
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Gopik Anand Portfolio</title>
      </Head>
      <main className="bg-[#DAFFFB] px-10 text-[#001C30] md:text-center dark:bg-[#001C30] dark:text-[#DAFFFB]">
        <section>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl text-teal-600'>Gopik Anand</h1>
            <ul className='flex items-center'>
              <li>
                {(darkMode) ? <BsFillSunFill className='cursor-pointer text-xl' onClick={() => setDarkMode(!darkMode)} /> : <BsFillMoonStarsFill className='cursor-pointer text-xl' onClick={() => setDarkMode(!darkMode)}/>}
              </li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="">
                  <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}>
                    Resume
                  </motion.button>
                </a>
              </li>
            </ul>
          </nav>

          <div className='text-center p-10' ref={ref}>


            <motion.svg className='mx-auto sm:w-[264px] sm:h-[65px] lg:h-[125px] lg:w-[500px]' version="1.0" xmlns="http://www.w3.org/2000/svg"
            // width="264.000000pt" height="65.000000pt"
            viewBox="0 0 264.000000 65.000000"
            preserveAspectRatio="xMidYMid meet"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            >

              <motion.g transform="translate(0.000000,65.000000) scale(0.100000,-0.100000)"
               stroke="none"
               variants={textPathVariants}>
              <motion.path d="M1480 618 c-11 -18 -45 -81 -76 -140 -30 -60 -61 -108 -69 -108 -19
              0 -30 -21 -15 -30 8 -5 -1 -31 -34 -92 -25 -47 -46 -88 -46 -91 0 -4 10 -7 23
              -7 19 0 31 16 67 90 l44 90 47 0 46 0 7 -90 c4 -49 12 -92 17 -96 6 -3 21 -3
              34 0 23 6 23 7 18 99 -6 93 -5 94 18 100 45 12 52 9 45 -23 -6 -33 11 -80 29
              -80 7 0 18 27 25 63 20 105 56 172 86 160 18 -7 18 -49 -2 -129 -16 -61 -16
              -66 1 -84 24 -27 44 -25 76 6 l27 25 26 -26 c28 -28 54 -27 87 1 14 13 18 12
              29 -1 19 -23 63 -18 90 10 l24 26 13 -26 c24 -46 31 -38 53 65 23 101 63 157
              90 125 9 -10 7 -35 -6 -100 -20 -96 -15 -118 29 -123 19 -2 31 5 47 27 l22 29
              23 -26 c31 -36 81 -35 110 2 l21 27 12 -26 c22 -48 85 -21 111 48 20 51 11 53
              -16 5 -27 -49 -53 -63 -53 -29 0 11 11 85 25 165 31 182 31 188 3 184 -22 -3
              -25 -12 -52 -128 -5 -23 -10 -25 -43 -22 -72 5 -126 -48 -138 -136 -6 -49 -46
              -114 -61 -99 -4 4 1 50 11 102 18 92 18 95 0 115 -24 26 -55 25 -90 -2 l-28
              -22 5 22 c5 19 2 22 -22 22 -25 0 -31 -5 -39 -37 -6 -21 -11 -49 -11 -63 0
              -28 -55 -130 -70 -130 -20 0 -20 24 0 105 21 85 20 111 -5 101 -8 -3 -19 2
              -25 10 -29 34 -116 1 -144 -55 -9 -16 -18 -48 -22 -71 -7 -45 -51 -107 -66
              -92 -5 5 -2 35 7 73 18 78 19 131 3 147 -17 17 -54 15 -83 -4 -23 -15 -25 -15
              -25 1 0 12 -7 15 -27 13 -26 -3 -33 -13 -47 -80 -4 -19 -14 -28 -37 -33 -17
              -4 -33 -5 -35 -2 -6 6 23 237 32 261 5 13 -2 16 -35 16 -36 0 -44 -4 -61 -32z
              m-5 -194 l-7 -64 -39 0 -40 0 43 82 c47 91 55 88 43 -18z m533 37 c11 -7 10
              -19 -4 -67 -19 -66 -50 -134 -62 -134 -47 0 -38 118 14 180 28 32 32 34 52 21z
              m514 4 c2 -3 1 -35 -4 -72 -10 -69 -39 -133 -62 -133 -52 0 -45 131 11 192 15
              17 44 24 55 13z"
              variants={textPathVariants}
              stroke="#319795"
              strokeWidth="20"
              strokeLinecap="round"
              />
              <motion.path d="M971 621 c-6 -10 -22 -80 -35 -154 -26 -137 -48 -202 -73 -211 -8 -3
              -16 1 -20 10 -5 14 15 135 33 202 6 21 4 23 -17 20 -20 -2 -28 -15 -46 -68
              -25 -72 -30 -152 -10 -168 33 -26 57 -24 87 10 27 29 30 30 30 11 0 -11 6 -26
              14 -32 12 -10 17 -6 25 26 6 21 11 44 11 51 0 8 15 -6 33 -30 34 -45 68 -58
              93 -37 21 17 56 88 51 102 -2 7 -11 -4 -19 -23 -18 -40 -52 -75 -67 -66 -5 3
              -17 28 -25 54 l-16 48 50 52 c27 29 50 57 50 63 0 15 -43 0 -55 -19 -12 -20
              -77 -83 -82 -79 -1 2 6 50 17 108 25 133 25 149 0 149 -10 0 -24 -8 -29 -19z"
              variants={textPathVariants}
              stroke="#319795"
              strokeWidth="20"
              strokeLinecap="round"
              />
              <motion.path d="M153 615 c-39 -17 -96 -92 -122 -162 -57 -147 -25 -260 70 -251 26 2
              41 13 68 48 l34 45 -6 -49 c-4 -27 -7 -57 -7 -67 0 -10 -13 -25 -30 -34 -111
              -57 -137 -145 -43 -145 34 0 86 56 109 117 10 27 33 68 51 92 18 24 33 48 33
              53 0 5 10 2 22 -6 56 -39 136 -7 172 69 22 46 51 48 42 3 -35 -167 -38 -224
              -13 -255 16 -21 24 -15 31 25 24 139 26 144 52 138 55 -14 133 48 154 122 15
              56 12 90 -10 112 -27 27 -62 25 -97 -4 l-29 -25 4 30 c3 23 1 29 -14 29 -31 0
              -41 -12 -53 -60 -7 -25 -14 -51 -16 -57 -7 -21 -35 -3 -35 22 0 13 -12 37 -26
              54 -21 25 -34 31 -64 31 -71 0 -120 -65 -120 -159 0 -31 -42 -121 -57 -121 -3
              0 -3 15 0 32 21 125 22 118 -13 118 -26 0 -35 -7 -62 -50 -36 -57 -72 -75 -95
              -45 -49 67 65 354 130 329 29 -11 30 -43 4 -94 -27 -52 -26 -60 9 -60 31 0 54
              45 54 104 0 36 -5 48 -26 65 -31 24 -56 26 -101 6z m305 -187 c4 -32 1 -33
              -39 -12 -25 13 -28 18 -18 30 20 24 54 13 57 -18z m259 -17 c-10 -83 -52 -151
              -94 -151 -23 0 -24 2 -18 43 15 86 59 157 98 157 18 0 19 -5 14 -49z m-297
              -18 c22 -10 40 -22 40 -27 0 -21 -43 -97 -61 -106 -32 -18 -49 40 -33 119 4
              17 8 31 10 31 2 0 22 -8 44 -17z m-261 -320 c-17 -33 -31 -49 -46 -51 -24 -4
              -31 20 -15 46 11 17 75 63 80 57 3 -2 -6 -26 -19 -52z"
              variants={textPathVariants}
              stroke="#319795"
              strokeWidth="20"
              strokeLinecap="round"
              />
              <motion.path d="M867 573 c-13 -12 -7 -53 7 -53 20 0 39 27 32 45 -6 15 -28 20 -39 8z"
              variants={textPathVariants}
              stroke="#319795"
              strokeWidth="20"
              strokeLinecap="round"
              />
              </motion.g>
            </motion.svg>

            {/* <h2 className='text-5xl py-2 text-teal-600 font-medium'>
              Gopik Anand
            </h2> */}
            <h3 className='text-2xl py-2 text-[#001C30] dark:text-[#DAFFFB]'>
              Code Junkie
            </h3>
            <p className='text-lg py-5 leading-8 text-[#001C30] dark:text-[#DAFFFB] font-league-spartan'>
              I&apos;m a <span className='text-teal-500'>machine learning engineer</span> by day and a <span className='text-teal-500'>programming polyglot</span> by night.
            </p>
          </div>

          <div className='text-5xl flex justify-center gap-16 py-3 text-[#001C30] dark:text-[#DAFFFB]'>
            <a href="https://www.linkedin.com/in/gopikanand1998/"> <AiFillLinkedin/> </a>
            <a href="https://github.com/ganand2021"> <AiFillGithub/> </a>
            <a href="https://www.instagram.com/gopik_anand/"> <AiFillInstagram/> </a>
          </div>

          <div className='mask border-[#001C30] bg-gradient-to-b from-teal-500 relative mx-auto rounded-full h-80 w-80 my-10 overflow-hidden'>
            <Image src={main_img} alt='derp' layout='fill' objectFit='cover'/>
          </div>
        </section>

        <section>
          <div className='flex justify-center'>
            <h3 className='text-3xl py-1 font-league-spartan'>Education</h3>
          {/* <p className='text-md py-2 leading-8 text-gray-800'>
            I'm a <span className='text-teal-500'>machine learning engineer</span> by day, but a <span className='text-teal-500'>programming polyglot</span> by night.
          </p> */}
          </div>
          <div className='flex flex-col md:flex-row gap-7'>
            <div className='text-center shadow-2xl shadow-[#176B87] p-10 rounded-xl my-10 flex-1 border-2 border-solid dark:border-[#DAFFFB]'>
              <Image className='mx-auto' src={upenn_logo} width={150} height={150}/>
              <h3 className='text-lg font-medium pt-8 pb-2'>University of Pennsylvania</h3>
              <p className='py-2'>Master of Science in Engineering (M.S.E.)</p>
              <p className='py-2'>Electrical Engineering</p>
              {/* <h4 className='py-4 text-teal-600'>Design Tools</h4>
              <p className='text-gray-800 py-1'>C++</p>
              <p className='text-gray-800 py-1'>C++</p>
              <p className='text-gray-800 py-1'>C++</p>
              <p className='text-gray-800 py-1'>C++</p> */}
            </div>
            <div className='text-center shadow-2xl shadow-[#176B87] p-10 rounded-xl my-10 flex-1 border-2 border-solid dark:border-[#DAFFFB]'>
              <Image className='mx-auto' src={nitt_logo} width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2'>National Institute of Technology, Tiruchirappalli</h3>
              <p className='py-2'>Bachelor of Technology (B.Tech)</p>
              <p className='py-2'>Major in Electrical and Electronics Engineering</p>
              <p className='py-2'>Minor in Computer Science and Engineering</p>
              {/* <h4 className='py-4 text-teal-600'>Design Tools</h4>
              <p className='text-gray-800 py-1'>C++</p>
              <p className='text-gray-800 py-1'>C++</p>
              <p className='text-gray-800 py-1'>C++</p>
              <p className='text-gray-800 py-1'>C++</p> */}
            </div>
          </div>

        </section>

        <section>
          <div className='flex justify-center'>
            <h3 className='text-3xl py-1 mb-5 font-league-spartan'>Experience</h3>
          </div>
          <div className='text-justify'>
            <VerticalTimeline
              animate={true}
              lineColor={'#718096'}
            >
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#38b2ac', color: '#001C30' }}
                contentArrowStyle={{ borderRight: '7px solid  #38b2ac' }}
                date="May 2022 - May 2023"
                iconStyle={{ background: '#fff', color: '#fff' }}
                icon={
                <div className='flex justify-center items-center w-full h-full overflow-hidden'>
                  <Image className='w-full' src={upenn_logo}/>
                </div>
                }
              >
                <div className='flex flex-col space-y-2 mb-2 text-white'>
                  <h3 className="vertical-timeline-element-title">Weitzman School of Design, University of Pennsylvania</h3>
                  <h4 className="vertical-timeline-element-subtitle">Graduate Research Assistant</h4>
                  <em>Philadelphia, Pennsylvania, United States</em>
                </div>
                <ul className='text-white'>
                  <li>• Devised a comprehensive action plan for implementing a scalable distributed ledger networks that connects IoT Endpoints to block-chain applications for energy and environmental performance measurement and evaluation and deployed the kits in 30+ locations across the Penn Campus.</li>
                  <li>• Designed PCB Schematics and Fabrication layouts for the Endpoints, consisting of sensors that measure Temperature, Relative Humidity, Air Quality and Power consumption.</li>
                  <li>• Designed drivers for the sensors in Python for execution in the Linux Environment on the RPi and AML-S905X-CC for data collection using the I2C communication protocol and communication with the database hosted on InfluxDB.</li>
                </ul>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#38b2ac', color: '#001C30' }}
                contentArrowStyle={{ borderRight: '7px solid  #38b2ac' }}
                date="September 2020 - January 2021"
                iconStyle={{ background: '#fff', color: '#fff' }}
                icon={
                <div className='flex justify-center items-center w-full h-full overflow-hidden'>
                  <Image className='w-full rounded-3xl' src={vis_logo}/>
                </div>
                }
              >
                <div className='flex flex-col space-y-2 mb-2 text-white'>
                  <h3 className="vertical-timeline-element-title">Visilogix LLP</h3>
                  <h4 className="vertical-timeline-element-subtitle">Deep Learning Engineer</h4>
                  <em>Bengaluru, Karnataka, India</em>
                </div>
                <ul className='text-white'>
                  <li>• Designed and implemented an IoT framework to automate inventory tracking via ESP32 CAM camera module and a cloud-based CNN object detection algorithm which increased the accuracy of SKU identification and logging by 40% and deployed the system across 7 client warehouses.</li>
                  <li>• Constructed an AutoML algorithm that consolidated 20 prediction models made using LightGBM, XGBoost, Prophet, and other advanced time series forecasting models; streamlined the demand prediction process for all SKUs, compensating for COVID related market fluctuations and reducing profit loss by 30%.</li>
                </ul>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#38b2ac', color: '#001C30' }}
                contentArrowStyle={{ borderRight: '7px solid  #38b2ac' }}
                date="May 2019 - July 2019"
                iconStyle={{ background: '#fff', color: '#fff' }}
                icon={
                <div className='flex justify-center items-center w-full h-full overflow-hidden'>
                  <Image className='w-full' src={iisc_logo}/>
                </div>
                }
              >
                <div className='flex flex-col space-y-2 mb-2 text-white'>
                  <h3 className="vertical-timeline-element-title">Department of Electrical Engineering, IISc Bangalore</h3>
                  <h4 className="vertical-timeline-element-subtitle">Undergraduate Researcher</h4>
                  <em>Bengaluru, Karnataka, India</em>
                </div>
                <ul className='text-white'>
                  <li>• Designed a Waveform Recorder using Zynq UltraScale+ MPSoC for recording power quality events at 32kSPS and stores the data after LZW (Lempel-Ziv-Welch) compression in a local server with a custom GUI built using PyQt.</li>
                  <li>• Trained the CNN for power quality event classification with the recorded data from the PQube database transformed using state phasor models to get a test accuracy of 87.34.</li>
                </ul>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#38b2ac', color: '#001C30' }}
                contentArrowStyle={{ borderRight: '7px solid  #38b2ac' }}
                date="Nov 2018 - Jan 2019"
                iconStyle={{ background: '#fff', color: '#fff' }}
                icon={
                <div className='flex justify-center items-center w-full h-full overflow-hidden'>
                  <Image className='w-full' src={nitt_logo}/>
                </div>
                }
              >
                <div className='flex flex-col space-y-2 mb-2 text-white'>
                  <h3 className="vertical-timeline-element-title">National Institute of Technology, Tiruchirappalli</h3>
                  <h4 className="vertical-timeline-element-subtitle">Undergraduate Researcher</h4>
                  <em>Tiruchirappalli, Tamil Nadu, India</em>
                </div>
                <ul className='text-white'>
                  <li>• Automated the operation of household schedulable loads at the cheapest price by running the appliances during non-peak time periods.</li>
                  <li>• Used the built-in WiFi connectivity of the CC3200 microcontroller to collect ToD (Time-of-Day) tariff values from a database in real time.</li>
                  <li>• Devised and implemented a novel algorithm to forecast the best time to run loads with respect to user preference and ToD values in the CC3200 MCU and used it to control load relays.</li>
                  <li>• Implemented the additional provision of modifying the execution order in case of change in user preference.</li>
                </ul>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#38b2ac', color: '#001C30' }}
                contentArrowStyle={{ borderRight: '7px solid  #38b2ac' }}
                date="May 2018 - Jul 2018"
                iconStyle={{ background: '#fff', color: '#fff' }}
                icon={
                <div className='flex justify-center items-center w-full h-full overflow-hidden'>
                  <Image className='w-full' src={nitt_logo}/>
                </div>
                }
              >
                <div className='flex flex-col space-y-2 mb-2 text-white'>
                  <h3 className="vertical-timeline-element-title">National Institute of Technology, Tiruchirappalli</h3>
                  <h4 className="vertical-timeline-element-subtitle">Undergraduate Researcher</h4>
                  <em>Tiruchirappalli, Tamil Nadu, India</em>
                </div>
                <ul className='text-white'>
                  <li>• Designed a system to monitor and control a MircoGrid based on the power produced and required.</li>
                  <li>• Developed a novel algorithm to allot power sources to loads based on priority and choose their source (PV or backup battery) based on availability.</li>
                  <li>• User control on loads was implemented using a cloud network.</li>
                </ul>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className='vertical-timeline-element--no-children'
                iconStyle={{ background: '#fff', color: '#fff' }}
                icon={
                  <div>
                    <img width="64" height="64" src="https://img.icons8.com/flat-round/64/babys-room.png" alt="babys-room"/>
                  </div>
                }
              >
              </VerticalTimelineElement>
            </VerticalTimeline>
            </div>
        </section>
        
        <section>
          <div className='flex justify-center'>
            <h3 className='text-3xl py-4 my-5 font-league-spartan'>Skills</h3>
          </div>
          <Tech />
        </section>


        <section>
          <div className='flex justify-center'>
            <h3 className='text-3xl py-4 my-5 font-league-spartan'>Projects</h3>
          </div>
          <PopupContainer/>
        </section>

      </main>
    </div>
  )
}
