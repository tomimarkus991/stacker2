import { Center } from "@react-three/drei";
import { Debug, Physics } from "@react-three/rapier";
// import { Perf } from "r3f-perf";
import * as THREE from "three";

import { StarterBlocks, Lights } from "@/components";

export type Controls = "place";

// this fixes colors
THREE.ColorManagement.enabled = false;

export const HomePage = () => {
  return (
    <>
      {/* <Perf /> */}
      <Physics>
        <Center>
          <StarterBlocks />
        </Center>
        <Debug />
      </Physics>
      <Lights />
    </>
  );
};
