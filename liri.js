require("dotenv").config();

var keys = require("./keys.js");

var request = require('request');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var fs = require('fs');
var client = new Twitter(keys.twitterKeys);
var input = process.argv;
var action = input[2];
var inputs = input[3];

// im not sure how to go about everything but i can put some of it//
// A function for running a Twitter Search

var callTwitterAPI = function() {
    var client = new Twitter(keys.twitterkeys);

// this is a function for running a Spotify search//
    var callSpotifyAPI = function(songName) {
    if (songName === undefined) {
     songName = "take me away";
}

// this is for a omdb movie//
var callOMDBAPI = function(movieName) {
    if (movieName === undefined) {
      movieName = "hunger games";
    }
