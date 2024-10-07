// import Featured from "@/components/Featured";
// import Slider from "@/components/Slider";

// export default function Home() {
//   return (
//     <main>
//       <Slider />
//       <Featured />
//     </main>
//   );
// }

//shadcn

import Featured from "@/components/Featured";
import Slider from "@/components/Slider"; // Import Shadcn components

export default function Home() {
  return (
    <main className="flex flex-col">
      <Slider />
      <Featured />
    </main>
  );
}
