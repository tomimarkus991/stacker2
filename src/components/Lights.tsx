import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { DirectionalLight } from "three";

export const Lights = () => {
  const far = 20;
  const light = useRef<DirectionalLight>(null!);

  useFrame(state => {
    light.current.position.z = state.camera.position.z + 1 - 4;
    light.current.target.position.z = state.camera.position.z - 4;
    light.current.target.updateMatrixWorld();
  });
  return (
    <>
      <directionalLight
        ref={light}
        castShadow
        position={[4, 4, 1]}
        intensity={1.5}
        shadow-mapSize={[8024, 8024]}
        shadow-camera-near={1}
        shadow-camera-far={far}
        shadow-camera-top={far}
        shadow-camera-right={far}
        shadow-camera-bottom={-far}
        shadow-camera-left={-far}
      />
      <ambientLight intensity={0.5} />
    </>
  );
};
