import "dotenv/config";
import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1/";

export function StateContextProvider({ children }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  const getResults = async (url) => {
    setLoading(true);
    const res = await fetch(`${baseUrl}${url}`, {
      headers: {
        "x-rapidapi-host": process.env.GS_RAPID_API_HOST,
        "x-rapidapi-key": process.env.GS_RAPID_API_KEY,
      },
    });

    const data = await res.join();
    setResults(data);
    setLoading(false);
  };
  return (
    <StateContext.Provider
      value={{ getResults, results, searchText, setSearchText, loading }}
    >
      {children}
    </StateContext.Provider>
  );
}
export const useStateContext = () => useContext(StateContext);
