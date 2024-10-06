// import React from "react";
// import Image from "next/image";

// const Slider = () => {
//   return (
//     <div className="flex flex-col h-screen">
//       {/*TEXT CONTAINER*/}
//       <div className="h-1/2 relative">
//         <h1 className="">testing</h1>
//         <button className=""> Explore</button>
//       </div>
//       {/*IMAGE CONTAINER*/}
//       <div className="h-1/2 w-full">
//         <Image src="/slider1.png" alt="" fill />
//       </div>
//     </div>
//   );
// };

// export default Slider;

"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Samsung FE Series",
    image: "/slider5.png",
  },
  {
    id: 2,
    title: "Samsung S24 Series",
    image: "/slider2.png",
  },
  {
    id: 3,
    title: "Samsung S23 Series",
    image: "/slider6.png",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-blue-500 font-bold">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-blue-500 text-white py-4 px-8">Explore</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-full flex-1 relative">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
