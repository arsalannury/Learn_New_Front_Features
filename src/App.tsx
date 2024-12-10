import { useCounter } from "./store/counter";

function App() {
  const { current, decrement, increment } = useCounter();
  return (
    <>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center flex-col justify-around">
        <p className="mb-10 font-bold text-xl">{current}</p>
        <div>
          <button
            onClick={increment}
            className="mx-2 rounded-lg px-8 py-3 cursor-pointer bg-linear-90 from-blue-300 via-blue-500 to-blue-700 text-white font-bold inset-shadow-md inset-ring-2"
          >
            increment
          </button>
          <button
            onClick={current > 0 ? decrement : () => {}}
            className="mx-2 rounded-lg px-8 py-3 cursor-pointer bg-linear-90 from-red-300 via-red-500 to-red-700 text-white font-bold inset-shadow-md inset-ring-2"
          >
            decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
