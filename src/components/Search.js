import React, { useEffect } from "react";
import { useDebounce } from "use-debounce/lib";
import Links from "./Links";

export default function Search() {
  //const[setSearchText] = useStateCo
  const [text, setText] = useState("React");
  const [debouncedValue] = useDebounce(text, 300);
  useEffect(() => {
    if (debouncedValue) {
      setSearchText(debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        type="text"
        className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounder-full shadow-sm outline-none p-6 text-black hover:shadow-large"
        placeholder="Search Google or type URL"
        onChange={(e) => setText(e.target.value)}
      />
      {text && (
        <button
          type="button"
          className="absolute top-1.5 right-4 text-2xl text-gray-500 "
          onClick={() => setText("")}
        >
          x
        </button>
      )}
      <Links />
    </div>
  );
}
