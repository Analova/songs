import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:50" },
    { title: "Macarena", duration: "3:20" },
    { title: "All Start", duration: "5:34" },
    { title: "I Want It That Way", duration: "4:27" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONGS_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
