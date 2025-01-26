import { useSyncExternalStore } from "react";

export function useWindowWidth() {
  const windowWidth = useSyncExternalStore(sunscribe, getSnapshot);
  return windowWidth;
}

function sunscribe(callback: () => void) {
  window.addEventListener("resize", callback);

  return () => {
    window.addEventListener("resize", callback);
  };
}

function getSnapshot() {
  return window.innerWidth;
}
