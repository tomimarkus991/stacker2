import { GradientTexture, Plane } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import { useRef, useState } from "react";
import * as THREE from "three";

import { useGame } from "@/stores";

// this fixes colors
THREE.ColorManagement.enabled = false;

// optimization
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

export const StarterBlocks = () => {
  const [smoothedCameraPosition] = useState(() => new THREE.Vector3(1, 1, 1));
  const [smoothedCameraTarget] = useState(() => new THREE.Vector3());

  const starterBlock = useRef<RapierRigidBody>(null!);

  const colorSeed = useGame(state => state.colorSeed);
  console.log("colorSeed", colorSeed);

  useFrame((state, delta) => {
    const starterBlockPosition = starterBlock.current.translation() as THREE.Vector3;
    // get player position and move camera a little bit
    const cameraPosition = new THREE.Vector3();
    cameraPosition.copy(starterBlockPosition);
    cameraPosition.z += 10;
    cameraPosition.y += 20;
    cameraPosition.x += 10;

    // get player position and move camera a little bit
    const cameraTarget = new THREE.Vector3();
    cameraTarget.copy(starterBlockPosition);
    cameraTarget.y += 10;

    // the lower, the slower
    smoothedCameraPosition.lerp(cameraPosition, 5 * delta);
    smoothedCameraTarget.lerp(cameraTarget, 5 * delta);

    // move position
    state.camera.position.copy(smoothedCameraPosition);
    // look at player
    state.camera.lookAt(smoothedCameraTarget);
  });

  const blocksCount = new Array(10).fill(0);
  return (
    <>
      {/* background */}
      <group position={[5, 5, -10]}>
        <Plane scale={100} rotation-y={Math.PI / 4}>
          <meshBasicMaterial>
            <GradientTexture
              stops={[0, 1]} // As many stops as you want
              colors={[`hsl(${colorSeed + 20},50%,50%)`, `hsl(${colorSeed + 50},50%,50%)`]} // Colors need to match the number of stops
              //   colors={["blue", "red"]}
              // size={1000} // Size is optional, default = 1024
            />
          </meshBasicMaterial>
        </Plane>
      </group>
      {blocksCount.map((_, i) => {
        console.log(i);

        return (
          <RigidBody
            restitution={0}
            colliders="hull"
            type="dynamic"
            position={[0, 14 * i + 8, 0]}
            args={[12, 1, 12]}
          >
            <mesh geometry={boxGeometry} scale={[4, 1, 4]}>
              <meshStandardMaterial color={`hsl(${colorSeed + 6 * i},50%,50%)`} />
            </mesh>
          </RigidBody>
        );
      })}
      <RigidBody
        restitution={0}
        colliders="hull"
        ref={starterBlock}
        type="fixed"
        position={[0, 0, 0]}
        args={[1, 1, 1]}
      >
        <mesh geometry={boxGeometry} scale={[4, 12, 4]} receiveShadow>
          <meshStandardMaterial color={`hsl(${colorSeed + 3},50%,50%)`} />
        </mesh>
      </RigidBody>
    </>
  );
};
