const GOOGLE_API_KEY = "AIzaSyBkXK0NB0OCnJz4V8WCSi97KZDbK8wln3k";

export const LIVE_CHAT_COUNT=10;

export const YOUTUBE_API_KEY =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;


  export const YOUTUBE_SEARCH_API = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';

  export const YOUTUBE_VIDEO_API = "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&q=" +
  GOOGLE_API_KEY;
