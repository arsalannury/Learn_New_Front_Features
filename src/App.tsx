import { useState, useTransition } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const data = Array.from({ length: 10000 }, (_, index) => `Item ${index + 1}`);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    console.log(event.target.value);

    startTransition(() => {
      const filtered = data.filter((item) => item.includes(value));
      setFilteredData(filtered);
    });
  };

  return (
    <div className="flex items-center justify-center flex-col p-3">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Filter items"
        className="border-white border-1 outline-0"
      />
      {isPending && <p className="font-bold mt-10">Loading...</p>}
      <ul className="list-none mt-20 flex items-center justify-evenly flex-wrap">
        {filteredData.map((item, index) => (
          <li className="text-blue-400" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
