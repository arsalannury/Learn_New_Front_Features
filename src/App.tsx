import { useEffect, useRef } from "react";

function App() {
  const inertRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (inertRef.current) {
      inertRef.current?.setAttribute("inert", "");
    }
  }, []);

  return (
    <>
      <button
        ref={inertRef}
        className="p-3 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
                   transition-all cursor-pointer duration-300 hover:bg-blue-500 hover:shadow-lg
                   bg-blue-400 rounded-md text-white font-bold inert:opacity-40"
      >
        Click The Button !
      </button>
    </>
  );
}

export default App;
