import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

interface GameState {
  score: number;
  colorSeed: number;
  phase: "ready" | "playing" | "ended";
  start: () => void;
  restart: () => void;
  end: () => void;
}

export const useGame = create(
  subscribeWithSelector<GameState>(set => {
    return {
      score: 0,
      colorSeed: Math.floor(Math.random() * 360),

      startTime: 0,
      endTime: 0,

      phase: "ready",
      start: () => {
        set(state => {
          if (state.phase === "ready") return { phase: "playing", score: 0 };

          return {};
        });
      },
      restart: () => {
        set(state => {
          if (state.phase === "playing" || state.phase === "ended")
            return { phase: "ready", colorSeed: Math.floor(Math.random() * 360) };

          return {};
        });
      },

      end: () => {
        set(state => {
          if (state.phase === "playing") return { phase: "ended", score: 0 };

          return {};
        });
      },
    };
  })
);
