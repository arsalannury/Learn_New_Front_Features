import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ICounter {
  current: number;
  increment: () => void;
  decrement: () => void;
}

export const useCounter = create(
  devtools<ICounter>((set) => ({
    current: 0,
    decrement: () => set((state) => ({ current: (state.current -= 1) })),
    increment: () => set((state) => ({ current: (state.current += 1) })),
  }))
);
