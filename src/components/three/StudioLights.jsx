import { Environment, Lightformer, SpotLight } from "@react-three/drei";
import React from "react";

const StudioLights = () => {
  return (
    <group name="lights">
      <Environment resolution={256}>
        <group>
          <Lightformer
            form="rect"
            intensity={1}
            position={[-5, 5, -5]}
            scale={10}
            rotateY={Math.PI / 2}
          />
          <Lightformer
            form="rect"
            intensity={1}
            position={[5, 5, -5]}
            scale={10}
            rotateY={Math.PI / 2}
          />
          <Lightformer
            form="rect"
            intensity={1}
            position={[5, 5, 5]}
            scale={10}
            rotateY={Math.PI / 2}
          />
        </group>
      </Environment>
      <SpotLight
        position={[-2, 10, 5]}
        angle={0.15}
        decay={0}
        intensity={Math.PI * 2}
      />
      <SpotLight
        position={[0, -25, 10]}
        angle={0.15}
        decay={0}
        intensity={Math.PI * 2}
      />
      <SpotLight
        position={[0, 15, 5]}
        angle={0.15}
        decay={0.1}
        intensity={Math.PI * 3}
      />
    </group>
  );
};

export default StudioLights;
