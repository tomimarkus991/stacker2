import { Center, KeyboardControls, KeyboardControlsEntry } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRegisterPWA, useThemeUtils } from "@redlotus/ui";
import { useMemo } from "react";
import { Route, Routes } from "react-router-dom";

import { ErrorPage } from "@/pages";

import { routesWithSidebar } from ".";

export type Controls = "place";

export const Router = () => {
  useThemeUtils();
  useRegisterPWA();

  const map = useMemo<KeyboardControlsEntry<Controls>[]>(
    () => [{ name: "place", keys: ["Space", "LeftClick"] }],
    []
  );

  return (
    <KeyboardControls map={map}>
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 2000,
          aspect: window.innerWidth / window.innerHeight,
        }}
      >
        <Center>
          <Routes>
            {routesWithSidebar.map(route => (
              <Route key={route.to} path={route.to} element={route.element} />
            ))}

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Center>
      </Canvas>
    </KeyboardControls>
  );
};
