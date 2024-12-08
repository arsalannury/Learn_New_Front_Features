function App() {
  return (
    <>
      <button
        className="p-3 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all cursor-pointer
         hover:bg-blue-500 hover:shadow-lg
       bg-blue-400 rounded-md text-white font-bold shadow-sm inset-shadow-sm inset-shadow-white/15 inset-ring inset-ring-white/15 "
        // shadow-md inset-shadow-sm inset-shadow-white/20 ring ring-blue-600 inset-ring inset-ring-white/15
      >
        Click The Button !
      </button>
    </>
  );
}

export default App;
