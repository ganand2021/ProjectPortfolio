import React from 'react';
import Popup from 'reactjs-popup';
import './PopupContainer.css'

const Project_Tumor_Identification = () => (
  <Popup
    trigger={
      <div className='text-center shadow-2xl shadow-[#176B87] p-5 rounded-xl my-5 flex-1 items-center border border-solid dark:border-[#DAFFFB]'>
        <div className='h-full flex flex-col justify-center items-center'>Tumor Identification using Multiplexed Cellular Structure Annotations</div>
      </div>
    }
    modal
    nested
  >
    {close => (
      <div className='text-center bg-[#DAFFFB] shadow-2xl shadow-[#176B87] p-5 rounded-xl my-5 flex-1'>
      <div className="modal">
        {/* <button className="close" onClick={close}>
          &times;
        </button> */}
        <div className="header"> 
          <h3 className='text-lg font-medium'>Tumor Identification using Multiplexed Cellular Structure Annotations</h3> 
        </div>
        <div className="content justify-center">
          <ul>
            <li>• Conducted thorough exploratory data analysis and performed data preprocessing on samples of multiplexed immunofluorescent cellular structure annotations using Python and Napari. This involved understanding the intricacies of the dataset and preparing it for subsequent machine learning tasks.</li>
            <li>• Undertook a sequential machine learning task focused on cell structure segmentation and classification. Leveraging my expertise in Python and utilizing advanced libraries such as MONAI (Medical Open Network for AI) and PyTorch, I built deep learning models to tackle the challenge.</li>
            <li>• Employed specialized network architectures like UNet and DenseNet, tailored specifically for medical image analysis. These architectures proved to be highly effective in capturing intricate cellular structures and extracting valuable features for accurate tumor identification.</li>
            <li>• Developed and implemented a robust CI/CD pipeline to facilitate model testing and ranking for future iterations. By leveraging GitHub Actions, I ensured seamless integration and automated the testing process, enabling quick and reliable feedback on model performance.</li>
            <li>•To make the model accessible and practical, I designed and implemented a model inference solution in the form of an API using FastAPI. This API allowed users to interact with the trained model and obtain predictions efficiently and easily.</li>
            <li>• Deployed the model inference API on Google Cloud Platform, ensuring its availability and scalability. This deployment allowed users to access the tumor identification system through a user-friendly interface, opening up possibilities for further applications and collaborations.</li>
          </ul>
        </div>
        <div className="actions">
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            <div className='h-10 w-10 rounded-full p-2 inline-flex items-center justify-center hover:bg-[#64CCC5] focus:outline-dotted focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </div>
          </button>
        </div>
      </div>
      </div>
    )}
  </Popup>
);

const Project_Dedup = () => (
  <Popup
    trigger={
      <div className='text-center shadow-2xl shadow-[#176B87] p-5 rounded-xl my-5 flex-1 items-center border border-solid dark:border-[#DAFFFB]'>
        <div className='h-full flex flex-col justify-center items-center'>Hardware Accelerated Implementation for Deduplication and Compression Using Xilinx Zync MPSoC</div>
      </div>
    }
    modal
    nested
  >
    {close => (
      <div className='text-center bg-[#DAFFFB] shadow-2xl shadow-[#176B87] p-5 rounded-xl my-5 flex-1'>
      <div className="modal">
        {/* <button className="close" onClick={close}>
          &times;
        </button> */}
        <div className="header"> 
          <h3 className='text-lg font-medium'>Hardware Accelerated Implementation for Deduplication and Compression Using Xilinx Zync MPSoC</h3> 
        </div>
        <div className="content justify-center">
          <ul>
          <li>• Spearheaded the end-to-end design and development of a novel implementation for the Data deduplication and compression pipeline, tailored for Xilinx Zynq UltraScale+ MPSoC ZU3EG A484 (Ultra96 MPSoC) platform.</li>
          <li>• Employed advanced content-defined chunking techniques based on the renowned Rabin fingerprint algorithm, ensuring efficient segmentation and identification of data blocks for optimal deduplication using C++ in the host CPU of the FPGA and further speed up the process using multithreading.</li>
          <li>• Leveraged the inbuilt SHA engine of Ultra96 MPSoC platform to generate SHA256 keys for the chunks to effectively eliminate duplicate data segments, significantly reducing storage overhead and enhancing data transfer efficiency.</li>
          <li>• Designed a novel implementation of LZW (Lempel-Ziv-Welch) encoding algorithm for data compression in the FPGA logic engine using C and Vitis HLS and optimized the kernel execution to include out-of-order execution using OpenCL.</li>
          <li>• Conducted thorough testing and performance analysis, employing techniques like benchmarking and profiling, to validate the effectiveness and efficiency of the de-duplication and compression algorithms and the final product obtained a compression throughput of 70 Mbps.</li>
          </ul>
        </div>
        <div className="actions">
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            <div className='h-10 w-10 rounded-full p-2 inline-flex items-center justify-center hover:bg-[#64CCC5] focus:outline-dotted focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </div>
          </button>
        </div>
      </div>
      </div>
    )}
  </Popup>
);

