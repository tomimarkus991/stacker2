import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

// this fixes colors
THREE.ColorManagement.enabled = false;

// optimization
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

export const Block = () => {
  return (
    <RigidBody type="kinematicPosition" position={[0, 12, 0]} args={[12, 1, 12]}>
      <mesh geometry={boxGeometry} scale={[4, 1, 4]} castShadow>
        <meshStandardMaterial color="red" />
      </mesh>
    </RigidBody>
  );
};
