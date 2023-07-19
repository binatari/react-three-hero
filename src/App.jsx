import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, Html, OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import { Model } from "./components/Models/Scene";
import Hero from "./components/ui/Hero";
import { MotionConfig } from "framer-motion";
import Interface from "./components/ui/Interface";
import Loader from "./components/ui/Loader";

const Scene = () => {
  const boxRef = useRef();

  return (
    <>
      {/* <Box ref={boxRef} args={[1, 1, 1]} rotation={[0.5, 0, 0]}>
        <meshNormalMaterial />
      </Box> */}
      <spotLight position={[50, 50, -30]} castShadow />
      {/* <pointLight position={[50, 50, -30]} intensity={0.1} /> */}
      <pointLight position={[0, -5, 5]} intensity={0.5} />
      <directionalLight position={[0, -5, 0]} intensity={4} />
      <Model position={[0, -20, 5]} />
    </>
  );
};

const App = () => {
  const [section, setSection] = React.useState(0);

  return (
    <MotionConfig
      transition={{
        type: "spring",
        mass: 5,
        stiffness: 500,
        restDelta: 0.0001,
      }}
    >
      {/* <Interface/> */}
      <Canvas camera={{ position: [0, 5, 140], fov: 55, near: 1, far: 20000 }}>
        <ambientLight />
        <ScrollControls pages={3} damping={0.01}>
          <Suspense fallback={<Loader/>}>
          <Scene />
          <Scroll html>
            <Interface />
          </Scroll>
          </Suspense>
        </ScrollControls>
      </Canvas>
    </MotionConfig>
  );
};

export default App;