const Project_F1 = () => (
  <Popup
    trigger={
      <div className='text-center shadow-2xl shadow-[#176B87] p-5 rounded-xl my-5 flex-1 items-center border border-solid dark:border-[#DAFFFB]'>
        <div className='h-full flex flex-col justify-center items-center'>Accelerating VGG16 DCNN using AWS F1</div>
      </div>
    }
    modal
    nested
  >
    {close => (
      <div className='text-center bg-[#DAFFFB] shadow-2xl shadow-[#176B87] p-5 rounded-xl my-5 flex-1'>
      <div className="modal">
        {/* <button className="close" onClick={close}>
          &times;
        </button> */}
        <div className="header"> 
          <h3 className='text-lg font-medium'>Accelerating VGG16 DCNN using AWS F1</h3> 
        </div>
        <div className="content justify-center">
          <ul>
          <li>• Developed an FPGA-accelerated GEMM kernel using systolic arrays of size 16, which was extended for larger input sizes by leveraging the Block Matrix multiplication algorithm.</li>
          <li>• Implemented an im2col → matrix multiplication → col2im dataflow to create a functional GEMM convolution kernel on the host side resulting in a 70% speedup compared to traditional CPU-based approaches.</li>
          <li>• Constructed a modified version of the VGG16 DCNN by swapping out the conventional convolution kernel with the FPGA accelerated convolution kernel with pre-trained weights using the PyTorch C++ API.</li>
          <li>• Utilized Xilinx Vivado HLS and OpenCL to optimize the performance of the FPGA-accelerated VGG16 DCNN by implementing multiple compute units and out-of-order command queue execution.</li>
          <li>• Tested the modified design on the ImageNet dataset, achieving a top-1 accuracy of 87.5% and a top-5 accuracy of 93.75%.</li>
          </ul>
        </div>
        <div className="actions">
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            <div className='h-10 w-10 rounded-full p-2 inline-flex items-center justify-center hover:bg-[#64CCC5] focus:outline-dotted focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </div>
          </button>
        </div>
      </div>
      </div>
    )}
  </Popup>
);

const Project_Mental_Health = () => (
  <Popup
    trigger={
      <div className='text-center shadow-2xl shadow-[#176B87] p-5 rounded-xl my-5 flex-1 items-center border border-solid dark:border-[#DAFFFB]'>
        <div className='h-full flex flex-col justify-center items-center'>Social Media Text Classification on Mental Health Conditions</div>
      </div>
    }
    modal
    nested
  >
    {close => (
      <div className='text-center bg-[#DAFFFB] shadow-2xl shadow-[#176B87] p-5 rounded-xl my-5 flex-1'>
      <div className="modal">
        {/* <button className="close" onClick={close}>
          &times;
        </button> */}
        <div className="header"> 
          <h3 className='text-lg font-medium'>Social Media Text Classification on Mental Health Conditions</h3> 
        </div>
        <div className="content justify-center">
          <ul>
          <li>• Created a comprehensive dataset comprising 15,000 Reddit posts encompassing diverse mental health disorders using the Python Reddit API Wrapper (PRAW).</li>
          <li>• Explored techniques for clustering, topic modeling and cosine similarity analysis to identify common themes and discussion topics within mental health-related conversations to ensure data integrity and accuracy.</li>
          <li>• Implemented 14 models ranging from fundamental ML models like Naive Bayes and SVM, to custom CNNs, transformer models and state-of-the-art LLM models like RoBERTa and evaluated the dataset’s performance for text classification to possible mental health illnesses.</li>
          <li>• Investigated additional data sources beyond Reddit, namely Twitter to enhance the diversity and generalizability of the dataset.</li>
          </ul>
        </div>
        <div className="actions">
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            <div className='h-10 w-10 rounded-full p-2 inline-flex items-center justify-center hover:bg-[#64CCC5] focus:outline-dotted focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </div>
          </button>
        </div>
      </div>
      </div>
    )}
  </Popup>
);

