import { useCallback, useState } from "react";

export function useLocalStorageSet(key: string, id: string) {
  const read = useCallback(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : [];
    } catch (error) {
      return [];
    }
  }, [key]);

  const [state, _setState] = useState(() => read().includes(id));

  const setState = (value: boolean) => {
    _setState(value);

    let set = new Set<string>(read());

    set[value ? "add" : "delete"](id);

    localStorage.setItem(key, JSON.stringify(Array.from(set)));
  };

  return [state, setState];
}
