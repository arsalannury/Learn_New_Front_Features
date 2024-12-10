function App() {
  return (
    <>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group">
        <p className="mt-2 font-bold group-hover:bg-red-500 transition-all duration-300">
          First Child
        </p>
        <p className="mt-2 font-bold">Second Child</p>
        <p className="mt-2 font-bold">Third Child</p>
        <p className="mt-2 font-bold">Four Child</p>
      </div>
    </>
  );
}

export default App;