const Project_Real_or_Fake = () => (
  <Popup
    trigger={
      <div className='text-center shadow-2xl shadow-[#176B87] p-5 rounded-xl my-5 flex-1 items-center border border-solid dark:border-[#DAFFFB]'>
        <div className='h-full flex flex-col justify-center items-center'>Classification of News from Social Media Posts as Real or Fake</div>
      </div>
    }
    modal
    nested
  >
    {close => (
      <div className='text-center bg-[#DAFFFB] shadow-2xl shadow-[#176B87] p-5 rounded-xl my-5 flex-1'>
      <div className="modal">
        {/* <button className="close" onClick={close}>
          &times;
        </button> */}
        <div className="header"> 
          <h3 className='text-lg font-medium'>Classification of News from Social Media Posts as Real or Fake</h3> 
        </div>
        <div className="content justify-center">
          <ul>
            <li>• Curated a comprehensive dataset comprising 45,000 news articles by leveraging multiple verified sources in Kaggle datasets and processed them using a meticulously crafted ETL pipeline to create a training dataset.</li>
            <li>• Investigated additional data sources beyond Kaggle, namely Reddit and Twitter and scraped content to create evaluation and test datasets.</li>
            <li>• Implemented multiple models including transformer, and state-of-the-art LLM models like RoBERTa and evaluated the dataset’s performance in identifying and flagging fake news.</li>
            <li>• Designed a generalized Web Scraping - ETL - Training pipeline to extend the data for future data sources.</li>
          </ul>
        </div>
        <div className="actions">
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            <div className='h-10 w-10 rounded-full p-2 inline-flex items-center justify-center hover:bg-[#64CCC5] focus:outline-dotted focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </div>
          </button>
        </div>
      </div>
      </div>
    )}
  </Popup>
);

const Project_arXiv = () => (
  <Popup
    trigger={
      <div className='text-center shadow-2xl shadow-[#176B87] p-5 rounded-xl my-5 flex-1 items-center border border-solid dark:border-[#DAFFFB]'>
        <div className='h-full flex flex-col justify-center items-center'>Abstract Classification of arXiv Dataset</div>
      </div>
    }
    modal
    nested
  >
    {close => (
      <div className='text-center bg-[#DAFFFB] shadow-2xl shadow-[#176B87] p-5 rounded-xl my-5 flex-1'>
      <div className="modal">
        {/* <button className="close" onClick={close}>
          &times;
        </button> */}
        <div className="header"> 
          <h3 className='text-lg font-medium'>Abstract Classification of arXiv Dataset</h3> 
        </div>
        <div className="content justify-center">
          <ul>
            <li>• Conducted an extensive study of the arXiv dataset, focusing on abstracts and the diverse scientific domains of the publications.</li>
            <li>• Performed volumetric analysis on the arXiv dataset using visualization tools such as Word Clouds and heat maps.</li>
            <li>• Developed and trained multiple models to establish the relationship between abstracts and their corresponding domains/categories.</li>
            <li>• Finetuned the model to predict the most (top 3 or top 5) relevant categories/domains to which the abstract of the paper would belong.</li>
          </ul>
        </div>
        <div className="actions">
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            <div className='h-10 w-10 rounded-full p-2 inline-flex items-center justify-center hover:bg-[#64CCC5] focus:outline-dotted focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </div>
          </button>
        </div>
      </div>
      </div>
    )}
  </Popup>
);

