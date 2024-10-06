import React from "react";
import Image from "next/image";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-blue-500">
      {/*WRAPPER*/}
      <div className="w-max flex">{/*SINGLE ITEM*/}</div>
      <div className="w-screen h-[100vh] flex flex-col items-center justify around p-4">
        {/*IMAGE CONTAINER*/}
        <div className=" relative flex-1 w-full">
          <Image src="/s24u.png" alt="" fill className="object-contain" />
        </div>
        {/*TEXT CONTAINER*/}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-xl font-bold">Title</h1>
          <p>Description</p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
