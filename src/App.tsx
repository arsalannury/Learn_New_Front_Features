import { useOnline } from "./hooks/useOnline";
import { useWindowWidth } from "./hooks/useWindowWidth";

function App() {
  const isOnline = useOnline();
  const windowWidth = useWindowWidth();

  return (
    <>
      <p>{isOnline ? "Online" : "Offline"}</p>
      <p>{windowWidth}</p>
    </>
  );
}

export default App;