const Project_maxiluz = () => (
  <Popup
    trigger={
      <div className='text-center shadow-2xl shadow-[#176B87] p-5 rounded-xl my-5 flex-1 items-center border border-solid dark:border-[#DAFFFB]'>
        <div className='h-full flex flex-col justify-center items-center'>Maxi-Luz: IoT powered Smart Street-Light Management System</div>
      </div>
    }
    modal
    nested
  >
    {close => (
      <div className='text-center bg-[#DAFFFB] shadow-2xl shadow-[#176B87] p-5 rounded-xl my-5 flex-1'>
      <div className="modal">
        {/* <button className="close" onClick={close}>
          &times;
        </button> */}
        <div className="header"> 
          <h3 className='text-lg font-medium'>Maxi-Luz: IoT powered Smart Street-Light Management System</h3> 
        </div>
        <div className="content justify-center">
          <ul>
            <li>• Designed a novel implementation of an IoT powered Smart Street-Light Management System for automobile guidance under real-time weather conditions while incorporating power-saving strategies.</li>
            <li>• Designed PCB Schematics and layouts for the system using Altium Designer and successfully fabricated a functional PCB.</li>
            <li>• Developed the design around TSAMW25 wireless module with SAMD21 ARM Cortex-M0 microcontroller and ATWINC1500 WiFi chip.</li>
            <li>• Programmed a custom bootloader that allows Over-the-Air-Firmware-Updates (OTAFU) a connected it to Penn Student servers as source server.</li>
            <li>• Designed custom drivers for SHTC3, PIR and ambient light sensors.</li>
            <li>• Developed an IoT message channel between Node RED and the PCB using the HiveMQ MQTT browser client for remote control and data collection.</li>
          </ul>
        </div>
        <div className="actions">
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            <div className='h-10 w-10 rounded-full p-2 inline-flex items-center justify-center hover:bg-[#64CCC5] focus:outline-dotted focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </div>
          </button>
        </div>
      </div>
      </div>
    )}
  </Popup>
);

const Project_PetCare = () => (
  <Popup
    trigger={
      <div className='text-center shadow-2xl shadow-[#176B87] p-5 rounded-xl my-5 flex-1 items-center border border-solid dark:border-[#DAFFFB]'>
        <div className='h-full flex flex-col justify-center items-center'>PetCare: Pet Food and Water Dispenser</div>
      </div>
    }
    modal
    nested
  >
    {close => (
      <div className='text-center bg-[#DAFFFB] shadow-2xl shadow-[#176B87] p-5 rounded-xl my-5 flex-1'>
      <div className="modal">
        {/* <button className="close" onClick={close}>
          &times;
        </button> */}
        <div className="header"> 
          <h3 className='text-lg font-medium'>PetCare: Pet Food and Water Dispenser</h3> 
        </div>
        <div className="content justify-center">
          <ul>
            <li>• Develop a compact and innovative pet feeding system that automates the process of feeding and watering pets at scheduled intervals throughout the day.</li>
            <li>• Utilize an RTC (Real-Time Clock) module to accurately keep track of time and schedule feeding and watering routines.</li>
            <li>• Incorporate IoT-enabled features to allow users to control and monitor the feeding process remotely through their smartphones by integrating an ESP32 module.</li>
            <li>• Implement a liquid depth sensor to accurately measure the water level in the pet&apos;s water bowl and trigger the refilling process when necessary.</li>
            <li>• Utilize a distance sensor to detect the presence of the pet near the feeding area and ensure that the food is dispensed only when the pet is present.</li>
            <li>• Develop a user-friendly mobile application by leveraging the Blynk IoT platform that allows pet owners to customize feeding schedules, monitor the status of food and water levels, and receive notifications about feeding activities.</li>
          </ul>
        </div>
        <div className="actions">
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            <div className='h-10 w-10 rounded-full p-2 inline-flex items-center justify-center hover:bg-[#64CCC5] focus:outline-dotted focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </div>
          </button>
        </div>
      </div>
      </div>
    )}
  </Popup>
);

