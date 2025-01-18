import { create } from "zustand";

interface ITodo {
  title: string;
  description: string;
  status: "todo" | "inFLow" | "done";
  expiteAt: Date;
}

interface ITodos {
  todo: ITodo[];
  addNew: (todo: Omit<ITodo, "addNew">) => void;
}

export const useTodo = create<ITodos>((set) => ({
  todo: [
    {
      title: "",
      description: "",
      expiteAt: new Date(),
      status: "todo",
    },
  ],
  addNew: (todo) =>
    set((state) => ({
      todo: [...state.todo, todo],
    })),
}));
