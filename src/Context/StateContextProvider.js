import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const baseUrl = process.env.REACT_APP_GS_BASE_URL;
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  const getResults = async (url) => {
    console.log(url);
    setLoading(true);
    const res = await fetch(`${baseUrl}${url}`, {
      headers: {
        "x-rapidapi-host": process.env.REACT_APP_GS_RAPID_API_HOST,
        "x-rapidapi-key": process.env.REACT_APP_GS_RAPID_API_KEY,
      },
    });

    const data = await res.json();
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
};
export const useStateContext = () => useContext(StateContext);
