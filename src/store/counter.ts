import { create } from 'zustand';



interface IRandom {
  randomText: string;
  setRandomText: (text:string) => void;
}

export const useRandomText = create<IRandom>((set) => ({
  randomText: "",
  setRandomText: (text:string) => set(() => ({randomText: text}))
}))