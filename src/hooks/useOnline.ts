import { useSyncExternalStore } from "react";

export function useOnline(): boolean {
    const isOnline = useSyncExternalStore(sunscribe, getSnapshot);
    return isOnline

    function sunscribe(callback: () => void) {
      window.addEventListener("online", callback);
      window.addEventListener("offline", callback);

      return () => {
        window.addEventListener("online", callback);
        window.addEventListener("offline", callback);
      };
    }

    function getSnapshot() {
      return navigator.onLine;
    }
}