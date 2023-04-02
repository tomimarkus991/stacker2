export const Lights = () => {
  // const far = 100;

  return (
    <>
      {/* <directionalLight
        castShadow
        position={[5, 10, 120]}
        rotation={[0, 0, 20]}
        intensity={1}
        shadow-mapSize={[8024, 8024]}
        shadow-camera-near={1}
        shadow-camera-far={far}
        shadow-camera-top={far}
        shadow-camera-right={far}
        shadow-camera-bottom={-far}
        shadow-camera-left={-far}
      /> */}
      <directionalLight position={[0, 10, 0]} intensity={0.6} />
      <pointLight position={[-10, 0, 30]} intensity={1} />
      <pointLight position={[30, 0, 30]} intensity={1} />
      <hemisphereLight args={["white", "black", 0.6]} />
      {/* <pointLight position={[0, -30, 10]} rotation={[0, 90, 0]} intensity={0.5} /> */}
      {/* <ambientLight intensity={0.3} /> */}
    </>
  );
};
