

// const Pill: React.FC = () => {
//   return (
//     <div className=" flex justify-center  items-center bg-[#F9F9F9] px-3 w-auto h-[27px] rounded-full">
//       <p className=" text-sm ">Title</p>
//     </div>
//   )
// }

// export default Pill;




// React.FC
// FC = Function Component
// It tells TypeScript:
// this is a React component
// it may receive props
// it must return JSX
import React from "react";
import { PillProps } from "@/interfaces";


const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <div className="flex justify-center items-center bg-[#F9F9F8] px-3 w-auto h-[27px] rounded-full">
      <p className="text-sm ">{title}</p>
    </div>
  );
};

export default Pill;
