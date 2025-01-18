import { useState, useTransition } from "react";

function App() {
  const [isPending, startTransition] = useTransition();
  const [val, setVal] = useState("");

  return (
    <>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center flex-col justify-around">
        <p>{isPending ? "Pending..." : val}</p>
        <input
          style={{ border: "1px solid #000" }}
          type="text"
          name="name"
          id="name"
          onChange={(e) => {
            startTransition(() => {
              setVal(e.target.value);
            });
          }}
        />
      </div>
    </>
  );
}

export default App;
