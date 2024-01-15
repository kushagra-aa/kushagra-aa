import { useEffect, useState } from "react";

function useDebounce(
  callback: () => void,
  dependencies: unknown[],
  timeout?: number,
) {
  const [isInitialMount, setIsInitialMount] = useState(true);
  const [debounceTimeout, setDebounceTimeout] = useState<
    string | number | NodeJS.Timeout | null
  >(null);

  useEffect(() => {
    if (!isInitialMount) {
      if (!timeout) {
        callback(); // Call immediately if no timeout
      } else {
        if (debounceTimeout) clearTimeout(debounceTimeout); // Clear any existing timeout

        const newDebounceTimeout = setTimeout(callback, timeout); // Set new timeout
        setDebounceTimeout(newDebounceTimeout);
      }
    }

    setIsInitialMount(false); // Mark as not initial mount

    // Cleanup the timeout when the component unmounts
    return () => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout); // Cleanup on unmount
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies, timeout]);
}

export default useDebounce;
