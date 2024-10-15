// // "use client";
// // import Image from "next/image";
// // import React, { useEffect, useState } from "react";

// // const data = [
// //   {
// //     id: 1,
// //     title: "Samsung FE Series",
// //     image: "/slider5.png",
// //   },
// //   {
// //     id: 2,
// //     title: "Samsung S24 Series",
// //     image: "/slider2.png",
// //   },
// //   {
// //     id: 3,
// //     title: "Samsung S23 Series",
// //     image: "/slider6.png",
// //   },
// // ];

// // const Slider = () => {
// //   const [currentSlide, setCurrentSlide] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(
// //       () =>
// //         setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
// //       4000,
// //     );
// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <div className="flex h-[calc(100vh-6rem)] flex-col bg-stone-50 md:h-[calc(100vh-9rem)] lg:flex-row">
// //       {/* TEXT CONTAINER */}
// //       <div className="flex flex-1 flex-col items-center justify-center gap-8 p-2 font-bold text-blue-500">
// //         <h1 className="p-4 text-center text-5xl uppercase md:p-10 md:text-6xl xl:text-7xl">
// //           {data[currentSlide].title}
// //         </h1>
// //         <button className="bg-blue-500 px-8 py-4 text-white">Explore</button>
// //       </div>
// //       {/* IMAGE CONTAINER */}
// //       <div className="relative flex w-full flex-1">
// //         <Image
// //           src={data[currentSlide].image}
// //           alt=""
// //           fill
// //           className="object-cover"
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Slider;

// "use client";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button"; // Using ShadCN button

// const data = [
//   {
//     id: 1,
//     title: "Samsung FE Series",
//     imageLight: "/slider5.png", // Light mode image
//     imageDark: "/slider5.png", // Dark mode image
//   },
//   {
//     id: 2,
//     title: "Samsung S24 Series",
//     imageLight: "/slider2.png",
//     imageDark: "/slider2.png",
//   },
//   {
//     id: 3,
//     title: "Samsung S23 Series",
//     imageLight: "/slider6.png",
//     imageDark: "/slider6.png",
//   },
// ];

// const Slider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(
//       () =>
//         setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
//       4000,
//     );
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex h-[calc(100vh-6rem)] flex-col bg-stone-50 dark:bg-black md:h-[calc(100vh-9rem)] lg:flex-row">
//       {/* TEXT CONTAINER */}
//       <div className="flex flex-1 flex-col items-center justify-center gap-8 p-2 font-bold text-blue-500 dark:text-blue-300">
//         <h1 className="p-4 text-center text-5xl uppercase md:p-10 md:text-6xl xl:text-7xl">
//           {data[currentSlide].title}
//         </h1>
//         <Button className="bg-blue-500 text-white hover:bg-blue-700 dark:bg-blue-300 dark:text-black">
//           Explore
//         </Button>
//       </div>
//       {/* IMAGE CONTAINER */}
//       <div className="relative flex w-full flex-1">
//         <Image
//           src={data[currentSlide].imageLight}
//           alt=""
//           fill
//           className="object-cover dark:hidden" // Light mode image
//         />
//         <Image
//           src={data[currentSlide].imageDark}
//           alt=""
//           fill
//           className="hidden object-cover dark:block" // Dark mode image
//         />
//       </div>
//     </div>
//   );
// };

// export default Slider;

"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Playfair_Display, Source_Code_Pro } from 'next/font/google';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro',
});

const data = [
  {
    id: 1,
    title: "Samsung FE Series",
    imageLight: "/slider5.png",
    imageDark: "/slider5.png",
  },
  {
    id: 2,
    title: "Samsung S24 Series",
    imageLight: "/slider2.png",
    imageDark: "/slider2.png",
  },
  {
    id: 3,
    title: "Samsung S23 Series",
    imageLight: "/slider6.png",
    imageDark: "/slider6.png",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000,
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex h-[calc(100vh-6rem)] flex-col bg-stone-50 dark:bg-black md:h-[calc(100vh-9rem)] lg:flex-row ${playfairDisplay.variable} ${sourceCodePro.variable}`}>
      {/* TEXT CONTAINER */}
      <div className="flex flex-1 flex-col items-center justify-center gap-8 p-2 font-bold text-black dark:text-white">
        <h1 className="p-4 text-center text-5xl uppercase md:p-10 md:text-6xl xl:text-7xl font-playfair-display">
          {data[currentSlide].title}
        </h1>
        <Button className="bg-black text-white hover:bg-black dark:bg-white dark:text-black font-playfair-display">
          Explore
        </Button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="relative flex w-full flex-1">
        <Image
          src={data[currentSlide].imageLight}
          alt=""
          fill
          className="object-cover dark:hidden"
        />
        <Image
          src={data[currentSlide].imageDark}
          alt=""
          fill
          className="hidden object-cover dark:block"
        />
      </div>
    </div>
  );
};

export default Slider;