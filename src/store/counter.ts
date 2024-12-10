import { create } from "zustand";

interface ICounter {
  current: number;
  increment: () => void;
  decrement: () => void;
}

export const useCounter = create<ICounter>((set) => ({
  current: 0,
  decrement: () => set((state) => ({ current: (state.current -= 1) })),
  increment: () => set((state) => ({ current: (state.current += 1) })),
}));

