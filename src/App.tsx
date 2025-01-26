import { useEffect, useOptimistic, useState, useTransition } from "react";

interface IItem {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

function App() {
  const [todos, setTodos] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const getUsers = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const response = await getUsers.json();
        setTodos(response);
      } catch (error) {
        setTodos([]);
        console.log(error);
      }
    };
    getUsers();
  }, []);

  const [optimisticUsersList, setOptimisticUsersList] = useOptimistic(todos);

  const handleClick = (item: IItem) => {
    startTransition(() => {
      setOptimisticUsersList((prevTasks) =>
        prevTasks.filter((task: IItem) => task.id !== item.id)
      );
    });
  };

  return (
    <>
      <ul className="p-5">
        {optimisticUsersList &&
          optimisticUsersList.length > 0 &&
          optimisticUsersList.map((item: IItem) => (
            <li
              key={item.id}
              className="mt-5 cursor-pointer"
              onClick={() => handleClick(item)}
            >
              {item.title}
            </li>
          ))}
      </ul>
    </>
  );
}

export default App;