const Project_Pipeline = () => (
  <Popup
    trigger={
      <div className='text-center shadow-2xl shadow-[#176B87] p-5 rounded-xl my-5 flex-1 items-center border border-solid dark:border-[#DAFFFB]'>
        <div className='h-full flex flex-col justify-center items-center'>Pipelined Superscalar LC4 Microprocessor</div>
      </div>
    }
    modal
    nested
  >
    {close => (
      <div className='text-center bg-[#DAFFFB] shadow-2xl shadow-[#176B87] p-5 rounded-xl my-5 flex-1'>
      <div className="modal">
        {/* <button className="close" onClick={close}>
          &times;
        </button> */}
        <div className="header"> 
          <h3 className='text-lg font-medium'>Pipelined Superscalar LC4 Microprocessor</h3> 
        </div>
        <div className="content justify-center">
          <ul>
            <li>• Spearheaded the end-to-end design, development, and execution of a cutting-edge 16-bit LC4 Microprocessor, employing Verilog as the primary language.</li>
            <li>• Engineered a robust base data-path utilizing intricate combinational logic, which underwent iterative enhancements through the utilization of pipe-lining and super-scaling techniques, ensuring optimal performance and efficiency.</li>
            <li>• Orchestrated the implementation of advanced branch prediction mechanisms, meticulously designed to anticipate and mitigate control hazards, resulting in streamlined instruction flow and reduced branch penalties.</li>
            <li>• Devised and integrated hardware interlock solutions, meticulously crafted to circumvent data hazards, promoting data integrity and maintaining precise program execution.</li>
            <li>• Employed thorough verification methodologies, including simulation and functional testing, to validate the integrity and correctness of the microprocessor design.</li>
            <li>• Conducted rigorous performance analysis and benchmarking, employing state-of-the-art tools and methodologies, to quantify and optimize the microprocessor&apos;s execution speed, latency, and power efficiency.</li>
          </ul>
        </div>
        <div className="actions">
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            <div className='h-10 w-10 rounded-full p-2 inline-flex items-center justify-center hover:bg-[#64CCC5] focus:outline-dotted focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </div>
          </button>
        </div>
      </div>
      </div>
    )}
  </Popup>
);

const Project_CV = () => (
  <Popup
    trigger={
      <div className='text-center shadow-2xl shadow-[#176B87] p-5 rounded-xl my-5 flex-1 items-center border border-solid dark:border-[#DAFFFB]'>
        <div className='h-full flex flex-col justify-center items-center'>3D Scene Reconstruction using NeRF (Neural Radiance Fields)</div>
      </div>
    }
    modal
    nested
  >
    {close => (
      <div className='text-center bg-[#DAFFFB] shadow-2xl shadow-[#176B87] p-5 rounded-xl my-5 flex-1'>
      <div className="modal">
        {/* <button className="close" onClick={close}>
          &times;
        </button> */}
        <div className="header"> 
          <h3 className='text-lg font-medium'>3D Scene Reconstruction using NeRF (Neural Radiance Fields)</h3> 
        </div>
        <div className="content justify-center">
          <ul>
            <li>• Created a sophisticated deep neural network from scratch, inspired by the NeRF architecture and leveraged the training data to learn and understand the intricate spatial and volumetric properties of a 3D scene.</li>
            <li>• Employed the custom NeRF-based neural network to reconstruct a 3D scene with remarkable accuracy and precision from a given collection of 2D images. The network learned to infer the spatial layout and volumetric characteristics of the scene, producing a detailed and comprehensive representation.</li>
            <li>• Implemented an innovative volumetric rendering algorithm that enabled the generation of novel views of the reconstructed 3D scene. Through a rigorous evaluation process, the rendered images demonstrated an impressive Peak Signal-to-Noise Ratio (PSNR) of 26, indicating the high quality and fidelity of the synthesized views.</li>
          </ul>
        </div>
        <div className="actions">
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            <div className='h-10 w-10 rounded-full p-2 inline-flex items-center justify-center hover:bg-[#64CCC5] focus:outline-dotted focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </div>
          </button>
        </div>
      </div>
      </div>
    )}
  </Popup>
);

const PopupContainer = () => (
  // <div className='flex flex-col md:flex-row gap-7'>
  <div className='flex flex-wrap gap-7'>
    <Project_Tumor_Identification className='flex-col'/>
    <Project_Dedup className='flex-col'/>
    <Project_F1 className='flex-col'/>
    <Project_Mental_Health className='flex-col'/>
    <Project_Real_or_Fake className='flex-col'/>
    <Project_arXiv className='flex-col'/>
    <Project_maxiluz className='flex-col'/>
    <Project_PetCare className='flex-col'/>
    <Project_Pipeline className='flex-col'/>
    <Project_CV className='flex-col'/>
  </div>
)

export default PopupContainer;