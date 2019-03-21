console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
var spotify = new Spotify(keys.spotify);

// i dont know how to get keys.. well i know how to but i dont know HOW to //