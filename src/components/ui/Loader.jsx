import { Html, useProgress } from "@react-three/drei";
import React from "react";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="h-full w-full bg-[#6f6de2]">
        <p className='text-white '>{progress} % Loader</p>
      </div>
    </Html>
  );
};

export default Loader;
