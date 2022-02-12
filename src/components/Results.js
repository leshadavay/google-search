import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useStateContext } from "../Context/StateContextProvider";
import { Loading } from "./Loading";
import ReactPlayer from "react-player";

export const Results = () => {
  const { loading, results, getResults, searchText } = useStateContext();
  const location = useLocation();
  console.log(loading, location.pathname, results);
  useEffect(() => {
    if (searchText) {
      if (location.pathname === "./videos") {
        getResults(`search/q=${searchText} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchText}`);
      }
    }
  }, [searchText, location.pathname]);
  if (loading) return <Loading />;
  switch (location.pathname) {
    case "/search":
      return (
        <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
          {results?.results?.map(({ link, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/images":
      return (
        <div className="flex flex-wrap justify-between items-center">
          {results?.image_results?.map(
            ({ image, link: { href, title } }, index) => (
              <a key={index} href={href} target="_blank" rel="noreferrer">
                <img src={image?.src} alt={title} loading="lazy" />
                <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
              </a>
            )
          )}
        </div>
      );
    case "/news":
      return (
        <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
          {results?.entries?.map(({ id, links, source, title }) => (
            <div key={id} className="md:w-2/5 w-full">
              <a
                href={links?.[0].href}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                <p className="text-lg dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
              <div>
                <a
                  href={source?.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline hover:text-blue-300"
                >
                  {source?.href}
                </a>
              </div>
            </div>
          ))}
        </div>
      );
    case "/videos":
      return (
        <div className="flex flex-wrap">
          {results?.results?.map((video, index) => (
            <div key={index} className="p-2">
              <ReactPlayer
                url={video.additional_links?.[0].href}
                controls
                width="355opx"
                height="200px"
              />
            </div>
          ))}
        </div>
      );
    default:
      return "Error";
  }
};
