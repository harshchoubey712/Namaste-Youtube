import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import VideoCard from "./VideoCard";
import { YOUTUBE_API_KEY } from "./utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [searchResults, setSearchResults] = useState([]); // Store search results
  const [isSearching, setIsSearching] = useState(false); // To track search state
  const [isSideMusicClicked, setIsSideMusicClicked] = useState(false);
  const [isSideSportsClicked, setIsSideSportsClicked] = useState(false);
  const [isSideGamingClicked, setIsSideGamingClicked] = useState(false);
  const [isSideMoviesClicked, setIsSideMoviesClicked] = useState(false);
  const [isTopGamingClicked, setIsTopGamingClicked] = useState(false);
  const [isTopSongsClicked, setIsTopSongsClicked] = useState(false);
  const [isTopSoccerClicked, setIsTopSoccerClicked] = useState(false);
  const [isTopCricketClicked, setIsTopCricketClicked] = useState(false);



  const location = useLocation(); // Get the current URL

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_KEY); // Replace with your API key
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };

  // Check for search query in the URL
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("search");
    const musiccategory = queryParams.get('musiccategory');
    const sportscategory = queryParams.get('sportscategory');
    const gamingcategory = queryParams.get('gamingcategory');
    const moviescategory = queryParams.get('moviescategory');
    const songscategory= queryParams.get('songscategory');
    const soccercategory= queryParams.get('soccercategory');
    const cricketcategory= queryParams.get('cricketcategory');




    if (searchQuery) {
      // If there's a search query, perform the search
      setIsSearching(true);
      fetchSearchResults(searchQuery);
    } 

    else if (musiccategory) {
      // Handle category case, such as 'music'
      fetchCategoryVideos(musiccategory);
    }

    else if (sportscategory) {
      // Handle category case, such as 'music'
      fetchCategoryVideos(sportscategory);
    }

    else if (gamingcategory) {
      // Handle category case, such as 'music'
      fetchCategoryVideos(gamingcategory);
    }

    else if (moviescategory) {
      // Handle category case, such as 'music'
      fetchCategoryVideos(moviescategory);
    }

    else if (songscategory) {
      // Handle category case, such as 'music'
      fetchCategoryVideos(songscategory);
    }

    else if (soccercategory) {
      // Handle category case, such as 'music'
      fetchCategoryVideos(soccercategory);
    }

    else if (cricketcategory) {
      // Handle category case, such as 'music'
      fetchCategoryVideos(cricketcategory);
    }


    
    else {
      // No search query, show homepage videos
      setIsSearching(false);
    }
  }, [location.search]);

  // Function to fetch search results
  async function fetchSearchResults(query) {
    const response = await fetch(`http://localhost:3001/api/search?q=${encodeURIComponent(query)}`);
    const data = await response.json();
    setSearchResults(data.items); // Assuming the API returns an array called 'items'
  }


  // Function to fetch music results
  const fetchCategoryVideos = async (category) => {

     // Check the category and update the corresponding state
  if (category === "music") {
    setIsSideMusicClicked(true); // Set to true when the Music category is clicked
    setIsSideMoviesClicked(false);
    setIsSideGamingClicked(false);
    setIsSideSportsClicked(false);
    setIsTopGamingClicked(false);
    setIsTopSongsClicked(false);
    setIsTopSoccerClicked(false);
    setIsTopCricketClicked(false);


  } else if (category === "movies") {
    setIsSideMoviesClicked(true);  // Set to true when movies category is clicked
    setIsSideMusicClicked(false);
    setIsSideGamingClicked(false);
    setIsSideSportsClicked(false);
    setIsTopGamingClicked(false);
    setIsTopSongsClicked(false);
    setIsTopSoccerClicked(false);
    setIsTopCricketClicked(false);

  } else if (category === "gaming") {
    setIsSideGamingClicked(true);  // Set to true when gaming category is clicked
    setIsSideMusicClicked(false);
    setIsSideMoviesClicked(false);
    setIsSideSportsClicked(false);
    setIsTopSongsClicked(false);
    setIsTopSoccerClicked(false);
    setIsTopCricketClicked(false);
  }

  else if (category === 'sports') {
    setIsSideSportsClicked(true);
    setIsSideMusicClicked(false);
    setIsSideMoviesClicked(false);
    setIsSideGamingClicked(false);
    setIsTopGamingClicked(false);
    setIsTopSongsClicked(false);
    setIsTopSoccerClicked(false);
    setIsTopCricketClicked(false);
  }

  else if (category === 'soccer') {
    setIsTopSoccerClicked(true);
    setIsSideSportsClicked(false);
    setIsSideMusicClicked(false);
    setIsSideMoviesClicked(false);
    setIsSideGamingClicked(false);
    setIsTopGamingClicked(false);
    setIsTopSongsClicked(false);
    setIsTopCricketClicked(false);
  }


  else if (category === 'cricket') {
    setIsTopCricketClicked(true);
    setIsTopSoccerClicked(false);
    setIsSideSportsClicked(false);
    setIsSideMusicClicked(false);
    setIsSideMoviesClicked(false);
    setIsSideGamingClicked(false);
    setIsTopGamingClicked(false);
    setIsTopSongsClicked(false); 
  }

  else if (category === 'songs') {
    setIsTopSongsClicked(true); 
    setIsTopCricketClicked(false);
    setIsTopSoccerClicked(false);
    setIsSideSportsClicked(false);
    setIsSideMusicClicked(false);
    setIsSideMoviesClicked(false);
    setIsSideGamingClicked(false);
    setIsTopGamingClicked(false);
  }
  
    const response = await fetch(`http://localhost:3001/api/search?q=${encodeURIComponent(category)}`);
    const data = await response.json();
    setSearchResults(data.items);  // Assuming your API returns videos in `items`
  };

  return (
    <div className="flex flex-wrap gap-4 justify-start">
      {/* Show homepage videos if not searching */}
      {!isSearching && !isSideMusicClicked &&  !isSideMoviesClicked && !isSideSportsClicked && 
      !isSideGamingClicked && !isTopSongsClicked &&
      !isTopCricketClicked && !isTopSoccerClicked &&

        videos.map((video) => (
          <Link key={video.id} to={`/watch?v=${video.id}`}>
            <VideoCard info={video} />
          </Link>
        ))}

      {/* Show search results if searching */}
      {isSearching && searchResults.length > 0 &&
        searchResults.map((video) => (
          

          <Link key={video.id} to={`/watch?v=${video.id.videoId}`}>
          <VideoCard  info={video} />
        </Link>
        ))}

             {/* Show music results if side music is clicked and not searching */}
             {!isSearching && searchResults.length > 0 &&isSideMusicClicked && 
            searchResults.map((video) => (
                <Link key={video.id} to={`/watch?v=${video.id.videoId}`}>
                    <VideoCard info={video} />
                </Link>
            ))}

               {/* Show gaming results if side gaming is clicked and not searching */}
               {!isSearching && searchResults.length > 0 &&isSideGamingClicked && 
            searchResults.map((video) => (
                <Link key={video.id} to={`/watch?v=${video.id.videoId}`}>
                    <VideoCard info={video} />
                </Link>
            ))}

                 {/* Show movies results if side movies is clicked and not searching */}
                 {!isSearching && searchResults.length > 0 &&isSideMoviesClicked && 
            searchResults.map((video) => (
                <Link key={video.id} to={`/watch?v=${video.id.videoId}`}>
                    <VideoCard info={video} />
                </Link>
            ))}

     {/* Show sports results if side sports is clicked and not searching */}
    
                {!isSearching && searchResults.length > 0 &&isSideSportsClicked && 
            searchResults.map((video) => (
                <Link key={video.id} to={`/watch?v=${video.id.videoId}`}>
                    <VideoCard info={video} />
                </Link>
            ))}

      {/* Show Songs results if top songs is clicked and not searching */}

      
            {!isSearching && searchResults.length > 0 &&isTopSongsClicked && 
            searchResults.map((video) => (
                <Link key={video.id} to={`/watch?v=${video.id.videoId}`}>
                    <VideoCard info={video} />
                </Link>
            ))}
             

        {/* Show Soccer results if top soccer is clicked and not searching */}

                   {!isSearching && searchResults.length > 0 && isTopSoccerClicked && 
            searchResults.map((video) => (
                <Link key={video.id} to={`/watch?v=${video.id.videoId}`}>
                    <VideoCard info={video} />
                </Link>
            ))}
                

             {/* Show cricket results if top cricket is clicked and not searching */}

             
             {!isSearching && searchResults.length > 0 &&isTopCricketClicked && 
            searchResults.map((video) => (
                <Link key={video.id} to={`/watch?v=${video.id.videoId}`}>
                    <VideoCard info={video} />
                </Link>
            ))}


    </div>
  );
};

export default VideoContainer;
