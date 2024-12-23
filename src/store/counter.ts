import { create, StateCreator } from "zustand";

interface IRandom {
  randomText: string;
  setRandomText: (text: string) => void;
}

const randomCreator: StateCreator<IRandom> = (set) => ({
  randomText: "",
  setRandomText: (text: string) => set(() => ({ randomText: text })),
});

export const useRandomText = create<IRandom>((...a) => ({
  ...randomCreator(...a),
}));
