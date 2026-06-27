import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ICourse {
  username: string;
  email: string;
  setUsername: (username: string) => void;
}

export const useCourse = create(
  devtools<ICourse>((set) => ({
    username: "",
    email: "",
    setUsername: (username: string) => set(() => ({ username })),
  }))
);
