import React from "react";
import Image from "next/image";
import Link from "next/link";

const Proj = () => {
  return (
    <div className="w-[1170px] h-[765]">
      <h1 className="text-gray-400 text-opacity-100 text-4xl ml-10  mb-10">
        0ur Projects
      </h1>
      <div className="flex space-x-4 justify-center ml-10">
        <div className="w-[570px] h-[255] bg-gray-900 text-gray-100 ">
          <h1 className="ml-6 text-3xl mt-10  text-opacity-100 ">Sample </h1>
          <h1 className="ml-6 text-3xl text-opacity-100 ">Project</h1>
          <button className="text-sm  hover:border-2 hover:border-gray-300 hover:transition-300 transform hover:scale-100 ml-10 mt-5 p-2 border-opacity-100 rounded-lg">
            {" "}
            View More →{" "}
          </button>
        </div>
        <div>
          <Image src="/image02.png" width={570} height={255} alt="pic here" />
        </div>
      </div>
      <div className="flex space-x-4 ml-10 mt-5 ">
        <Image src="/image03.png" width={270} height={255} alt="" />
        <Image src="/image04.png" width={470} height={255} alt="" />
        <Image src="/image05.png" width={370} height={255} alt="" />
      </div>
      <div className="flex justify-end">
        <Link href="#">
          {" "}
          <button className=" py-2 rounded-lg px-4 bg-gray-900 mt-6 hover:border-2 border-gray-400 border-opacity-100 hover:transition-300 tarnsform hover:scale-105 hover:border-gray-400 text-gray-300 text-opacity-100 ">
            {" "}
            All Pojects →{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Proj;
