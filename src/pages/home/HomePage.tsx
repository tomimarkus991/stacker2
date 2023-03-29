import { Debug, Physics, RigidBody } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import * as THREE from "three";

import { Block, Lights } from "../../components";

export type Controls = "place";
// optimization
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

// this fixes colors
THREE.ColorManagement.enabled = false;

export const HomePage = () => {
  return (
    <>
      <Physics>
        <>
          <Block />
          {/* floor */}
          <RigidBody type="fixed" args={[1, 1, 1]} position={[0, -1, 0]}>
            <mesh geometry={boxGeometry} scale={[8, 0.4, 8]} receiveShadow>
              <meshStandardMaterial color="green" />
            </mesh>
          </RigidBody>
        </>
        <Debug />
      </Physics>
      <Lights />
      <Perf />
    </>
  );
};
