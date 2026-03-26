"use strict";
import logger from "../utils/logger.js";
import playlistStore from "../models/playlist-store.js";

const stats = {
  createView(request, response) {
    logger.info("Stats page loading!");
    // app statistics calculations
    const playlists = playlistStore.getAllPlaylists();

    let numPlaylists = playlists.length;
    
    let numSongs = playlists.reduce((total, playlist) => total + playlist.songs.length, 0);

	  let average =  numPlaylists > 0 ? numSongs/numPlaylists : 0;

    let totalRating = playlists.reduce((total, playlist) => total + parseInt(playlist.rating), 0);

    let avgRating = numPlaylists > 0 ? totalRating/numPlaylists : 0;

    let mapped = playlists.map(playlist => playlist.rating);

    let maxRating = Math.max(...mapped);

    let maxRated = playlists.filter(playlist => playlist.rating === maxRating);

    let favTitles = maxRated.map(item => item.title);

    let mapped2 = playlists.map(playlist => playlist.length);

    let maxLength = Math.max(...mapped2);

    let maxLengthTitle = playlists.filter(playlist => playlist.length === maxLength);

    let largestPlaylistTitle = maxLengthTitle.map(item => item.title);

    const statistics = {
        displayNumPlaylists: numPlaylists,
        displayNumSongs: numSongs,
        displayAverage: average.toFixed(2),
        displayAvgRating: avgRating.toFixed(2),
        highest: maxRating,
        displayFav: favTitles,
        largestPlaylist: maxLength,
        displayLargestPlaylistTitle: largestPlaylistTitle,
    };

    const viewData = {
      title: "Playlist App Statistics",
      stats: statistics
    };
  
    response.render("stats", viewData);
  },
};

export default stats;
