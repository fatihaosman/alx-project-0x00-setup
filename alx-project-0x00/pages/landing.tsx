// const Landing: React.FC =  () => {
//   return (
//     <div>
//       <h1 className=" text-xl font-extralight">Landing Page</h1>
//     </div>
//   )
// }
// export default Landing    
import React from "react";
import Card from "@/components/Card";

import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-6 flex flex-col gap-4">
      <h1 className="text-xl font-extralight">Landing Page</h1>
       {/* Render Card component */}
      <Card />

      {/* Different buttons */}
      <Button title="Small Rounded" size="small" shape="rounded-sm" />
      <Button title="Medium Rounded" size="medium" shape="rounded-md" />
      <Button title="Large Rounded Full" size="large" shape="rounded-lg" />
      <Button title="Extra Large Rounded Full" size="large" shape="rounded-full" />

      {/* Example with additional styles */}
      <Button
        title="Custom Button"
        size="medium"
        shape="rounded-full"
        additionalStyles="bg-green-500 hover:bg-green-600"
      />
    </div>
  );
};

export default Landing;
