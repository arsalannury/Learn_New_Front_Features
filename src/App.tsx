function App() {
  return (
    <>
      {/* <div className="perspective-distant mt-28">
        <img
          className="m-auto text-center transform-3d -scale-y-[20%] "
          src="/3d.png"
        />
      </div> */}
      <div className="perspective-[1000px] m-26">
        <div className="transform-3d -rotate-x-45 rotate-y-45 scale-x-200 bg-red-500 w-40 h-40">
          Hello 3D
        </div>
      </div>
    </>
  );
}

export default App;
