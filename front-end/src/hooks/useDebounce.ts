import { useEffect, useState } from "react";

function useDebounce(
  callback: () => void,
  dependencies: unknown[],
  timeout?: number,
) {
  const [debounceTimeout, setDebounceTimeout] = useState<
    string | number | NodeJS.Timeout | null
  >(null);
  useEffect(() => {
    if (!timeout) callback();
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const newDebounceTimeout = setTimeout(callback, timeout); // Set the debounce delay (in milliseconds)

    setDebounceTimeout(newDebounceTimeout);
    // Cleanup the timeout when the component unmounts
    return () => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies]);
}

export default useDebounce;
