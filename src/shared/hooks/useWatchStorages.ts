import { getProductToStorages } from "@/core/storages/product";
import { useEffect, useState } from "react";

// Custom hook example to watch changes in storage
export const useWatchStorage = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const updateCount = () => {
      const storedProducts = getProductToStorages();
      setCount(storedProducts ? storedProducts.length : 0);
    };

    // Assume an event or some mechanism notifies changes in storage
    window.addEventListener("storageChange", updateCount);

    // Initial fetch
    updateCount();

    return () => window.removeEventListener("storageChange", updateCount);
  }, []);

  return count;
};
