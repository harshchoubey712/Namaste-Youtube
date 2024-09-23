import React,{ useState, useEffect  } from "react";
import { useDispatch,useSelector } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { YOUTUBE_SEARCH_API } from './utils/constants';
import { cacheResults } from "./utils/searchSlice";


const Head = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

    /**
   *  searchCache = {
   *     "iphone": ["iphone 11", "iphone 14"]
   *  }
   *  searchQuery = iphone
   */

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("Api call- " +searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
   console.log(json[1]);
   setSuggestions(json[1]);

      // update cache
      dispatch(
        cacheResults({
          [searchQuery]: json[1],
        })
      );

  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1920px-Hamburger_icon.svg.png"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className=" border border-gray-400 p-2 rounded-r-full">
          Search
        </button>
      {showSuggestions && (
        <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s, index) => (
                <li
                  key={index}
                  className="py-2 px-3 shadow-sm hover:bg-gray-100"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
           )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
