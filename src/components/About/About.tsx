import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex justify-around items-center bg-gray-100 w-96 h-96 sm:w-[1170px] sm:h-[465px] ml-20 border-2 border-gray-400 border-opacity-100 " >
      <div className="w-[600px] flex flex-wrap ">
        <Image src="/image1.png" width={270} height={265} alt="" className="mr-5 mb-20  mt-24 border-2 border-gray-300 border-opacity-100"  />
        <Image src="/image2.png" width={270} height={345} alt="" className="  mt-28 border-2 border-gray-300 border-opacity-100" />
        <Image src="/image3.png" width={240} height={170} alt="" className=" mb-14 border-2 border-gray-300 border-opacity-100" />
      </div>
   
      <div className="w-[500px] ">
      <h1 className="text-gray-400 text-opacity-100 text-2xl justify-start px-10 font-bold mb-3">About</h1>
      <p className="text-gray-900 text-opacity-100 text-sm px-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        consectetur rem recusandae incidunt totam odit neque cumque. Neque illum
        laboriosam quia aperiam quae quos nemo totam sapiente non, assumenda
        asperiores.
      </p>
      <button className="transition-300 transform hover:scale-105  hover:border-2 border-gray-400 hover:bg-gray-50 px-5 py-2 mt-6 ml-6 rounded-lg">READ MORE  → </button>
      </div>
    </div>
  );
};

export default About;
