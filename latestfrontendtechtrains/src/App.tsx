import { useState, useTransition } from "react";
import { hugeList } from "./hugeList";

function App() {
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [text, setText] = useState<string>("");

  const [isPending, startTransition] = useTransition();

  const handleSearch = (userInput: string) => {
    setText(userInput);

    startTransition(() => {
      const filterList = hugeList.filter((data) =>
        data.email.includes(userInput),
      );

      if (userInput.trim().length === 0) setFilteredData([]);
      else setFilteredData(filterList);
    });
  };

  return (
    <>
      <div className="w-full h-full flex items-center justify-around flex-col mt-10">
        <input
          onChange={(event) => handleSearch(event?.target.value)}
          value={text}
          type="text"
          name="userInput"
          id="input"
          className="outline-none border-purple-500 border px-6 py-1 w-87.5 rounded-md"
        />
        {isPending ? (
          <span className="mt-20">Loading Progress...</span>
        ) : (
          <ul className="max-h-125 overflow-auto mt-20">
            {filteredData.map((data) => (
              <li key={data?.ip_address} className="p-2 text-center">
                {data?.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
