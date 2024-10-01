import React,{ useState, useEffect  } from "react";
import { useDispatch,useSelector } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { YOUTUBE_SEARCH_API } from './utils/constants';
import { YOUTUBE_VIDEO_API } from "./utils/constants";
import { YOUTUBE_API_KEY } from "./utils/constants";
import { cacheResults } from "./utils/searchSlice";




const Head = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [videoResults, setVideoResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);  // New state to track if search is active
  //const navigate = useNavigate(); // To navigate to the video container


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

  



  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // Update the URL with the search query and navigate to VideoContainer
      // Manually set the URL and reload the page
    window.location.href = `/?search=${encodeURIComponent(searchQuery)}`;
    //  navigate(`/?search=${encodeURIComponent(searchQuery)}`);
    }
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
          onKeyDown={handleKeyDown} // Listen for Enter key press
          
        />
        <button className=" border border-gray-400 p-2 rounded-r-full">
          Search
        </button>
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
