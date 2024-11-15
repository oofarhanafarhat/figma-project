import React from "react";
import Image from "next/image";

const work = () => {
  return (
    <div className="  sm:w-[1170px ] ">
      <div className="">
        <h1 className="text-gray-400 text-0pacity-100 text-3xl ml-10 mt-10">
          Our
        </h1>
        <h1 className="text-gray-900 text-0pacity-100 text-3xl ml-10  font-bold mb-8">
          Projects
        </h1>
      </div>

      <div className="flex justify-center  w-[1170px]  h-[445px] bg-gray-100 mb-10  ">
        <div>
          <Image
            src="/image 30.png"
            width={670}
            height={435}
            alt=""
            className="ml-10 "
          />
        </div>
        <div className="">
          <h1 className="w-444 text-gray-400 text-opacity-100 text-2xl ml-5 mt-5 ">
            Sample Project 1
          </h1>
          <p className="text-gray-900 text-opacity-100 text-sm w-[400px] h-[120px] px-20 ml-5 mt-10 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            distinctio perferendis molestiae nostrum tenetur quis quaerat vero
            recusandae culpa error dolores fugiat, numquam omnis dolorum maiores
            ipsum, accusamus harum dolore!
          </p>
          <button className="p-3  bg-gray-50 rounded-lg text-gary-900 hover:border-gary-400 border-2 hover: transition-300 transform hover:scale-105 ml-20 mt-6 ">
            View More →
          </button>
        </div>
      </div>
      <div className="flex justify-center  w-[1170px]  h-[445px] bg-gray-100  ">
        <div>
          <Image
            src="/image 33.png"
            width={670}
            height={435}
            alt=""
            className="ml-10 "
          />
        </div>
        <div className="">
          <h1 className="w-444 text-gray-400 text-opacity-100 text-2xl ml-5 mt-5 ">
            Sample Project 2
          </h1>
          <p className="text-gray-900 text-opacity-100 text-sm w-[400px] h-[120px] px-20 ml-5 mt-10 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            distinctio perferendis molestiae nostrum tenetur quis quaerat vero
            recusandae culpa error dolores fugiat, numquam omnis dolorum maiores
            ipsum, accusamus harum dolore!
          </p>
          <button className="p-3  bg-gray-50 rounded-lg text-gary-900 hover:border-gary-400 border-2 hover: transition-300 transform hover:scale-105 ml-20 mt-6 ">
            View More →
          </button>
        </div>
      </div>
      
      <div className="flex justify-center  w-[1170px]  h-[445px] bg-gray-100 mb-10 mt-10  ">
        <div>
          <Image
            src="/image 32.png"
            width={670}
            height={435}
            alt=""
            className="ml-10 "
          />
        </div>
        <div className="">
          <h1 className="w-444 text-gray-400 text-opacity-100 text-2xl ml-5 mt-5 ">
            Sample Project 3
          </h1>
          <p className="text-gray-900 text-opacity-100 text-sm w-[400px] h-[120px] px-20 ml-5 mt-10 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            distinctio perferendis molestiae nostrum tenetur quis quaerat vero
            recusandae culpa error dolores fugiat, numquam omnis dolorum maiores
            ipsum, accusamus harum dolore!
          </p>
          <button className="p-3  bg-gray-50 rounded-lg text-gary-900 hover:border-gary-400 border-2 hover: transition-300 transform hover:scale-105 ml-20 mt-6 ">
            View More →
          </button>
        </div>
      </div>
      
      
      
    </div>
  );
};

export default work;